<template>
  <div id="app">
    <header class="header">
      <header-nav />
    </header>
    <!-- <first-screen /> -->
    <router-view></router-view>
    <!-- <footer-box /> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import FirstScreen from './view/first-screen';
import HeaderNav from './components/header-nav';
// import FooterBox from './components/footer';
import "./common/index.less";
export default{
  name: "app",
  components: {
    // FirstScreen,
    HeaderNav,
  },
  computed: {
  //  ...mapState({
  //     isLogin: state => state.isLogin
  //   }),
  },
  created() {
    // this.getUser();
  },
  methods: {
    // ...mapMutations({
    //   loginState: 'loginState' 
    // }),
    // getUser() {
    //   this.$get("/api/user/islogin").then(res => {
    //     if( res.data.errno == 0) {
    //       this.loginState(true)
    //       this.$router.push({path: '/home/list'}).catch( err => {
    //       })
    //       return
    //     }
    //     this.loginState(false)
    //     this.$router.push({path: '/login'}).catch( err => {
    //     })
    //   });
    // }
  },
  mounted() {

  }
};
</script>

<style lang="less" scoped>
  body {
    background-color: #f7f7f7;
    .header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      // height: 1rem;
      width: 100%;
    }
  }
</style>