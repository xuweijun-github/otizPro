let proxyObj={}
proxyObj['/']={
  //websocket
  ws:false,
  //目标地址
  target:'http:localhost:8080',
  changeOrigin:true,
  pathReWrite:{
    //不重写请求地址
    '^/':'/'
  }
}


module.exports={
  devServer:{
    host:localhost,
    port:8081,
    proxy:proxyObj
  }
}
