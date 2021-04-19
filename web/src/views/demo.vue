<template>
  <div class="">
    40411
  </div>
</template>

<script>
import { bookshelfList } from '@/services/bookshelf'

export default {
  data () {
    return {
      loading: false,
      dataList: []
    }
  },
  mounted() {
  },
  methods: {
    async getData () {
      try {
        this.loading = true
        const { code, data, message } = await bookshelfList()
        if (code === 0) {
          this.dataList = data.date
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
