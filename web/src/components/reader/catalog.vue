<template>
  <div>
    <van-popup v-model="show" get-container="#app" position="left">
      <div class="catalog-box flex flex-direction-column">
        <div>
          <div class="tit fs14">目录</div>
          <div class="flex align-items-center py10 px15">
            <div class="fwb c333 fs14">共{{ toc.length }}章</div>
            <div class="flex-1"></div>
            <div class="c333 fs12" @click="order=!order">{{ order ? '倒序' : '正序' }}</div>
          </div>
          <div class="px15 py5 bg-a fs12">
            正文卷
          </div>
        </div>
        <div class="flex-1 posr">
          <div class="toc-wrap">
            <div class="toc-item" v-for="(v, i) in dataList" :key="i" @click="jump(v)">
              <div class="fs12">{{ v.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { reverse } from 'ramda'

export default {
  data() {
    return {
      show: false,
      toc: [],
      order: true
    }
  },
  computed: {
    dataList () {
      return this.order ? this.toc : reverse(this.toc)
    }
  },
  methods: {
    open (toc) {
      this.toc = toc
      this.show = true
    },
    close () {
      this.show = false
    },
    jump (v) {
      this.$emit('jump', v)
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-box {
  width: 70vw;
  height: 100vh;
  background: white;

  .tit {
    color: #ff3955;
    border-bottom-color: #ff3955;
    margin-top: 10px;
    padding: 10px 0;
    text-align: center;
  }

  .toc-wrap {
    position: absolute;
    top: 0;
    left: 15px;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }

  .toc-item {
    font-weight: 500;
    font-size: 14px;
    padding: 8px 0;
    border-bottom: 1px solid #f6f6f6;
  }
}
</style>
