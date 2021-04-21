import Vue from "vue";
import VueRouter from "vue-router";

import FirstScreen from '../view/first-screen';
import WriteBlog from '../view/blog/write';
import BlogDetail from '../view/blog/detail';
import Message from '../view/message';
import Person from '../view/person';

// import Home from "../components/home"
const routes = [
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

export default router;
