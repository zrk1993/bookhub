<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/" icon="wap-home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/team" icon="friends-o">团队</van-tabbar-item>
      <van-tabbar-item icon="after-sale" v-if="orderAccept">
        <template slot="icon">
          <img src="../assets/radar.gif" style="width: 35px; height: 35px; border-radius: 100px; object-fit: cover;" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/message" icon="chat-o">消息</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data()  {
    return {
      active: ''
    }
  },
  computed: {
    orderAccept () {
      return this.$store.state.user && this.$store.state.user.state == 'trading'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
