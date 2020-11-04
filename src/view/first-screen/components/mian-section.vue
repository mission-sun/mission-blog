<template>
  <div class="main-section">
    <!-- <div :class="[isLeft?'section-right':'section-left']">
      <img class="blog-title-img" :src="data.imgSrc" alt="动画">
    </div> -->
    <div v-if="isLeft" class="section-right">
      <img class="blog-title-img" :src="data.image" alt="动画">
    </div>
    <div class="section-left">
      <p class="time">
        <!-- <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shijian"></use>
        </svg> -->
        {{
          data.time
        }}
        </p>
        <router-link class="title" :to="{ path: '/detail', query: { id: data._id }}">
            {{ data.title }}
        </router-link>
      <!-- <h3 class="title" @click="gotoDetail(data._id)">{{ data.title }}</h3> -->
      <div class="user-status">
        <div class="status">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-icon_chakan"></use>
          </svg>
          11
        </div>
        <div class="status">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-good"></use>
          </svg>
          1212
        </div>
        <!-- <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shijian"></use>
          </svg>
        </div> -->
      </div>
      <!-- <p class="contents">这篇文章非常的优秀，点开即可全部浏览了</p> -->
      <p class="edit">
         <router-link class="edit-btn" :to="{ path: '/blog', query: { id: data._id }}">
            编辑
        </router-link>
        <!-- <a class="edit-btn">编辑</a> -->
      </p>
    </div>
    <div v-if="!isLeft" class="section-right">
      <img class="blog-title-img" :src="data.image" alt="动画">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isLeft() {
      return this.index % 2 === 1;
    }    
  },
  data() {
    return {
      
    }
  },
  methods: {
    gotoDetail(id) {
      console.log('id', id);
      this.$router.push({path: '/home/list'});

    }
  }
}
</script>
<style lang="less" scoped>
.main-section {
  max-width: 800PX;
  margin: 0 auto;
  margin-top: 50PX;
  display: flex;
  overflow: hidden;
  flex-wrap:wrap;  /*换行*/
  justify-content: center;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px -8px;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
  .section-left {
    color: #999;
    width: 350PX;
    box-sizing: border-box;
    padding: 20px;
    .time {
      display: flex;
      align-items: center;
      font-size: 14px;
    }
    .title {
      color: #666;
      font-size: 24px;
      font-weight: bold;
      line-height: 40PX;
      padding: 10px 0;
      cursor: pointer;
      display: block;
    }
    .user-status {
      display: flex;
      font-size: 10px;
      justify-content: flex-start;
      padding: 5px 0;
      .status{
        padding-right: 20PX;
      }
    }
    .contents {
      color: #666;
      font-size: 16px;
      line-height: 30px;
      padding: 10px;
    }
    .edit {
      text-align: right;
      font-size: 16px;
      .edit-btn {
        cursor: pointer;
      }
    }
  }
  .section-right {
    flex: 1;
    overflow: hidden;
    .blog-title-img {
      width: 100%;
      height: 200px;
      // object-fit: cover;
      transition: transform 500ms ease 0s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>