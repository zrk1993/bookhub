<template>
  <div class="control-box" v-if="show">
    <div class="top-box flex align-items-center" :class="{ active: show }" @click.stop.prevent="() => {}">
      <div class="menu-item pl10" @click="onBack">
        <van-icon name="arrow-left" size="16"/>
      </div>
      <div class="flex-1"></div>
    </div>
    <div class="foot-box" :class="{ active: show }" @click.stop.prevent="() => {}">
      <div class="btn-group">
        <div @click="readBtnChapter">
          <svg class="icon icon-catalog">
            <svg id="icon-catalog" viewBox="0 0 16 11" width="100%" height="100%"><g><path d="M15.464 1a.5.5 0 0 0 0-1H4a.5.5 0 0 0 0 1h11.464zM15.464 6a.5.5 0 0 0 0-1H4a.5.5 0 0 0 0 1h11.464zM15.464 11a.5.5 0 0 0 0-1H4a.5.5 0 1 0 0 1h11.464zM1 1a.5.5 0 0 0 0-1H.5a.5.5 0 1 0 0 1H1zM1.135 6a.5.5 0 1 0 0-1H.5a.5.5 0 0 0 0 1h.635zM1.135 11a.5.5 0 1 0 0-1H.5a.5.5 0 1 0 0 1h.635z"></path></g></svg>
          </svg>
          <h4 class="read-opt-footer-h">目录</h4>
        </div>
        <div @click="readBtnProg">
          <svg class="icon icon-progress" v-if="true">
            <svg id="icon-progress" viewBox="0 0 18 9" width="100%" height="100%"><g><rect y="4" width="3" height="1" rx=".5"></rect><rect x="14" y="4" width="4" height="1" rx=".5"></rect><path d="M13 4.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0zm-8 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path></g></svg>
          </svg>
          <svg class="icon icon-progress-on" v-else>
            <svg id="icon-progress-on" viewBox="0 0 18 9" width="100%" height="100%"><g><rect y="4" width="3" height="1" rx=".5"></rect><rect x="14" y="4" width="4" height="1" rx=".5"></rect><path d="M13 4.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0z"></path></g></svg>
          </svg>
          <h4 class="read-opt-footer-h">进度</h4>
        </div>
        <div @click="readBtnSet">
          <svg class="icon icon-font-set" v-if="true">
            <svg id="icon-font-set" viewBox="0 0 16 15" width="100%" height="100%"><g><path d="M13.5 8c.942 0 1.5.465 1.5 1.5v5a.5.5 0 1 0 1 0v-1.938-.897V9.5C16 7.868 14.958 7 13.5 7c-1.369 0-2.5.754-2.5 2a.5.5 0 1 0 1 0c0-.588.619-1 1.5-1z"></path><path d="M10.495 12.5c0 1.203.748 1.951 1.93 2.12.97.138 2.19-.12 3.298-.673l-.446-.894c-.938.467-1.961.684-2.711.577-.716-.102-1.071-.458-1.071-1.13 0-1.148 1.727-1.945 3.907-1.51l.196-.98c-2.714-.542-5.103.56-5.103 2.49zM5.17 1.604a.546.546 0 0 1 .057-.134c-.036.045-.115.091-.23.09-.115 0-.19-.046-.224-.09a.54.54 0 0 1 .057.134l4.194 13.049a.5.5 0 0 0 .952-.306L5.782 1.298c-.315-.98-1.246-.988-1.564 0L.024 14.347a.5.5 0 0 0 .952.306L5.17 1.604z"></path><path d="M8 10V9H2v1z"></path></g></svg>
          </svg>
          <svg class="icon icon-font-set-on" v-else>
            <svg id="icon-font-set-on" viewBox="0 0 16 15" width="100%" height="100%"><g><path d="M13.25 8c.813 0 1.25.364 1.25 1.25v5a.75.75 0 1 0 1.5 0v-1.938-.897V9.25c0-1.78-1.163-2.75-2.75-2.75-1.49 0-2.75.84-2.75 2.25a.75.75 0 1 0 1.5 0c0-.423.49-.75 1.25-.75z"></path><path d="M10.245 12.5c0 1.335.847 2.182 2.144 2.367 1.025.147 2.296-.123 3.446-.696l-.67-1.342c-.895.446-1.87.653-2.564.554-.6-.086-.856-.343-.856-.883 0-.952 1.562-1.673 3.608-1.265l.294-1.47c-2.847-.569-5.402.61-5.402 2.735zM5.658 1.376c-.056.177-.762.17-.816 0l4.194 13.101a.75.75 0 1 0 1.428-.46L6.27.914C5.881-.299 4.623-.31 4.23.915L.036 14.016a.75.75 0 1 0 1.428.46l4.194-13.1z"></path><path d="M8 10V8.5H2V10z"></path></g></svg>
          </svg>
          <h4 class="read-opt-footer-h">设置</h4>
        </div>

        <div @click="readBtnMode">
          <svg class="icon icon-day" v-if="true">
            <svg id="icon-day" viewBox="0 0 16 16" width="100%" height="100%"><g><path d="M11.5 8a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm-6 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zM7.5.506C7.5.226 7.732 0 8 0c.276 0 .5.23.5.506v1.488c0 .28-.232.506-.5.506-.276 0-.5-.23-.5-.506V.506zm0 13.5c0-.28.232-.506.5-.506.276 0 .5.23.5.506v1.488c0 .28-.232.506-.5.506-.276 0-.5-.23-.5-.506v-1.488zM2.347 3.054a.508.508 0 0 1-.004-.71.506.506 0 0 1 .711.003L4.107 3.4a.508.508 0 0 1 .004.71.506.506 0 0 1-.711-.003L2.347 3.054zm9.546 9.546a.508.508 0 0 1-.004-.71.506.506 0 0 1 .711.003l1.053 1.053a.508.508 0 0 1 .004.71.506.506 0 0 1-.711-.003L11.893 12.6zM15.494 7.5c.28 0 .506.232.506.5 0 .276-.23.5-.506.5h-1.488A.508.508 0 0 1 13.5 8c0-.276.23-.5.506-.5h1.488zm-13.5 0c.28 0 .506.232.506.5 0 .276-.23.5-.506.5H.506A.508.508 0 0 1 0 8c0-.276.23-.5.506-.5h1.488zM12.946 2.347a.508.508 0 0 1 .71-.004.506.506 0 0 1-.003.711L12.6 4.107a.508.508 0 0 1-.71.004.506.506 0 0 1 .003-.711l1.053-1.053zM3.4 11.893a.508.508 0 0 1 .71-.004.506.506 0 0 1-.003.711l-1.053 1.053a.508.508 0 0 1-.71.004.506.506 0 0 1 .003-.711L3.4 11.893z"></path></g></svg>
          </svg>
          <svg class="icon icon-night" v-else>
            <svg id="icon-night" viewBox="0 0 15 15" width="100%" height="100%"><path d="M14.063 7.5A6.562 6.562 0 1 1 7.675.94L7.687.47 7.491.046a5.625 5.625 0 1 0 7.463 7.463l-.425-.196-.469.012c.002.058.002.117.002.175zm.04-.384a4.688 4.688 0 1 1-6.22-6.22C8.335.69 8.196.017 7.7.004A7.5 7.5 0 1 0 14.998 7.3c-.014-.496-.687-.635-.895-.185z"></path></svg>
          </svg>
          <h4 class="read-opt-footer-h">夜间</h4>
        </div>
        <div @click="comment">
          <svg class="icon icon-comment">
            <svg id="icon-comment" viewBox="0 0 16 12" width="100%" height="100%"><g transform="translate(-1)"><path d="M2 6c0-3.014 2.459-5 7-5s7 1.986 7 5c0 3.014-2.459 5-7 5H1.5l.354.854 1.706-1.707a.5.5 0 0 0-.028-.734C2.52 8.548 2 7.368 2 6zm.853 3.44l-1.707 1.706A.5.5 0 0 0 1.5 12H9c5.052 0 8-2.381 8-6s-2.948-6-8-6-8 2.381-8 6c0 1.654.643 3.114 1.882 4.173l-.029-.733z"></path><circle cx="5" cy="6" r="1"></circle><circle cx="9" cy="6" r="1"></circle><circle cx="13" cy="6" r="1"></circle></g></svg>
          </svg>
          <h4 class="read-opt-footer-h">评论</h4>
        </div>
      </div>
    </div>
    <Theme ref="Theme"></Theme>
    <ProgressBar ref="ProgressBar"
                 :readingProgress="readingProgress"
                 @jumpCfi="jumpCfi"
                 @nextChapter="nextChapter"
                 @prevChapter="prevChapter"></ProgressBar>
  </div>
</template>

<script>
import Theme from '@/components/reader/theme'
import ProgressBar from '@/components/reader/progress-bar'

export default {
  props: ['readingProgress'],
  components: {
    Theme,
    ProgressBar
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle () {
      this.show = ~this.show
    },
    open () {
      this.show = true
    },
    close () {
      this.show = false
    },
    onBack () {
      this.$router.back()
    },
    readBtnChapter () {
      this.$emit('showCatalog')
    },
    jumpCfi(v) {
      this.$emit('jumpCfi', v)
    },
    nextChapter() {
      this.$emit('nextChapter')
    },
    prevChapter() {
      this.$emit('prevChapter')
    },
    readBtnProg () {
      this.$refs.ProgressBar.open()
    },
    readBtnSet () {
      this.$refs.Theme.open()
    },
    readBtnMode () {

    },
    comment () {}
  }
}
</script>

<style lang="scss" scoped>

.control-box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

svg.icon {
  width: 1em;
  height: 1em;
  vertical-align: -.25ex;
  fill: currentColor;
}

.top-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0px;
  background: rgba(0,0,0,.9);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s, height .2s;

  &.active {
    visibility: visible;
    opacity: 1;
    height: 44px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    height: 44px;
    line-height: 44px;
  }
}

.foot-box {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  background: rgba(0,0,0,.9);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s, height .2s;

  &.active {
    visibility: visible;
    opacity: 1;
    height: 48px;
  }

  .btn-group {
    display: flex;
    justify-content: space-around;

    & > div {
      text-align: center;
      flex: 1;
      h4 {
        text-align: center;
      }
    }

    .icon {
      width: 16px;
      height: 16px;
      fill: #fff;
    }

    .read-opt-footer-h {
      font-size: 10px;
      font-weight: 300;
      color: #fff;
    }
  }
}
</style>
