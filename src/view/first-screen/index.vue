<template>
  <div class="main">
    <!-- <header class="header">
      <header-nav />
    </header> -->
    <section class="container">
      <figure class="container-bg">
      </figure>
      <div class="motto">
        <h2 class="title">Hello, Mission</h2>
        <section class="motto-info">
          <span class="triangle"></span>
          <p class="description">오래 기다리게 해서 죄송합니다</p>

          <div>
            <a class="icon-weixin" href="#">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
            </a>
          </div>
        </section>
      </div>
      <!-- <div @click="goto">
        点击滚动
      </div> -->
      <div v-for="(item, index) in blogData" :key="index">
        <main-section  :data="item" :index="index" />
      </div>
    </section>
    <FooterBox />
  </div>
</template>

<script>
import MainSection from './components/mian-section';
import FooterBox from '../../components/footer';

export default {
  name: "create",
  components: {
    MainSection,
    FooterBox
  },
  data() {                      
    return {
      defaultImgs: [
       'https://static.yancey.app/reduce-server-requests-in-wordpress.png',
       'https://static.yancey.app/como-usar-imagens-webp-no-wordpress.jpg',
       'https://static.yancey.app/44299297_s.jpg',
       'https://static.yancey.app/02542344136f8c6cefd9138785bf6f40.jpg'
      ], 
      blogData: []
    };
  },
  created() {
    // Math.ceil 找到满足条件的最小的整数
    this.getBlogList();
  },
  methods: {
    getBlogList() {
      this.$get("/api/blog/list").then(res => {
        console.log('res-blog-list', res.data.data);
        this.blogData = res.data.data;
        // this.value = res.data.data[2].content;
      });
    },
    goto() {
      let top = window.innerHeight;
      window.scrollTo(0, top, 'smooth');
      // document.documentElement.sc
    }
  }
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  flex-direction: column;
  // .header {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   z-index: 10;
  //   height: 1rem;
  //   width: 100%;
  // }
  .container {
    // overflow-x: hidden;
    .container-bg {
      position: relative;
      // margin-bottom: 3.2rem;
      width: 100%;
      height: 100vh;
      background-image: url(https://static.yancey.app/awar-meman-l-Qc9gcTTUI-unsplash.jpg?x-oss-process=image/format,webp);
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .motto {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0px);
      text-align: center;
      .title {
        font-size: 56px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 0.2rem;
      }
      .motto-info {
        position: relative;
        background: rgba(0, 0, 0, 0.5);
        padding: .2rem .5rem;
        border-radius: 0.1rem;
        .triangle {
          position: absolute;
          top: -0.4rem;
          left: 1rem;
          width: 0px;
          height: 0px;
          border-width: 0.2rem;
          border-style: solid;
          border-color: transparent transparent rgba(0, 0, 0, 0.5);
          border-image: initial;
        }
        .description {
          margin-bottom: .2rem;
          font-size: 24px;
          color: rgb(255, 255, 255);
          font-weight: bold;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .icon-weixin {
          color: #fff;
          position: relative;
          display: inline-block;
          font-size: 26PX;
          .icon {
            width: 30PX;
            height: 30PX;
          }
          &::before { 
            content: '';
            position: absolute;
            top: 40px;
            left: 30px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent transparent rgba(0, 0, 0, 0.5);
            visibility: hidden;
            opacity: 0;
            transition: all 700ms ease 0s;;
	          -webkit-transition: all 700ms ease 0s;; /* Safari */
          }
          &::after {
            content: '';
            position: absolute;
            top: 60px;
            left: 0;
            display: inline-block;
            width: 120px;
            height: 120px;
            box-sizing: border-box;
            padding: 10px;
            visibility: hidden;
            opacity: 0;
            transition: all 700ms ease 0s;;
            -webkit-transition: all 700ms ease 0s;; /* Safari */
            background-color: rgba(0, 0, 0, 0.5);
            background-image: url(./images/weixin.jpg);
            // background-image: url(https://static.yancey.app/blog-fe-static/official-account-qr-code.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            border-radius: 10px;
          }
          &:hover {
            &::after {
              visibility: visible;
              opacity: 1;
              top: 50px;
            }
            &::before {
              visibility: visible;
              opacity: 1;
              top: 30px;
            }
          }
        }
      }
    }
  }
  .footer {
    margin-top: 100px;
    // min-height: 10rem;
  }
}
</style>
