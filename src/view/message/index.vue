<template>
  <div class="message-wrap">
    <div class="message-wrap-main">
      <div class="mes-text">
        留言板
      </div>
      <el-input
        type="textarea"
        placeholder="你的鼓励是我前进的动力"
        v-model="textarea"
        maxlength="30"
        show-word-limit
      >
      </el-input>
      <div class="message-name">
        <div class="name">
          昵称: 
          <input type="text" placeholder="我是宋江">
        </div>
        <div class="btn">
          提交
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "create",
  data() {                      
    return {
      textarea: '',
      defaultName: ['宋江', '卢俊义', '吴用', '公孙胜', '关胜', '林冲', '秦明', '呼延灼', '花荣', '柴进', '李应', '朱仝', '鲁智深', '武松', '董平', '张清', '杨志', '徐宁', '索超', '戴宗', '刘唐', '李逵', '史进', '穆弘', '雷横', '李俊', '阮小二', '张衡', '阮小五', '张顺', '阮小七', '杨雄', '石秀', '解珍', '解宝', '燕青', '朱武', '黄信', '孙立', '宣赞', '郝思文', '韩涛', '彭玘', '单廷圭', '魏定国', '萧让', '裴宣', '欧鹏', '邓飞', '燕顺', '杨林', '凌震', '蒋敬', '吕方', '郭盛', '安道全', '皇甫瑞', '王英', '一丈青', '鲍旭', '樊瑞', '孔明', '孔亮', '项充', '李衮', '金大坚', '马麟', '童威', '童猛', '孟康', '侯健', '陈达', '杨春', '郑天寿', '陶宗旺', '宋清', '乐和', '龚旺', '丁得孙', '穆春', '曹正', '宋万', '杜迁', '薛永', '施恩', '周通', '李忠', '杜兴', '汤隆', '邹润', '邹渊', '朱富', '朱贵', '蔡福', '蔡庆', '李立', '李云', '焦挺', '石勇', '孙新', '顾大嫂', '张青', '孙二娘', '王定六', '郁保四', '白胜', '时迁', '段景住'],
    };
  },
  created() {
    console.log('defaultName', this.defaultName.length)
    // this.id = this.$route.query.id;
    // this.getBlogDtail(this.id);
  },
  methods: {
    getBlogDtail(id) {
      this.$get("/api/blog/detail", {_id: id}).then(res => {
        console.log('res-blog', res.data.data);
        this.value = res.data.data.content;
      });
    },
    save(value) {
      let title = value.match(/^#(.*)\s/)[1];
      let image = value.match(/!\[.*\]\((.*)\)/)[1];
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
.message-wrap {
  .message-wrap-main {
    width: 800px;
    margin: 0 auto;
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
