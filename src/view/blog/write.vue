<template>
  <div>
    <div class="main-edit" id="main-edit">
      <mavon-editor 
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
      value: "# 一级标题(这里写标题)"
    };
  },
  created() {
    this.id = this.$route.query.id;
    if (this.id)  {
      this.getBlogDtail(this.id);
    }
  },
  methods: {
    getBlogDtail(id) {
      this.$get("/api/blog/detail", {_id: id}).then(res => {
        console.log('res-blog', res.data.data);
        this.value = res.data.data.content;
      });
    },
    save(value) {
      let title = value.match(/^#*(^#|.*)\s/)[1];
      let image = '';
      try {
        image = value.match(/!\[.*\]\((.*)\)/)[1];

      }catch (err) {
        image = this.defaultImgs[Math.ceil(Math.random()*3)];
      }
      const data = {
        title,
        content: value,
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
  // max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
