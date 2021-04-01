import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      page: 1
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];
const offline = "/__bxoffline__/index.html";
const mobileFolder = "/mobile";

let basePath = location.pathname == offline ? offline : mobileFolder;
const router = new VueRouter({
  mode: 'history',
  base: basePath,
  routes
});

export default router
