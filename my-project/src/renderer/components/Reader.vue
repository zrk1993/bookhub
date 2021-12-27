<template>
  <div class="container" style="color: #fff">
    <div v-if="sss" :style="{ 'background-color': background, color }" style="padding: 5px;">
      <div>
        <span>url:</span>
        <input type="text" v-model="url1"> &nbsp;&nbsp;

        <span>font-size:</span>
        <input type="number" v-model="fontSize" style="width: 30px;">
      </div>
      <div>
        <span>background:</span>
        <input type="color" v-model="background"> &nbsp;&nbsp;&nbsp;

        <span>color:</span>
        <input type="color" v-model="color">
      </div>
      <div>
        <span>interval:</span>
        <input type="interval" v-model="interval"> &nbsp;&nbsp;&nbsp;
      </div>
      <button style="width: 100%; margin-top:5px;" @click="ok">save</button>
    </div>
    <!-- <div class="progress-box">
      <progress class="pr" value="22" max="100"></progress> 
    </div> -->
    <webview
      v-if="url"
      class="ifr"
      :key="type + i"
      :src="url"
      :plugins="true"
      nodeintegration
      disablewebsecurity
      ref="web"
      :useragent="useragent"
    ></webview>
  </div>
</template>

<script>
import hotkeys from "hotkeys-js";
import { ipcRenderer } from "electron";

export default {
  name: "web",
  data() {
    return {
      mousedowntime: 0,
      sss: false,
      i: 0,
      interval: +localStorage.getItem('interval') || 3000,
      type: 'm',
      timer: null,
      fontSize: localStorage.getItem('fontSize') || '18',
      url: localStorage.getItem('url') || 'https://www.baidu.com',
      background: localStorage.getItem('background') || '#3b3f41',
      color: localStorage.getItem('color') || 'https://www.baidu.com',
      url1: localStorage.getItem('url'),
    };
  },
  computed: {
    useragent () {
      if (this.type == 'm') {
        return 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
      } else {
        return ''
      }
    }
  },
  mounted() {
    this.onLoad();
    this.onKey();

    document.oncontextmenu = () => {
      this.nextPage()
    }
    document.ondblclick = () => {
      console.log('aaaa')
      ipcRenderer.send("command", "boss");
    }
    document.addEventListener('mousedown', () => {
      if (Date.now() - this.mousedowntime < 280) {
        ipcRenderer.send("command", "boss");
      }
      this.mousedowntime = Date.now()
    })
  },
  methods: {
    autoPage () {
      if (this.timer) {
        clearInterval(this.timer)
      } else {
        this.timer = setInterval(() => {
          this.nextPage()
        }, this.interval)
      }
    },
    nextPage () {
      this.$refs.web.executeJavaScript(`document.documentElement.scrollTop += document.documentElement.clientHeight * 1`)
    },
    ok () {
      this.url = this.url1
      localStorage.setItem('url', this.url)
      localStorage.setItem('fontSize', this.fontSize)
      localStorage.setItem('background', this.background)
      localStorage.setItem('color', this.color)
      localStorage.setItem('interval', this.interval)
      this.is()
    },
    is () {
      this.$refs.web.insertCSS(`
          .readerContent .app_content {
            background-color: ${this.background} !important;
          }
          .readerContent .app_content .readerChapterContent {
            margin-left: 5px;
            margin-right: 5px;
          }
          .readerContent .app_content .readerChapterContent,
          .readerContent .app_content .readerChapterContent *,
          .readerContent .app_content .readerChapterContent body,
          .readerContent .app_content .readerChapterContent span {
            font-size: ${this.fontSize}px !important;
            // line-height: 70%;
            color: ${this.color} !important;
          }
          *::-webkit-scrollbar {
            width: 1px;
            height: 1px;
          }

          *::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: rgba(100, 100, 100, .5);
            cursor: pointer
          }
          
          *::-webkit-scrollbar-thumb:active {
            background: rgba(250, 250, 250, .6);
          }

          *::-webkit-scrollbar-track {
            box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.15);
            border-radius: 10px;
            background   : rgba(100, 100, 100, .1);
          }
        `)
    },
    onLoad() {
      this.$refs.web.addEventListener("did-stop-loading", ()=> {
        //注入css
        this.is()
      });
      this.$refs.web.addEventListener("dom-ready", ()=> {
        //注入css
        this.is()
      });
      ipcRenderer.on('command', (event, message) => {
        try {
          this.$refs.web.executeJavaScript(`window.__command('${message}')`)
        } catch (e) {
          console.log(e)
        }
        if (message == 'prev_page') {
          this.$refs.web.goBack()
        }
        if (message == 'next_page') {
          this.nextPage()
        }
        if (message == 'auto_page') {
          this.autoPage()
        }
        if (message == 'm') {
          this.type = 'm'
        }
        if (message == 'p') {
          this.type = 'p'
        }
        if (message == 'r') {
          this.i += 1
          this.$refs.web.reload()
        }
        if (message == 'i') {
          this.$refs.web.openDevTools()
        }
        if (message == 'u') {
          this.sss = !this.sss
        }
        console.log(message)
      });
    },
    onSo() {
      this.url = this.input;
      ipcRenderer.send("webOpacity", "change");
    },
    open() {
      if (this.is_setting) {
        this.is_setting = false;
      } else {
        this.is_setting = true;
      }
    },
    onKey() {
      var that = this;

      hotkeys.filter = function (event) {
        return true;
      };

      hotkeys("*", function (e) {
        if (e.key === "z") {
          var t = document.querySelector(".ifr");
          t.reload();
        } else if (e.key === "-") {
          ipcRenderer.send("webOpacity", "-");
        } else if (e.key === "+") {
          ipcRenderer.send("webOpacity", "+");
        } else if (e.key === "c") {
          that.open();
        } else if (e.key === "x") {
          ipcRenderer.send("webOpacity", "exit");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 0px;
  background: transparent;

  .ifr {
    width: 100%;
    height: 100%;
    border: 0px;
    background: transparent;
  }

  .progress-box {
    position: fixed;
    bottom: -10px;
    left: 0;
    right: 0;

    .pr {
      width: 100%;
      height: 2px;
      background: rgba(0, 0, 0, 0);
    }
    progress::-webkit-progress-bar {
      border-radius: 8px;
    }
    progress::-webkit-progress-value {
      border-radius: 8px;
    }
  }
}

* {
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #c8c8c8;
    cursor: pointer
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #bebebe
  }

  &::-webkit-scrollbar-thumb:active {
    background: #b0b0b0
  }

  &::-webkit-scrollbar-track {
    box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    background   : #f3f3f3;
  }
}

</style>
