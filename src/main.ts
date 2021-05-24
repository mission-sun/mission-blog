import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'amfe-flexible'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import router from "@src/routes";
import '@src/common/index.less';
import App from './App';
import { get, post } from './service/service'
// import store from './store/index'
 
Vue.use(ElementUI);
Vue.use(mavonEditor);

Vue.config.productionTip = false

Vue.prototype.$get = get;
Vue.prototype.$post = post;


new Vue({
  // store,
  router,
  render: function(createElement) {
    return createElement(App)
  },
  // render: h => h(App),
  mounted() {
    console.log('新型预渲染');
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app')