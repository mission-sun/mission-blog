<template>
  <div>
    <div class="main-edit" id="main-edit">
      <div class="editorHeader">
        <div class="left-box">
          <input class="title" v-model="title" type="text" placeholder="请输入文章标题">
        </div>
        <div class="left-box">
          <input class="title" v-model="description" type="text" placeholder="请输入文章描述">
        </div>
         <div class="right-box">
           <span @click="publish" class="publish">发布文章</span>
        </div>
      </div>
      <mavon-editor
      class="main-edit-blog" 
      @save="save"
      defaultOpen="preview"
      :subfield="true"
      :toolbarsFlag="true"
      v-model="value"/>
    </div>
  </div>
</template>

<script>

// 正则表达式 
// private String removeHtml(String html) {
//     String content = "";
//     content = html.replaceAll( ".*?<body.*?>(.*?)<\\/body>", "$1");
//     content=content.replaceAll("</?[a-zA-Z]+[^><]*>","");
//     content.replaceAll("\n","");
//     return content; 
// }
export default {
  name: "create",
  data() {                      
    return {
      defaultImgs: [
       'https://static.yancey.app/reduce-server-requests-in-wordpress.png',
       'https://static.yancey.app/como-usar-imagens-webp-no-wordpress.jpg',
       'https://static.yancey.app/44299297_s.jpg',
       'https://static.yancey.app/02542344136f8c6cefd9138785bf6f40.jpg'
      ], 
      value: "# 一级标题(这里写标题)",
      title: '',
      description: ''
    };
  },
  created() {
    this.id = this.$route.query.id;
    if (this.id)  {
      this.getBlogDtail(this.id);
    }
  },
  methods: {
    save() {},
    getBlogDtail(id) {
      this.$get("/api/blog/detail", {_id: id}).then(res => {
        console.log('res-blog', res.data.data);
        this.value = res.data.data.content;
        this.title = res.data.data.title;
      });
    },
    publish() {
      // let title = value.match(/^#*(^#|.*)\s/)[1];
      let title = this.title;
      let image = '';
      try {
        image = this.value.match(/!\[.*\]\((.*)\)/)[1];

      }catch (err) {
        image = this.defaultImgs[Math.ceil(Math.random()*3)];
      }
      const data = {
        title,
        content: this.value,
        image
      };
      // 更新数据
      if (this.id) {
        data.id = this.id;
        this.$post("/api/blog/updateOne", data).then(res => {
          this.$router.push({path: '/'});
        });
      } else {
        this.$post("/api/blog/create", data).then(res => {
          this.$router.push({path: '/'});
        });
      }
    }
  }
};
</script>

<style scoped lang="less">
.main-edit {
  margin: 0 auto;
  margin-top: 60px;
  .editorHeader {
    display: flex;  
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 40px;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    z-index: 100;
    .left-box {
      .title {
        margin: 0;
        padding: 0;
        font-size: 24px;
        font-weight: 700;
        color: #000;
        border: none;
        outline: none;
        width: 500px;
      }
    }
    .right-box {
      .publish {
        font-size: 14px;
        white-space: nowrap;
        color: #007fff;
        cursor: pointer;
      }
    }
  }
  .main-edit-blog {
    min-height: calc(100vh - 80px);
  }
}
</style>
