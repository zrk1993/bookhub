<template>
  <div class="flex">
    <div class="ml10 flex flex-direction-column py10">
      <div>
        <span @click="toBook">{{ data.title }}</span>
        <span class="ml20" style="cursor: pointer;" @click="removeBook">删除</span></div>
    </div>
  </div>
</template>

<script>
import {removeBook} from "@/services/book";

export default {
  props: ['data'],
  methods: {
    toBook () {
      this.$router.push({ name: 'reader', query: { id: this.data.title } })
    },
    async removeBook() {
      try {
        const {code, message} = await removeBook({
          title: this.data.title
        })
        if (code !== 0) {
          this.$notify({type: 'warning', message})
          return
        }
        this.$emit('change')
      } catch (e) {
        console.log(e)
        this.$notify({type: 'danger', message: e.message})
      }
    },
  }
}
</script>

<style lang="scss" scoped></style>
