<template>
  <div class="container">
    <webview
      v-if="url"
      class="ifr"
      :src="url"
      :plugins="true"
      nodeintegration
      disablewebsecurity
      ref="web"
      useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"
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
      url: "http://192.168.11.206:8082", //db.get("web_url")
    };
  },
  created() {
    this.onLoad();
    this.onKey();
  },
  methods: {
    onLoad() {
      ipcRenderer.on('command', (event, message) => {
        this.$refs.web.executeJavaScript(`window.__command('${message}')`)
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
</style>
