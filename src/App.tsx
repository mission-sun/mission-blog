import { Vue ,Component } from 'vue-property-decorator';
import *  as tsx from 'vue-tsx-support';
import HeaderNav from '@src/components/header-nav.vue';
import HelloClass from './HelloWorld';
import style from './App.module.less';

interface CompProps {
	message: string;
	num: number;
	num2?: number;
}
@Component({
	components: {
		HelloClass
	}
})
export default class App extends tsx.Component<{}> {
	helloString:string = '我是hello';
	commonData: CompProps = {
		message: 'message',
		num: 1
	}

	changeMessage() {
		console.log('changeMessag', this);
		this.commonData.num = this.commonData.num + 1;
	}
  
	render(){
		return (
			<div id="app" class={[style.appWrap, style.bigName] }>
				<el-button onClick={this.changeMessage}>changeValue</el-button>
				<hello-class onClick={this.changeMessage} class="hello-class" meg = {this.commonData} />
				{/* <header class={style.header}>
					<HeaderNav />
				</header>  */}
				{/* <router-view></router-view> */}
		</div>
		)
	}
}

