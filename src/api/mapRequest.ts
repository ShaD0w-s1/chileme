 import axios from 'axios'

 import request from '@/src/utils/request/'
 
const key = 'cafd91be9043d5b37b974fbb7f1ceba9'

// //通用高德GET请求
// export const get = (url, params = {}) => {
//   return new Promise((resolve, reject) => {
//     instance.get(url, { params }).then((response) => {
//       resolve(response.data)
//     }, err => {
//       reject(err)
//     })
//   })
// }

// 逆地理编码

// export async function getRegeo(location:any) {
//   try {
//     const res = await request({})
    
//   } catch (error) {
    
//   }
// }



//逆地理编码
// export const getRegeo = (location:any) => {
//   return new Promise((resolve, reject) => {
//     instance.get('/v3/geocode/regeo?parameters', {
//       params:{
//         key,
//         location
//       }
//     })
//     .then((response) => {
//       if (response?.data?.infocode === "10000") {
//         resolve(response?.data?.regeocode?.formatted_address)
//       } else {
//         reject ()
//       }
      
//     })
//   })
// }

//IP定位
// export const getIP = (params = {}) => {
//   return new Promise((resolve, reject) => {
//     instance.get('/v5/ip?parameters', { params }).then((response) => {
//       resolve(response.data)
//     }, err => {
//       reject(err)
//     })
//   })
// }

// //输入提示
// export const getTips = (params = {}) => {
//   return new Promise((resolve, reject) => {
//     instance.get('/v3/assistant/inputtips?parameters', { params }).then((response) => {
//       resolve(response.data)
//     }, err => {
//       reject(err)
//     })
//   })
// }