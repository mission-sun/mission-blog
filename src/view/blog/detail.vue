<template>
  <div>
    <div class="main-edit" id="main-edit">
      <div class="editorHeader">
        <div class="left-box">
          <input class="title" v-model="title" type="text" placeholder="请输入文章标题">
        </div>
         <div class="right-box">
           <span @click="save" class="publish">更新文章1</span>
        </div>
      </div>
      <mavon-editor 
      @save="save"
      defaultOpen="preview"
      :subfield="false"
      :boxShadow="false"
      :transition="false"
      :toolbarsFlag="false"
      previewBackground="#fff"
      v-model="value"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "create",
  data() {                      
    return {
      value: '',
      id: '',
      title: ''
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.getBlogDtail(this.id);
  },
  methods: {
    getBlogDtail(id) {
      this.$get("/api/blog/detail", {_id: id}).then(res => {
        console.log('res-blog', res.data.data);
        this.value = res.data.data.content;
        this.title = res.data.data.title;
      });
    },
    save() {
      // let title = value.match(/^#(.*)\s/)[1];
      let title = this.title;
      let image = this.value.match(/!\[.*\]\((.*)\)/)[1];
      const data = {
        title,
        content: value,
        image
      };
      this.$post("/api/blog/create", data).then(res => {
      });
    }
  }
};
</script>

<style scoped lang="less">
.main-edit {
  position: relative;
  max-width: 800px;
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
}
</style>
