<template>
  <div class="message-wrap">
    <!-- bdfxg
    <img class="img-class" width="300" height="200" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2985039138,1099917209&fm=11&gp=0.jpg" alt="">
     <span class="font">我是文案</span>
    <span class="font" style="overflow:hidden">我是文案002</span> -->

  <el-upload
    class="avatar-uploader"
    action=""
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>



    <!-- <el-button @click="change"> 更改 </el-button> -->
   <!-- <ul> -->
     <!-- <li v-for="(item, index) in list" :key="index">
      <div>
        {{ item }}
      </div>
     </li> -->
     <!-- <MComs v-model="name"  @input="input"/> -->
     <!-- {{
       name
     }} -->
     <!-- 一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件 -->
     <!-- v-model等同于v-bind:value="。。"加上v-on:input= -->
     <!-- .sync  修饰符跟v-model 类型，实现双向绑定 -->
   <!-- </ul> -->
  </div>
</template>
<script>
import MComs from './model';
export default {
  components: {
    MComs
  },
  name: "create",
  data() {                      
    return {
      imageUrl: '',
      name: '我是modle',
      message: '',
      list: ['one', 'two', 'three', '2323', '23231', '23232']
    };
  },
  created() {
  },
  methods: {
    handleAvatarSuccess() {
      console.log('成功的回调')
    },
    beforeAvatarUpload() {
      console.log('渲染前')
    },
    async longTime() {
      console.log('1212----long-begin');

      await new Promise(reslove => {
        setTimeout(function(){
          console.log('1212');
          reslove()
        }, 2000)
      })
      console.log('1212----long-after');
    },
    // getItem(item) {
    //   console.log('item', item);
    // },
    // 仅仅是一个触发事件
    input(value) {
      this.name = '给我改回去';
      console.log('父类接收到的值', value);
    },
    change() {
      // this.list.unshift('once');
      // this.list.push('once');
      // this.list = this.list.reverse();
      // this.list.splice(1, 1);
    }
  }
};
</script>

<style scoped lang="less">
.message-wrap {
  width: 500px;
  margin: 0 auto;
  border: 1px solid red;
  // 图片本身和div底部存在间隙，这是我由于基线导致，可以改变父类的font-size 和 line-height 来改变
  // 当 vertical-align 是相对于line-height 值变化
  .img-class {
    // line-height: 30px;
    // vertical-align: 50%;
    // vertical-align: middle;
  }
  .font {
  }
  // span {
  //   display: inline-block;
  // }
}
</style>
