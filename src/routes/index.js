import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/home";
// import Login from "../components/login";
// import List from "../components/list";
// import store from '../store/index'


import FirstScreen from '../view/first-screen';
import WriteBlog from '../view/blog/write';
import BlogDetail from '../view/blog/detail';
import Message from '../view/message';
import Person from '../view/person';

// const  FirstScreen  = () => import(/* webpackChunkName: 'FirstScreen' */ '../view/first-screen');
// const  WriteBlog  = () => import(/* webpackChunkName: 'WriteBlog' */ '../view/blog/write');
// const  BlogDetail  = () => import(/* webpackChunkName: 'BlogDetail' */ '../view/blog/detail');
// const  Message  = () => import(/* webpackChunkName: 'Message' */ '../view/message');
// const  Person  = () => import(/* webpackChunkName: 'Person' */ '../view/person');


// import Home from "../components/home"
const routes = [
  // {
  //   path: "*",
  //   redirect: "/login"
  // },
  {
    path: "/",
    component: FirstScreen,
    meta: {
      isNeedLogin: true
    }
  },
  {
    path: "/blog",
    component: WriteBlog,
    meta: {
      isNeedLogin: true
    }
  },
  {
    path: "/detail",
    component: BlogDetail,
    meta: {
      isNeedLogin: true
    }
  },
  {
    path: "/message",
    component: Message,
    meta: {
      isNeedLogin: true
    }
  },
  {
    path: "/person",
    component: Person,
    meta: {
      isNeedLogin: true
    }
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});
// router.beforeEach((to, from, next) => {
//   let isLogin = store.state.isLogin
//   if (to.meta.isNeedLogin) {
//     if (isLogin) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router;
