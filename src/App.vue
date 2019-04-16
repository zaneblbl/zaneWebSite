<template>
  <div id="app">
    <TopNavigation></TopNavigation>
    <!-- <router-link :to="{ name: 'Home', params: {} }"></router-link> -->
    <router-view/>
  </div>
</template>

<script>
import TopNavigation from '@/components/TopNavigation.vue'

export default {
  name: 'App',
  created(){
  },
  components:{
    TopNavigation
  }
}
</script>

<style>
/* reset */
* {
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {margin:0; padding:0;}
html{-webkit-text-size-adjust:none;}
body{ font:12px/2em Microsoft Yahei,tahoma,HELVETICA; text-align:center;}
ol,ul{list-style:none;}
h1,h2,h3,h4,h5,h6{font-size:100%;}
img{border:none; vertical-align:top}
i,em{font-style:normal;}
input,select,option,textarea{font-size:12px;}

/* function */
noscript,.spanclass,.pannel,.hidden{display:none;}
.show,.block{display:block;}
.mark,.fl,.mark-sub,.fr{display:inline;}
.mark,.fl{float:left;} .mark-sub,.fr{float:right;}
.fs-14{font-size:14px;} .fs-16{font-size:16px;}
.clear{clear:both; height:0; line-height:0; font-size:0; overflow:hidden;}
.clearfix{*zoom:1} .clearfix:after{content:"\20"; clear:both; height:0; display:block; overflow:hidden;}

</style>
