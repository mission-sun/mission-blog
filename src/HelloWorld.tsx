

import { Component, Prop, PropSync, Watch } from 'vue-property-decorator';
import * as tsx from 'vue-tsx-support';
import Base from './base';
interface CompProps {
	message: string;
	num: number;
	num2?: number;
}
interface item {
  check: boolean
}

@Component
export default class HelloWorld extends tsx.Component<{}>{
  // constructor() {
  //   super();
  //   console.log('this-super', this.baseValue);
  // }
  public parentName:string = '我是父类';
  @Prop() public meg!: CompProps;
 
  // arr:number[] = [1, 2, 3, 4, 5]
  // arr:number[] = [1, 2, 3, 4, 5]
  arr: item [] = [{check: true}, { check: false}]
  obj = {
    key: Math.random()
  }
  getThisHello() {
    console.log('this', this);
  }
  deleteItem(index:number) {
    // this.arr.unshift(9);
    this.arr.splice(index, 1);
  }
  render() {
    return <div  class="my-class" onClick={ this.getThisHello }>
      <Base>
      <div on-click={ this.deleteItem.bind(this)} >this is footer1212</div>
      { this.arr.map((item, index) => {
        // return <div key={ index }> { item } </div>
        return  <div key={index}>{JSON.stringify(item)}<el-checkbox  v-model={ item.check }>备选项</el-checkbox> </div> 
      })}
      </Base>
    </div>
  }
}
// export default class HelloWorld extends tsx.Component<{}> {
//   constructor() {
//     super();
//     console.log('this-super', this);
//   }
//   getThis() {
//     console.log('this', this);
//   }
//   render() {
//     return <div onClick={ this.getThis }>我是继承的</div>
//   }
// }
// export default class HelloWorld extends Base {
  // Declare mounted lifecycle hook
//   mounted() {
//     console.log('mounted')
//   }
//   // @Prop('meg', { type: String, default: 'abc' }) public syncedPropA!: string

//   @Prop() private meg!: CompProps;
//   // @PropSync('propA', { type: String, default: 'abc' }) public syncedPropA!: string
//   @PropSync('meg') public newMeg!: CompProps;

//   @Watch('newMeg', { immediate: true, deep: true })
//   public watchNewMeg(newValue: CompProps) {
//     console.log('我是监听器', newValue);
//   }
//   // 代替时间
//   get newData(): number {
//     return this.newMeg.num;
//   }
//   // 当更改newData的数值的时候触发
//   set newData(newMessage: number) {
//     this.newMeg.num = newMessage;
//     console.log('set', newMessage);
//   }
//  // Declare render function
//   render() {
//   return <div onClick= {() => { this.newData += 1 }}>Hello World!121212-{ this.meg.message }-newMessage - { this.newMeg.message}- getmessage-computed - { this.newData }</div>
//   }
// }
