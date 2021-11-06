import { getLocationGPS } from '@/api/GPS_position'
// import  getLocationIP from '@/utils/IP_position'
// import { getRegeo } from '@/api/mapRequest'


export default {
  namespaced: true,

  state: {
    address:'',
    warp:null
  },

  mutations: {
    SET_ADDRESS: (state:any, address:any) => {
      state.address = address
    },
    SET_WARP: (state:any, warp:any) => {
      state.warp = warp
    }
  },

  actions: {
    // setPosition({ commit, state }:{ commit: any, state: any }){
    //   //调用封装函数访问高德API
    //   getRegeo(state.warp)
    //   .then((res) => {
    //     commit('SET_ADDRESS', res)
    //   })
    //   .catch(()=>{})
    // },
    setWarp({ commit }: {commit: any}){
      getLocationGPS()!.then((res)=>{
        commit('SET_WARP',res)
      }).catch(()=>{

      })
    }
  }
}