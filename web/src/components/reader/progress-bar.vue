<template>
  <div class="progress-bar" v-if="show" @click.stop.prevent="() => {}">
    <div class="flex align-items-center cfff">
      <div class="flex align-items-center px10" @click="prevChapter">
        <van-icon name="arrow-left" size="16" />
        <span class="fs16">上一章</span>
      </div>
      <div class="flex-1 flex flex-direction-column align-items-center">
        <div class="fs18">第一张</div>
        <div class="fs12 mt3">{{ percentage }}%</div>
      </div>
      <div class="flex align-items-center px10" @click="nextChapter">
        <span class="fs16">下一章</span>
        <van-icon name="arrow" size="16" />
      </div>
    </div>
    <div class="slide">
      <van-slider v-model="value" @change="onChange" style="width: 100%" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['readingProgress'],
  data () {
    return {
      show: false,
      value: 0,
    }
  },
  computed: {
    percentage () {
      if (this.readingProgress) {
        return (this.readingProgress.percentage * 100).toFixed(2)
      }
      return '-'
    }
  },
  mounted() {
    this.value = this.percentage * 1
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
    },
    nextChapter() {
      this.$emit('nextChapter')
    },
    prevChapter() {
      this.$emit('prevChapter')
    },
    onChange () {
      this.$emit('jumpCfi', this.value / 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 48px;
  height: 95px;
  background: rgba(0,0,0,.9);
  color: #fff;
  padding-top: 10px;

  .slide {
    margin-top: 18px;
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
}
</style>
