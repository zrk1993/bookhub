<template>
  <div class="flex" @click="toBook">
    <div>
      <img :src="data.cover" style="width: 100px;" alt="">
    </div>
    <div class="ml10 flex flex-direction-column">
      <div>{{ data.title }}</div>
      <div>{{ data.author }}</div>
      <div>{{ data.source }}</div>
      <div>{{ data.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    toBook () {
      this.$router.push({ name: 'reader', query: this.data })
    }
  }
}
</script>

<style lang="scss" scoped></style>
