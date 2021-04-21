import { Vue ,Component } from 'vue-property-decorator';
import HelloClass from './components/hello-class.vue';
import *  as tsx from 'vue-tsx-support';
@Component
export default class App extends tsx.Component<{}> {
	render(){
		return (
			<div>
				我是render <HelloClass />
			</div>
		)
	}
}