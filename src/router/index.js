import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Test from 'components/Test';
import Head from 'components/home/head.vue';
import Login from 'main/login.vue';
import Home from 'main/home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/head',
      name: 'Head',
      component: Head
    }
  ]
})
