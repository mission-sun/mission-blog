<template>
  <div>
    <!-- <h1>{{ msg }}</h1>

    <textarea v-model="content" name="content" id="content" cols="30" rows="10"></textarea>
    <button @click="createBlog">
      创建博客
    </button> -->
      <p>
       <el-input v-model="title" placeholder="请输入标题"></el-input>
      </p>
     <mavonEditor
      v-model="content"
      ref="md"
      @imgAdd="$imgAdd"
      @change="changeMavon"
    />
    <div>
      <el-button @click="createBlog"> 保存</el-button>
    </div>
  </div>
</template>

<script>
 import { mavonEditor } from 'mavon-editor'
 import 'mavon-editor/dist/css/index.css'
export default {
  name: "create",
  components: {
    mavonEditor
  },
  data() {                      
    return {
      msg: "create",
      title: '',
      content:" "
    };
  },
  methods: {
    changeMavon(){

    },
    $imgAdd(){

    },
    createBlog() {
      const data = {
        title: this.title,
        content: this.content
      }
      console.log('data', data)
      this.$post("/api/blog/create", data).then(res => {
        console.log('res-create', res.data);
        this.$message.warning('保存成功');
        this.$router.push('/home/list');
        // this.blogList = res.data.data;
      });
    }
  }
};
</script>

<style scoped lang="less"></style>
