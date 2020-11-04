<template>
  <div class="message-wrap">
    <div class="message-wrap-main">
      <div class="mes-text">
        留言板
      </div>
      <div class="message-list">
        <div v-for="(item, index) in list" :key="index" class="list-item">
          <div class="icon">icon</div>
          <div class="item-box">
            <p class="name">{{item.name}}</p>
            <p class="message">{{item.message}}</p>
            <p class="time">{{item.time}}</p>
          </div>
        </div>
        <div class="list-item">
          <div class="icon">icon</div>
          <div class="item-box">
            <p class="name">用户名称</p>
            <p class="message">你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文你的文章非常好，很有文采</p>
            <p class="time">2个小时时间</p>
          </div>
        </div>
      </div>
      <el-input
        type="textarea"
        placeholder="你的鼓励是我前进的动力"
        v-model="message"
        maxlength="30"
        show-word-limit
      >
      </el-input>
      <div class="message-name-box">
        <span>阁下是：</span>
        <input v-model="name" placeholder="我是代码孙" class="user-name" type="text">
        <el-button @click="saveMessage" size="small">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "create",
  data() {                      
    return {
      name: '',
      message: '',
      list: [],
      defaultName: ['宋江', '卢俊义', '吴用', '公孙胜', '关胜', '林冲', '秦明', '呼延灼', '花荣', '柴进', '李应', '朱仝', '鲁智深', '武松', '董平', '张清', '杨志', '徐宁', '索超', '戴宗', '刘唐', '李逵', '史进', '穆弘', '雷横', '李俊', '阮小二', '张衡', '阮小五', '张顺', '阮小七', '杨雄', '石秀', '解珍', '解宝', '燕青', '朱武', '黄信', '孙立', '宣赞', '郝思文', '韩涛', '彭玘', '单廷圭', '魏定国', '萧让', '裴宣', '欧鹏', '邓飞', '燕顺', '杨林', '凌震', '蒋敬', '吕方', '郭盛', '安道全', '皇甫瑞', '王英', '一丈青', '鲍旭', '樊瑞', '孔明', '孔亮', '项充', '李衮', '金大坚', '马麟', '童威', '童猛', '孟康', '侯健', '陈达', '杨春', '郑天寿', '陶宗旺', '宋清', '乐和', '龚旺', '丁得孙', '穆春', '曹正', '宋万', '杜迁', '薛永', '施恩', '周通', '李忠', '杜兴', '汤隆', '邹润', '邹渊', '朱富', '朱贵', '蔡福', '蔡庆', '李立', '李云', '焦挺', '石勇', '孙新', '顾大嫂', '张青', '孙二娘', '王定六', '郁保四', '白胜', '时迁', '段景住'],
    };
  },
  created() {
    console.log('defaultName', this.defaultName.length)
    // this.id = this.$route.query.id;
    this.getMessage();
  },
  methods: {
    getMessage() {
      
    },
    saveMessage() {
      let name = this.name ? this.name: this.defaultName[Math.ceil(Math.random()*100)];
      let item = {
        name,
        message: this.message,
        time: new Date().getTime()
      };
      this.$post("/api/message/create", item).then(res => {
        console.log('保持成功');
        this.getMessage();
        // this.$message.suc()
      });
    },
    getMessage() {
      this.$get("/api/message/getmessage").then(res => {
        console.log('res-message', res.data.data);
        this.list = res.data.data;
        // this.value = res.data.data.content;
      });
    }
  }
};
</script>

<style scoped lang="less">
.message-wrap {
  overflow: hidden;
  .message-wrap-main {
    width: 800px;
    background: #fff;
    margin: 0 auto;
    margin-top: 60px;
    .message-list {
      font-size: 14px;
      .list-item {
        margin-top: 20px;
        display: flex;
      }
      .icon {
        width: 40px;
        height: 40px;
        border: 1px solid #aaa;
        border-radius: 40px;
        overflow: hidden;
        margin-right: 10px;
        margin-left: 10px;
      }
      .item-box {
        flex: 1;
        padding: 0 10px 10px;
        border-bottom: 1px solid #f1f1f1;
        .name {
          color: #8a9aa9;
        }
        .message {
          margin: 10px 0;
          line-height: 20px;
        }
        .time {
          color: #8a9aa9;
        }
      }
      // justify-content: ;

    }
  }
  .message-name-box {
    display: flex;
    align-items: center;
    font-size: 16px;
    .user-name {
      margin: 10px 20px;
      padding: 5px 0;
      font-size: 16px;
      border: none;
      outline: none;
      width: 200px;
    }
  }
  .mes-text {
    height: 100px;
    line-height: 100px;
    text-align:center;
  }
  .message-name {
    margin-top: 30px;
    display: flex;
    .btn {
      cursor: pointer;
    }
  }
}
.main-edit {
  position: relative;
  z-index: -1;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
