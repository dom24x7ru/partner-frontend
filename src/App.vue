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
    name: 'MyMain',
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
.pagination{
    margin-left: 50px;
}

.article{
    font-weight: bold;
}

.flex-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
}

.justify-content-center {
    margin-bottom: 0;
}

.showmore {
    margin-left: 25px;
}

.content__top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
}
</style>
