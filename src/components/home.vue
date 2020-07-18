<template>
  <div class="main-wrap">
    <header class="main-header">
      <div class="main-header-left">

      </div>
      <div class="main-header-center">
        <p class="main-title-solgo">{{ msg }}</p>
        <p>用心去copy每一行代码</p>
      </div>
      <div class="main-header-right">
          <el-button type="primary"  @click="createNewBlog" round>创建博客</el-button>
      </div>
    </header>
    <!-- <h1 style="text-align: center; line-height: 40px; font-size: 20px">{{ msg }}</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "爱小厨！",
    };
  },
  methods: {
    createNewBlog() {
      this.$router.push('/home/create');
    }
  }
};
</script>

<style scoped lang="less">
.main-header {
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 80px;
  z-index: 250;
  overflow: hidden;
  display: flex;
  .main-header-left{
    width: 30%;
  }
  .main-header-center {
    flex: 1;
    // max-width: 560px;
    // margin: 0 auto;
    // text-align: left;
  }
  .main-header-right {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-title-solgo {
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
