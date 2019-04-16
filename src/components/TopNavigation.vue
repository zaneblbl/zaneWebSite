<template lang="html">
  <div>
    <el-menu
      :default-active="this.$router.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >

      <!-- <el-menu-item disabled="true"><div class="NavLogo"></div></el-menu-item> -->

      <!-- <el-menu-item index="1">处理中心</el-menu-item>

      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu> -->

      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{item.navItem}}
      </el-menu-item>

    </el-menu>
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
        {name:'/Home',navItem:'主页'},
        {name:'/WorkSpace',navItem:'工作台'},
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({
        path:key
      });
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
