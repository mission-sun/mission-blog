

import { Component, Prop, PropSync, Watch } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
interface CompProps {
	message: string;
	num: number;
	num2?: number;
}

@Component
export default class HelloWorld extends tsx.Component<{}> {
  public baseValue: string = '我是basevalue';
  private baseKey: string = '我是basekey';
  // Declare mounted lifecycle hook
  // mounted() {
  //   console.log('mounted')
  // }
  // @Prop() private meg!: CompProps;
  // // @PropSync('propA', { type: String, default: 'abc' }) public syncedPropA!: string
  // @PropSync('meg') public newMeg!: CompProps;

  // @Watch('newMeg', { immediate: true, deep: true })
  // public watchNewMeg(newValue: CompProps) {
  //   console.log('我是监听器', newValue);
  // }
  // // 代替时间
  // get newData(): number {
  //   return this.newMeg.num;
  // }
  // // 当更改newData的数值的时候触发
  // set newData(newMessage: number) {
  //   this.newMeg.num = newMessage;
  //   console.log('set', newMessage);
  // }
 // Declare render function
 getThisBase() {
  console.log('this', this);
}
  render() {
    return <div> 
        <main>{this.$slots.default}</main>
    </div>
  }
  // render(h: any){
  //   return h('div',{
  //     'class': { box: true },
  //     style: { fontSize: '14px' }
  //   },[
  //      '我是字符串',        
  //       h('p',{ 'class': { p: true } },'我是p标签'),
  //       h('a',{ 'class': { a: true } },'我是a标签呀'),
  //       h('p',{ on: { click: ()=> {} } },'点我!!!')
  //   ])
  // }
}
