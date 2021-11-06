// 定义InterFace
export default interface Iconfig {
  url: string,
  method?: "get" | "post",
  params?: {}
}
// // 定义config类
// class config implements Iconfig {
//   constructor({url}){
//     this.url = url
//     this.method
//   }
//   url:string
//   method: "get" | "post"
//   params?: object
// }
