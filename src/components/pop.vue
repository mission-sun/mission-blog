<template>
<div class="wrap">
  <div class="three" @click="three">
    <div class="two" @click="two">
       <div class="one" @click="one">
         我是最内部
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  // 这句话中的关键词是“几乎”。例如，focus 事件不会冒泡。同样，我们以后还会遇到其他例子。但这仍然是例外，而不是规则，大多数事件的确都是冒泡的。
  // e.target 事件源（不变）  e.currentTarget 现在的执行的事件
  mounted() {
    document.addEventListener('click', this.handleDocumentClick);
  },
  methods: {
    one(e) {
      console.log('one内部',this.$el.contains(e.target));
      // e.stopPropagation();
      // return;
    },
    two(e) {
      console.log('外部');
      // console.log('two', e.currentTarget);
    },
    three(e) {
      console.log('three', e);
    },
    handleDocumentClick(e) {

      console.log('是否包含事件源', this.elementContains(this.$el, e.target))
      // if (!this.$el || !this.referenceElm ||
      //   this.elementContains(this.$el, e.target) ||
      //   this.elementContains(this.referenceElm, e.target) ||
      //   !this.popper || this.elementContains(this.popper, e.target)
      // ) {
      //   return;
      // }
      // if (this.forceShow) {
      //   return;
      // }
      // this.showPopper = false;
    },
    elementContains(elm, otherElm) {
      if (typeof elm.contains === 'function') {
        return elm.contains(otherElm);
      }
      return false;
    }
  }
}
</script>

<style>
.one {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
.two {
  width: 200px;
  height: 200px;
  border: 1px solid yellow;
}
</style>