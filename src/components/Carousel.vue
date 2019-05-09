<template lang="html">
  <div >

    <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- 指示符 -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- 轮播图片 -->
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(item,index) in imgitem" :key="index" :class="{active:imgActiveitem==index}">
          <img :src="item.url" class="carouselimg">
        </div>
      </div>

      <!-- 左右切换按钮 -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

    </div>



  </div>
</template>

<script>
export default {
  name:'carousel',
  data(){
    return {
      imgitem:[
        // {url:require('@/assets/carouselImg/timg.jpg')},
        // {url:require('@/assets/carouselImg/timg1.jpg')},
        // {url:require('@/assets/carouselImg/timg.jpg')},
      ],
      imgActiveitem:0,
    }
  }
}
</script>

<style lang="css" scoped>
.carouselimg{
  width:100%;
  height:auto;
}
</style>
