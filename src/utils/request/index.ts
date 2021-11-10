// import axios from "axios"; 

// import store from "@/store";

// import type Iconfig from "./request1"
// import router from "@/router";

// // 创建axios实例
// function instance () {

//   let isreFreshing = false
//   const retryRequests = [] 

//   // 创建axios实例
//   const instance = axios.create({
//     baseURL: 'https://www.fastmock.site/mock/2953d4a3dc818e999196430eef33ab1a/chileme',
//     timeout:10000
//   })

//   // 请求拦截
//   instance.interceptors.request.use((request) => { 
//     console.log('请求发送')
//     console.log(request)
//     if (isreFreshing === true) {
      
//     }
//     return request
//   },(error) => { // 
//     console.log('请求错误')
//     return error
//   })

//   // 响应拦截
//   instance.interceptors.response.use((response) => {
//     console.log('响应收到')
//     console.log(response)
//     if(response.status === 401) {
//       if (!isreFreshing) {
//         isreFreshing = true
//         store.dispatch("ReFreshing_Token").then(()=>{
//           instance() // 重新发送请求
//         }).catch(()=>{
//           retryRequests.length = 0
//           router.push('/login')
          
//         }).finally(()=>{
//           isreFreshing = false
//         })
//       } else {
//         return new Promise((reslove)=>{
//           request
//         })
//       }
//     }
//     return response
//   },(error) => { // 失败则返回reject
//     console.log('请求错误')
//     return error
//   })

//   return instance
// }


// export default function request(config: Iconfig){
//     const _instance = instance()
//   return new Promise((resolve, reject) => {
//     _instance.request(config).then((res) => {
//       resolve(res)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }




import axios from 'axios'

// 从localStorage中获取token
function getLocalToken () {
    const token = window.localStorage.getItem('token')
    return token
}

// 给实例添加一个setToken方法，用于登录后将最新token动态添加到header，同时将token保存在localStorage中


function refreshToken () {
    // instance是当前request.js中已创建的axios实例
    return instance.post('/refreshtoken').then(res => res.data)
}

// 创建一个axios实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
    'X-Token': getLocalToken() // headers塞token
  }
})

const setToken = (token: any) => {
  instance.defaults.headers['X-Token'] = token
  window.localStorage.setItem('token', token)
}

// 是否正在刷新的标记
let isRefreshing = false
// 重试队列，每一项将是一个待执行的函数形式
let requests: any = []

instance.interceptors.response.use(response => {
  const { code } = response.data
  if (code === 1234) {
    const config = response.config
    if (!isRefreshing) {
      isRefreshing = true
      return refreshToken().then(res => {
        const { token } = res.data
        setToken(token)
        config.headers['X-Token'] = token
        config.baseURL = ''
        // 已经刷新了token，将所有队列中的请求进行重试
        requests.forEach(function(cb:any){
          return cb(token)
        })
        requests = []
        return instance(config)
      }).catch(res => {
        console.error('refreshtoken error =>', res)
        window.location.href = '/'
      }).finally(() => {
        isRefreshing = false
      })
    } else {
      // 正在刷新token，将返回一个未执行resolve的promise
      return new Promise((resolve) => {
        // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
        requests.push((token: any) => {
          config.baseURL = ''
          config.headers['X-Token'] = token
          resolve(instance(config))
        })
      })
    }
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default instance



Promise.resolve(
  new Promise((resolve,reject) => {
      console.log('inner Promise');
      resolve('123');
  }).then(data=>{
      console.log(1,typeof(data), data);
      return data+'4';
  })
).then(data=>{
  return Promise.resolve('Randy'+data);
}).then(data=>{
  console.log(2,typeof(data), data)
});