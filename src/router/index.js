import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router=new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'/',
      component:()=>import('@/pages/Home.vue')
    },
    {
      path: '/Home',
      name: 'Home',
      component: ()=>import('@/pages/Home.vue')
    },
    {
      path:'/About',
      name:'About',
      component:()=>import('@/pages/About.vue')
    },
    {
      path:'*',
      name:'All',
      component:()=>{import('@/pages/Home.vue')}
    }

  ]
});

//导航守卫
// router.beforeEach((to,from,next)=>{
//   //登录验证
//   const isLogin=localStorage.getItem('token') ? true:false;
//   //登录界面不需要登录验证
//   if(to.path=='/Home'){
//     next();
//   }else{
//     //未登录则跳转到登录界面
//     isLogin ? next() :next('/Home');
//   }
// });

export default router;
