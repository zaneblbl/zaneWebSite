<template lang="html">
  <div ref="main" @click="mainclick($event)" class="main">
    <div class="wave wave5"></div>
    <div class="wave wave4"></div>
    <div class="wave wave3"></div>
    <div class="wave wave2"></div>
    <div class="wave wave1"></div>
    <div class="wave wave0"></div>

  </div>

</template>
<script>
  export default {
    name: 'wave',
    data() {
      return {

      }
    },
    created() {},
    mounted() {

    },
    methods: {
      mainclick(e) {
        var mx, my, timer;
        var z = 2;
        mx = e.pageX;
        my = e.pageY;
        z = z + 1;
        this.clickwave(mx, my, timer);
      },
      clickwave(i, j, k) {
        this.$refs.main.innerHTML += `    
            <div class="wave wave5"></div>
            <div class="wave wave4"></div>
            <div class="wave wave3"></div>
            <div class="wave wave2"></div>
            <div class="wave wave1"></div>
            <div class="wave wave0"></div>`
      }
    }

  }

</script>
<style lang="less" scoped>
  @wavewidth: 30px;
  @waveheight: 30px;
  @imageurl: "../../assets/EffectShow/Wave/Lighthouse.jpg";

  .wave {
    position: absolute;
    top: calc((100% - @wavewidth)/2);
    left: calc((100% - @wavewidth)/2);
    width: @wavewidth;
    height: @waveheight;
    border-radius: 100%;
    background-image: url(@imageurl);
    background-attachment: fixed;
    background-position: center;
    background-size: auto;
  }

  .wave:hover {
    box-shadow: 0 0 1px 1px rgba(0, 140, 186, 0.2);
    cursor: pointer;
  }

  .wave0 {
    z-index: 2;
    background-size: auto 106%;
    animation: w 1s forwards;
  }

  .wave1 {
    z-index: 3;
    background-size: auto 102%;
    animation: w 1s .2s forwards;
  }

  .wave2 {
    z-index: 4;
    background-size: auto 104%;
    animation: w 1s .4s forwards;
  }

  .wave3 {
    z-index: 5;
    background-size: auto 101%;
    animation: w 1.8s .5s forwards;
  }

  .wave4 {
    z-index: 6;
    background-size: auto 102%;
    animation: w 2s .8s forwards;
  }

  .wave5 {
    z-index: 7;
    background-size: auto 100%;
    animation: w 1s 1s forwards;
  }

  @keyframes w {
    0% {
      top: calc((100% - @wavewidth)/2);
      left: calc((100% - @waveheight)/2);
      width: @wavewidth;
      height: @waveheight;
    }

    100% {
      top: calc((100% - @wavewidth*15)/2);
      left: calc((100% - @waveheight*15)/2);
      width: @wavewidth*15;
      height: @waveheight*15;
    }
  }

</style>
