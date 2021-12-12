import {getRequest} from './api.js'

export const initMenu=(router,store)=>{
    if(store.state.routes.length>0){
      return;
    }
}

getRequest('这里是获取菜单Json数据的API接口地址').then(data=>{
  if(data){
    //格式化routes数据
    let fmtRoutes=formatRoutes(data);
    //添加到路由
    router.addRoutes(fmtRoutes);
    //将数据存入vuex
    store.commit('initRoutes',fmtRoutes)
};
})


export const formatRoutes=(routes)=>{
   let fmtRoutes=[];
   routes.forEach(router=>{
     let{
       path,
       component,
       name,
       iconCls,
       children
     }  = router;
     if(children && children instanceof Array){
       //递归
       children = formatRoutes(children);
       }
       let fmtRouter = {
         path:path,
         name:name,
         iconCls:iconCls,
         children:children,
         component(resolve){
           require(['../views/'+component+'.vue'],resolve);

         }
       }
       fmtRoutes.push(fmtRouter);
    });
    return fmtRoutes;
}
