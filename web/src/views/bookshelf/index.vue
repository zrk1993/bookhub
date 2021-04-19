<template>
  <div class="fs16 bg-white p15">
    <div class="mb15 pb15 bdb" v-for="(v, i) in dataList" :key="i">
      <BookItem :data="v"></BookItem>
    </div>
  </div>
</template>

<script>
import { bookshelfList } from '@/services/bookshelf'
import BookItem from '@/components/bookshelf/book-item'

export default {
  components: {
    BookItem
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
          this.dataList = data.data
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
