<template>
  <div class="fs16 p15 bookshelf">
    <div class="mb15 pb15 bdb" v-for="(v, i) in dataList" :key="i">
      <BookItem :data="v" @change="getData"></BookItem>
    </div>
    <div class="mt20">
      <UploadBook></UploadBook>
    </div>
  </div>
</template>

<script>
import { bookshelfList } from '@/services/book'
import BookItem from '@/components/bookshelf/book-item'
import UploadBook from '@/components/bookshelf/upload-book'

export default {
  components: {
    BookItem,
    UploadBook
  },
  data () {
    return {
      loading: false,
      dataList: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        this.loading = true
        const { code, data, message } = await bookshelfList()
        if (code === 0) {
          this.dataList = data
        } else {
          this.$notify({ type:'warning', message })
        }
      } catch (e) {
        console.log(e)
        this.$notify({ type:'danger', message: e.message })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bookshelf {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #3a3f42;
  color: #b6b9bb;
}
</style>
