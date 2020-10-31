<template>
  <div>
    <div class="main-edit" id="main-edit">
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
      id: ''
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
.main-edit {
  position: relative;
  z-index: -1;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
