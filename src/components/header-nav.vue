<template>
  <div :class="[isShowNav?'nav-animation-show':'','nav-wrap', 'nva-animation-hide']">
    <div class="logo">
      <a class="pic"></a>
      <a class="name">Mission</a>
    </div>
    <div class="menu">
      <a class="menu-item" href="#" v-for="(item, index) in menu" :key="index">
        <i class="el-icon-s-home"></i>
        <router-link :to="item.link">
        {{
          item.lable
        }}
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowNav: false,
      menu: [
        {
          lable: 'home',
          link: '/'
        },
         {
          lable: '写文章',
          link: '/blog'
        },
         {
          lable: '留言板',  
          link: '/message'
        },
         {
          lable: '个人',
          link: '/blog'
        }
      ]
    }
  },
   mounted() {
    window.addEventListener('scroll', this.handler, false)
  },
  methods: {
    handler() {
      let { scrollTop } = document.scrollingElement;
      this.isShowNav = false;
      if ( scrollTop >=10 ) {
        this.isShowNav = true;
      };
      // console.log('scrolltop', scrollTop);
    }
  }
}
</script>
<style lang="less" scoped>
.nva-animation-hide {
  // transition: all 1700ms ease 0s;
  opacity: 0.1;
  &:hover {
    opacity: 1;
  }
}
.nav-animation-show {
  opacity: 1;
}
.nav-wrap {
    box-sizing: border-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0px .4rem;
    font-family: Ubuntu, sans-serif;
    background: rgb(255, 255, 255);
    // opacity: 0.95;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 40px -8px;
    z-index: 200;
    transition: all 550ms linear 0s;
    .logo {
      .name {
        font-size: 16PX;
        line-height: 40px;
        color: #555;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        // display: inline-block;
        // height: .5rem;
        // min-width: 2rem;
        // background: url(../images/name.png) no-repeat center center;
        // background-size: 100% 100%;
        // transform: scale(0.5);
      }
      .pic {
        // height: .5rem;
        // width: 0.5rem;
        // border-radius: 0.5rem;
        // display: inline-block;
        // background: url(../images/name.png) no-repeat center center;
        // background-size: cover;
      }
    }
    .menu {
      font-size: 16px;
      .menu-item {
        &:hover {
          color: rgb(255, 165, 0);
        }
        padding: 0 0.1rem;
      }
    }
}
</style>