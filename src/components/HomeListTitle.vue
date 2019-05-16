<template lang="html">
  <div class="main">
    <div class='title'>{{titleThings.title}}</div>
    <div class='more'>查看更多</div>
  </div>
</template>
<script>
  export default {
    name: 'homeListTitle',
    props: ['titleThings'],
    data() {
      return {

      }
    }
  }

</script>
<style lang="less" scoped>
  //按钮样式
  @import url('../assets/Common/commonLess/commonButtonLess.less');

  @titleLogoWidth: 2rem;
  @titleLogoHeight: 2rem;

  div.main {
    margin: 1rem;
    // border:.0625rem solid;
    .title {
      @media screen and (min-width:768px) {       
        float: left;
      }

      @media screen and (max-width:767px) {
        margin: 0 auto;
        div.more{
            border:1px solid;
            display: none;
        }
      }

      font-size: 1.5rem;
      font-family: '幼圆';
      font-weight: 500;
      top: 0.1rem;
    }

    .title::before {
      content: ' ';
      width: @titleLogoWidth;
      height: @titleLogoHeight;
      background: url('../assets/logo/logo.png') no-repeat center;
      display: inline-block;
      background-size: cover;
      vertical-align: middle;
      margin-right: 0.45rem;
    }
  }

  div.main::after {
    content: '';
    display: block;
    clear: both;
  }

</style>
