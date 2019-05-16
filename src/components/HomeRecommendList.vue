<template lang="html">
  <div class="container-fluid">

    <homeListTitle :titleThings='titleThings'></homeListTitle>

    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6" v-for="(item,index) in list" :key="index">
        <img :src="item.imgpath" class="listimg">
      </div>
    </div>

  </div>

</template>

<script>
  import homeListTitle from './HomeListTitle.vue'

  export default {
    name: 'homeRecommendList',
    data() {
      return {
        titleThings: {
          title: '主要内容',
          titleLogoPath: ''
        },
        list: [{
            name: '1',
            imgpath: require('@/assets/RecommendList/1.jpg'),
            urlpath: ''
          }, {
            name: '2',
            imgpath: require('@/assets/RecommendList/11.jpg'),
            urlpath: ''
          },
          {
            name: '3',
            imgpath: require('@/assets/RecommendList/12.jpg'),
            urlpath: ''
          }, {
            name: '4',
            imgpath: require('@/assets/RecommendList/55.jpg'),
            urlpath: ''
          },
        ]
      }
    },
    created() {

    },
    components: {
      homeListTitle
    }

  }

</script>

<style lang="less" scoped>
  .row {
    padding: .875rem;
    width: 100%;
    margin: 0.4rem auto;

    //less嵌套 选择row所有子元素
    >div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .rowbox {
      width: 100%;
      height: auto;

    }

    .listimg {
      width: 100%;
      height: auto;
      padding: 0.8rem 0.8rem;
      margin: 1rem 1rem;
      border: .0625rem solid rgba(0, 140, 186, 0.1);
      box-shadow: 0 0 0.4rem 0.375rem rgba(0, 140, 186, 0.3);
      background-size: cover;
    }
  }

</style>
