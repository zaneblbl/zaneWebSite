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
          <div class="picbox"><img :src="item.url"></div>
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
        {url:require('@/assets/carouselImg/timg.jpg')},
        {url:require('@/assets/carouselImg/timg.jpg')},
        {url:require('@/assets/carouselImg/timg.jpg')},
      ],
      imgActiveitem:0,
    }
  }
}
</script>

<style lang="less" scoped>

@carouselHeight:350px;
@carouselPicHeight:350px;

.picbox{
  width:100%;
  height:@carouselHeight;
  background-color: white;
  overflow: hidden;
  position:relative;
}
.carouselimg{
  width:100%;
  height:@carouselPicHeight;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}

</style>
