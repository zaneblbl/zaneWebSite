<template lang="html">
<div >
  <carousel></carousel>
</div>
</template>

<script>
import {Navigation} from '@/apis/api/homeApi.js'
import carousel from '@/components/Carousel.vue'

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
    carousel
  }
}
</script>

<style lang="css" scoped>

</style>
