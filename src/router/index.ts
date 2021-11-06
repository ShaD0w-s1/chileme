import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '../views/layout/Layout.vue'

const routes: Array<RouteRecordRaw> = [
     {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register.vue'),
    beforeEnter(to:any, from:any, next:any) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
    beforeEnter(to:any, from:any, next:any) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  }, {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[{
      path: '/home',
      name: 'Home',
      component:() => import('@/views/home/Home.vue')
    }, {
      path: '/cartList',
      name: 'CartList',
      component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList.vue')
    }, {
      path: '/orderList',
      name: 'OrderList',
      component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList.vue')
    }, {
      path: '/person',
      name: 'PersonalInfo',
      component: () => import(/* webpackChunkName: "person" */ '../views/personalInfo/PersonalInfo.vue'),
    }]
  },{
    path: '/orderConfirmation/:id/:addressId?',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation.vue')
  },{
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue')
  }, {
    path: '/chooseAddressList/:shopId',
    name: 'ChooseAddressList',
    component: () => import(/* webpackChunkName: "chooseAddressList" */ '../views/chooseAddressList/ChooseAddressList.vue'),
  },{
    path: '/myAddressList',
    name: 'MyAddressList',
    component: () => import(/* webpackChunkName: "myAddressList" */ '../views/myAddressList/MyAddressList.vue'),
  }, {
    path: '/upsertAddress/:id?',
    name: 'UpsertAddress',
    component: () => import(/* webpackChunkName: "upsertAddress" */ '../views/upsertAddress/UpsertAddress.vue'),
  }, {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test/test.vue')
  }, {
    path: '/shopSerach',
    name: 'ShopSerach',
    component: () => import(/* webpackChunkName: "ShopSerach" */ '../views/shopSerach/shopSerach.vue'),
    children: [{
      path: '',
      name: 'SerachHome',
      component: () => import(/* webpackChunkName: "HomeList" */ '@/views/shopSerach/components/serachHome.vue')
    },{
      path: 'serachindex',
      name: 'SerachIndex',
      component: () => import(/* webpackChunkName: "HomeList" */ '@/views/shopSerach/components/serachIndex.vue')
    },{
      path: 'serachlist',
      name: 'HomeList',
      component: () => import(/* webpackChunkName: "HomeList" */ '@/views/shopSerach/components/serachList.vue')
    }]
  }, {
    path:'/building',
    name: 'Building',
    component: () => import(/* webpackChunkName: "HomeList" */ '@/views/building/building.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/error/404.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login'});
})

export default router
