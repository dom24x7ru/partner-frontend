<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div id="root" class="root mn--max hd--expanded">
      <Header></Header>
      <router-view/>
      <SideBar></SideBar>
    </div>

  </div>
</template>

<script>
  import SideBar from '@/components/sidebar/SideBar.vue';
  import Header from '@/components/Header.vue';

  export default {
    name: 'Main',
    components: {
        SideBar,
        Header
    },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
