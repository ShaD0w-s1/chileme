
export function getLocationGPS(){
  if (navigator.geolocation) {
   const resultPromise = new Promise ((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((res)=>{
      const warp = `${res.coords.longitude},${res.coords.latitude}`
      resolve(warp)
    },(err)=>{
      reject(err)
    },
    { enableHighAccuracy: true })
   })
   return resultPromise
  } else {
    alert("您的浏览器不支持ip定位")
  }
}