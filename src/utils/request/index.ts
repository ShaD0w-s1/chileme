import axios from "axios"; 

import type Iconfig from "./request1"

// 创建axios实例
function instance () {

  // 创建axios实例
  const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/2953d4a3dc818e999196430eef33ab1a/chileme',
    timeout:10000
  })

  // 请求拦截
  instance.interceptors.request.use((config) => { 
    console.log('请求发送')
    return config
  },(error) => { // 失败则返回reject
    console.log('请求错误')
    return error
  })

  // 响应拦截
  instance.interceptors.response.use((res) => {
    console.log('响应收到')
    return res
  },(error) => { // 失败则返回reject
    console.log('请求错误')
    return error
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