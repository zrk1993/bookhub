<template>
  <div v-if="show" class="theme-box">
    <div>
      <div class="read-set-font">
        <div id="readFontDown" class="read-font-down">
          <svg class="icon icon-size-down">
            <svg id="icon-size-down" viewBox="0 0 18 15" width="100%" height="100%"><g><path d="M5.97.668h-.94l5 14a.5.5 0 0 0 .94-.336l-5-14a.5.5 0 0 0-.94 0l-5 14a.5.5 0 0 0 .94.336l5-14z"></path><path d="M9 10V9H2v1zM17.5 9a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1h6z"></path></g></svg>
          </svg>
        </div>
        <div class="flex-1 slide">
          <van-slider v-model="value" @change="onChange" style="width: 100%" />
        </div>
        <div id="readFontUp" class="read-font-up">
          <svg class="icon icon-size-up">
            <svg id="icon-size-up" viewBox="0 0 18 15" width="100%" height="100%"><g><path d="M5.97.668h-.94l5 14a.5.5 0 0 0 .94-.336l-5-14a.5.5 0 0 0-.94 0l-5 14a.5.5 0 0 0 .94.336l5-14z"></path><path d="M9 10V9H2v1zM17.5 9a.5.5 0 1 0 0-1h-6a.5.5 0 1 0 0 1h6z"></path><path d="M14 11.5a.5.5 0 1 0 1 0v-6a.5.5 0 1 0-1 0v6z"></path></g></svg>
          </svg>
        </div>
      </div>
      <div>
        <div id="readSetSkin" class="read-set-skin">
          <div class="btn-group">
            <div class="btn-group-cell" @click="onTheme(v)" :class="{ active: v.code == theme }" :style="{ 'background-color': v.color }" v-for="(v, i) in themes" :key="i">
              <svg class="icon icon-ok center">
                <svg id="icon-ok" viewBox="0 0 9 6" width="100%" height="100%"><path d="M2.646 5.854a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0-.708-.708l-5 5h.708l-2.5-2.5a.5.5 0 0 0-.708.708l2.5 2.5z"></path></svg>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      value: 0,
      theme: 'default',
      themes: [{
        code: 'default',
        color: '#c4b395',
        // background: require('../../assets/skin-default.png')
      }, {
        code: 'blue',
        color: '#cad9e8'
      }, {
        code: 'green',
        color: '#d1edd1'
      }, {
        code: 'light',
        color: '#e6e6e6'
      }]
    }
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
    },
    onChange () {},
    onTheme (v) {
      this.theme = v.code
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-box {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 48px;
  height: 110px;
  background: rgba(0,0,0,.9);
  color: #fff;
  padding-top: 10px;

  .slide {
    margin-top: 2px;
    padding: 0 10px 0 15px;
    &::v-deep {
      .van-slider {
        background-color: rgba(255,255,255,.2);
      }
      .van-slider__button {
        width: 14px;
        height: 14px;
        background-color: #ff3955;
      }
      .van-slider__bar {
        background-color: #ff3955;
      }
    }
  }

  .read-set-font {
    display: flex;
    align-items: center;
    padding: 0 10px 5px 10px;
    border-bottom: 1px solid rgba(255,255,255,.1);

    .read-font-down {
      padding: 5px 2px 5px 10px;
    }
    .read-font-up {
      padding: 5px 5px 5px 10px;
    }

    svg.icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
      color: #ffffff;
    }
  }

  .btn-group {
    display: flex;
    justify-content: space-around;
    margin: 10px 5px 5px 10px;
    .btn-group-cell {
      flex: 1;
      margin: 0 15px 0 15px;
      padding: 6px 0;
      display: flex;
      justify-content: center;
      border-radius: 3px;
      box-shadow: inset 0 0.5px, inset 0.5px 0, inset -0.5px 0, inset 0 -0.5px;
      color: transparent;
      -webkit-transition: color .15s;
      transition: color .15s;
      position: relative;
      background-size: 100% 100%;

      .icon>svg, svg.icon {
        width: 16px;
        height: 16px;
        vertical-align: -.25ex;
        fill: currentColor;
        visibility: hidden;
        color: #ff3955;
      }

      &.active {
        color: #ff3955;
        box-shadow: inset 0 0.5px, inset 0.5px 0, inset -0.5px 0, inset 0 -0.5px;
        transition: color .15s;
        .icon>svg, svg.icon {
          visibility: visible;
        }
      }
    }
  }

}
</style>
