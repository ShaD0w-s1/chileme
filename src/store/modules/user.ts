import { post } from '@/utils/request'


export default {
  namespaced: true,

  state: {

  },

  mutations: {
    SET_TOKEN(state:any, token:string){
      console.log("成功获取token")
      state.token = token
      
    }
  },
  
  actions: {
    async loginByUsername({ commit }:any, data:any) {
      try {
        const result:any = await post('/api/user/login', { // 登录验证
          params:{ username: data.username, password: data.password }
        })
        if (result.errno === 0 ) {
          commit('SET_TOKEN', result.data)
        }
      } catch (err) {
        console.log(err)
      }
      }
  }
 
}