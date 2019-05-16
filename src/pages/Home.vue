<template lang="html">
<div class="content">
  <!-- <carousel></carousel> -->
  <!-- <wave></wave> -->
  <homeRecommendList></homeRecommendList>
  
</div>
</template>

<script>
import {Navigation} from '@/apis/api/homeApi.js'
import carousel from '@/components/Carousel.vue'
import wave from '@/components/EffectShow/Wave.vue'
import homeRecommendList from '@/components/HomeRecommendList.vue'

export default {
  name:'Home',
  created(){
    async function navigation(){
      try {
        const data=await Navigation({LoginName:'zz',Password:'123'});
        localStorage.setItem('token',data.Body.SessionToken);
        console.log(localStorage.getItem('token'));

      } catch (e) {
        console.log(e);
      } finally {

      }
    };

    // navigation();

    var a=this.$utils.test();
    a();
  },
  data(){
    return {

    }
  },
  components:{
    carousel,
    wave,
    homeRecommendList
  }
}
</script>

<style lang="less" scoped>
@import url('../assets/Common/commonLess/common.less');
@contentWidth:100%;

@contentMaxWidth:62.5rem;
div.content{
  width:@contentWidth;
  max-width:@contentMaxWidth;
  margin:0 auto;
  display: block;
}

</style>
