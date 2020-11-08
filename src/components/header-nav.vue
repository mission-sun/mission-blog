<template>
  <!-- <div :class="[isShowNav?'nav-animation-show':'','nav-wrap', 'nva-animation-hide']"> -->
  <div v-if ="isShowNav" :class="['nav-wrap']">
    <div class="logo">
      <!-- <a class="pic"></a> -->
      <!-- <a class="name">Mission</a> -->
      <router-link class="name" to="/">
        你好打工人  
        <svg class="icon icon-size" aria-hidden="true">
          <use xlink:href="#icon-icon-test"></use>
        </svg>
      </router-link>
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
      isShowNav: true,
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
          link: '/person'
        }
      ]
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handler, false)
  },
  watch: {
    // 对路由变化作出响应...
    $route(to, from) {
      console.log('to', to.path);
      this.isShowNav = true;
      if (to.path == '/blog') {
        this.isShowNav = false;
      }
    }
  },
  methods: {
    // handler() {
    //   let { scrollTop } = document.scrollingElement;
    //   this.isShowNav = false;
    //   if ( scrollTop >=10 ) {
    //     this.isShowNav = true;
    //   };
    // }
  }
}
</script>
<style lang="less" scoped>
.nva-animation-hide {
  // opacity: 0.1;
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
    padding: 0px 100px;
    font-family: Ubuntu, sans-serif;
    background: rgb(255, 255, 255);
    z-index: 200;
    transition: all 550ms linear 0s;
    .logo {
      .name {
        font-size: 16PX;
        line-height: 40px;
        color: #555;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      .icon-size {
        width: 20px;
        height: 20px;
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