<template lang="html">
<div class="">
  dddd
</div>
</template>

<script>
import {Navigation} from '@/apis/api/homeApi.js'

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
    // TopNavigation
  }
}
</script>

<style lang="css" scoped>

</style>
