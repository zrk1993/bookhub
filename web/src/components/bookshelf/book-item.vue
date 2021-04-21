<template>
  <div class="flex" @click="toBook">
    <div class="ml10 flex flex-direction-column py10">
      <div>{{ data.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    toBook () {
      this.$router.push({ name: 'reader', query: { id: this.data.book_id } })
    }
  }
}
</script>

<style lang="scss" scoped></style>
