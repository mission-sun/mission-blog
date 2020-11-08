<template>
  <div id="app" class="app-wrap">
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
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
// import FooterBox from './components/footer';
import "./common/index.less";
import Pop from './components/pop';
export default{
  name: "app",
  components: {
    // FirstScreen,
    Pop,
    HeaderNav,
    'popper': Popper
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
    height: 100%;
    .header {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
    }
    .app-wrap {
      background-color: #f4f5f5;
      min-height: 100%;
      overflow: hidden;
    }
  }
</style>