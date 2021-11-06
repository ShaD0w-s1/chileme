import axios from "axios"; 

import type Iconfig from "./request1"

// 创建axios实例
function instance () {

  // 创建axios实例
  const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
    timeout:10000
  })

  // 请求拦截
  instance.interceptors.request.use((config) => { // 
    Promise.resolve(config)
  },(error) => { // 失败则返回reject
    Promise.reject(error)
  })

  // 响应拦截
  instance.interceptors.response.use((res) => {
    Promise.resolve(res)
  },(error) => { // 失败则返回reject
    Promise.reject(error)
  })

  return instance
}


export default function request(config: Iconfig){
    const _instance = instance()
  return new Promise((resolve, reject) => {
    _instance.request(config).then((res) => {
      resolve(res)
    }).catch((err) => {
      reject(err)
    })
  })
}