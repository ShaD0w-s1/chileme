<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/cartList">购物车</van-tabbar-item>
    <van-tabbar-item icon="orders-o" to="/orderList">订单</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/person">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
// 导入 Vant
import Tabbar from 'vant/es/tabbar'
import 'vant/es/tabbar/style'

import TabbarItem from 'vant/es/tabbar-item'
import 'vant/es/tabbar-item/style'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  components:{
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem 
  },
  setup() {
    const active:any = ref(0)
    return { active }
  },
})
</script>

<style></style>


