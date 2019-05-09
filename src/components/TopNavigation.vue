<template lang="html">

<div class="">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#" @click="handleSelect('/Home')">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item " v-for="(item,index) in navList" :key="index" :class="{active:navActiveItem==index}">
          <a class="nav-link" @click="handleSelect(item.path,index)">{{item.navItem}}</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

</div>


</template>

<script>
export default {
  name: 'TopNavigation',
  created(){
  },
  data() {
    return {
      navList:[
        {path:'/Home',navItem:'主页'},
        {path:'/Features',navItem:'简介'},
        {path:'/About',navItem:'关于'}
      ],
      navActiveItem:0,
    };
  },
  computed:{
  },
  watch:{

  },
  methods: {
    handleSelect(keyPath,index) {
      this.$router.push({
        path:keyPath
      });
      this.navActiveItem=index;
    }
  }
}
</script>

<style lang="css" scoped>
div.NavLogo{
  position: relative;
  width:3.8rem;
  height:3.8rem;
  background-image: url('../assets/logo/logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
}
</style>
