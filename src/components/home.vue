<template>
  <div class="hello">
    <h1 style="text-align: center; line-height: 40px; font-size: 20px">{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "这是我的微博博客(mission)"
    };
  }
};
</script>

<style scoped lang="less"></style>
