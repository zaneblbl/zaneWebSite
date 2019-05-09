<template lang="html">
<div class="time">
</div>
</template>

<script>
export default {
  name:'indexedDB',
  created(){
    this.openIndexedDB();
  },
  data(){
    return {

    }
  },
  methods:{
    openIndexedDB(){
      //打开indexedDB数据库
      const request=window.indexedDB.open('DBname','1.0');
      //监听数据库打开失败的事件
      request.onerror=(e)=>{console.log('open error');};
      //监听数据库打开成功事件
      request.onsuccess=(e)=>{console.log('open success');};
      //监听数据库更新事件
      request.onupgradeneeded=(e)=>{
        this.DBObject=e.target.result;
        //穿件存储数据的“表”
        this.DBObject.createObjectStore('user',{keyPath:'ID'});
      }
      this.receiveIndexedDB(request);
    },
    receiveIndexedDB(request){
      request.onsuccess=(e)=>{
        const ws=new WebSocket('ws://192.168.1.120:8001');
        ws.onopen=(e)=>{
          console.log("连接服务器成功");
          ws.send("PCWindow");
        };
        //websocket接收后端传过来的数据
        ws.onmessage=(evt)=>{
          var t=document.getElementsByClassName('time');
          console.log(t[0]);
          setInterval(()=>{
            t[0].innerHTML=new Date();
            ws.send(t[0].innerHTML);
          },1000);

          // this.addToIndexedDB(evt.data);
        }
        ws.onerror=()=>{console.log("发生异常");};
        //断开触发事件，可以重连或做错误提示
        ws.onclose=()=>{console.log("关闭连接");};
      }
    },
    addToIndexedDB(data){
      const request=this.DBObject.transaction(['user'],'readwrite');
      request.objectStore('user').addToIndexedDB(data);
      request.onsuccess=(e)=>{console.log('add success');}
      request.onerror=(e)=>{console.log('add error');}
    }
  }
}
</script>

<style lang="css" scoped>
</style>
