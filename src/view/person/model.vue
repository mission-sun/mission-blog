<template>
  <div>
    测试
    <li @click="change">
      {{ value }}
    </li>
  </div>
</template>

<script>
export default {
  // model: {
  //   prop: 'checked',
  //   event: 'input'
  // },
  // 如果直接更改用value的话，name就无需定义model
  props: {
    value: String
  },
  methods: {
    // 更改值
    change() {
      console.log('我是变化的');
      // 更新接受到的值
      this.$emit('input', '我是变化的');
    }
  }
}
</script>

<style>

</style>