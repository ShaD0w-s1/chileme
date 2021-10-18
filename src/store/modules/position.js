import  { getLocationGPS }  from '@/utils/GPS_position'
// import  getLocationIP from '@/utils/IP_position'
import { getRegeo } from '@/utils/mapRequest'


export default {
  namespaced: true,

  state: {
    address:'',
    warp:null
  },

  mutations: {
    SET_ADDRESS: (state, address) => {
      state.address = address
    },
    SET_WARP: (state, warp) => {
      state.warp = warp
    }
  },

  actions: {
    setPosition({ commit, state }){
      //调用封装函数访问高德API
      getRegeo(state.warp)
      .then((res) => {
        commit('SET_ADDRESS', res)
      })
      .catch()
    },
    setWarp({ commit }){
      getLocationGPS().then((res)=>{
        console.log(res)
        commit('SET_WARP',res)
      }).catch()
    }
  }
}