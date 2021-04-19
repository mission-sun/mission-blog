
<script>
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // Declare render function
  render() {
    return <div>Hello World!121212</div>
  }
}
</script>