import axios from 'axios'
import apiConfig from './api.config.js'
import qs from 'qs'

let Axios=axios.create({
  baseURL:apiConfig.baseUrl,
  transformRequest:[
    function(data){
      return qs.stringify({
        ...data
      })
    }
  ]
});

//请求拦截器
Axios.interceptors.request.use(function(config){
  //给头添加token
  if(localStorage.getItem('token')){
    config.headers.authorization=localStorage.getItem('token');
  }

  return config;
},function(error){
  //请求错误
  console.log(error);
  return Promise.reject(error);
});

//响应拦截器
Axios.interceptors.response.use(function(response){
  console.log(response);
  if(response.status=='200'){
    // console.log('success');
  }else{
    //不同状态码错误处理
    console.log('error');
  }
  return response.data;
},function(error){
  console.log(error);
  return Promise.reject(error);
});

export default function(method,url,data=null){
  method=method.toLowerCase();
  if(method=='post'){
    return Axios.post(url,data);
  }else if(method=='get'){
    return Axios.get(url,{params:data});
  }else{
    console.log('未知method:${method}');
    return false;
  }
}
