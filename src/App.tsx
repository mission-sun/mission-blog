import { Vue ,Component } from 'vue-property-decorator';
import HelloClass from './components/hello-class';

@Component({
	HelloClass
})
export default class App extends Vue {
	render(){
		return (
			<div>
				我是render <HelloClass />
			</div>
		)
		// return <HelloClass  />
	}
}
// import Vue from "vue";
// import HelloClass from './components/hello-class'

// import AwesomeButton from "third-party-library/awesome-button";
// @Component

// export default Vue.extend({
//   render() {
//     // ERROR: because TypeScript does not know that AwesomeButton has 'text' prop.
//     return <AwesomeButton text="Click Me!" />;
//   }
// });