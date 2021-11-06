// 定义InterFace
export default interface Iconfig {
  url:string,
  method: "get" | "post",
  params?: object
}