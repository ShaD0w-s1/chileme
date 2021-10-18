const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 1. npm run build 打包代码
// 2. 把代码给后端
// 3. 后端把前端代码放入后端工程
// 4. 后端重启后端服务
// * 容易出问题的就是下面的配置
module.exports = {
  
  publicPath: '/jingdong',
  chainWebpack:(config)=>{
    config.resolve.alias.set('@',resolve('./src'))
  },
}