import Cookies from 'js-cookie'

export function getCookie(name:string){
  return Cookies.get(name)
}

export function setCookie(name:string, cookie:object){
  return Cookies.set(name, cookie, { expires: 7 })
}

export function deleteCookie(name:string){
  return Cookies.remove(name)
}