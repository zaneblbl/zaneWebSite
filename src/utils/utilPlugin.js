import utils from './utils.js'

const utilPlugin={};
//插件必须有install方法
utilPlugin.install=function(Vue,options){
  Vue.prototype.$utils=utils;
}

export default utilPlugin;
