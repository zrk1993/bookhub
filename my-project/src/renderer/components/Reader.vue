<template>
  <div class="container" style="color: #fff">
    <div v-if="sss">
      <input type="text" v-model="url1">
      <button @click="ok">ok</button>
    </div>
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
      sss: false,
      i: 0,
      type: 'm',
      url: localStorage.getItem('url') || 'https://www.baidu.com',
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
  },
  methods: {
    ok () {
      this.url = this.url1
      localStorage.setItem('url', this.url)
    },
    is () {
      this.$refs.web.insertCSS(`
          .readerContent .app_content {
            background-color: #3b3f41 !important;
          }
          
          *::-webkit-scrollbar {
            width: 1px;
            height: 1px
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

          #3b3f41
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
          this.$refs.web.goForward()
        }
        if (message == 'm') {
          this.type = 'm'
        }
        if (message == 'p') {
          this.type = 'p'
        }
        if (message == 'r') {
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
