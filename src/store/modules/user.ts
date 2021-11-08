import request from '@/utils/request/index'

import { setCookie } from "@/utils/cookie"

export default {
  namespaced: true,

  state: {

  },

  mutations: {
    SET_TOKEN(state:any, token:object){
      console.log("成功获取token")
      state.token = token
      setCookie("token", token)
    }
  },
  
  actions: {
    async loginByUsername({ commit }:any, data:any) {
      try {
        const result:any = await request({
          url: '/api/user/login',
          method:'post',// 登录验证
          params:{ username: data.username, password: data.password }
        })
        if (result.data.errno === 0 ) {
          console.log(result.data)
          commit('SET_TOKEN', result.data)
        }
      } catch (err) {
        console.log(err)
      }
      }
  }
 
}