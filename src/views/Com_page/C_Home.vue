<template>
  <div class="container">
    <C_HeadBar></C_HeadBar>
  </div>      
  <router-view></router-view>
</template>

<script>
  import C_HeadBar from '../../components/C_common/C_HeadBar.vue';

  export default {
    data() {
      return {};
    },
    components: {
      C_HeadBar,
    },
  };
</script>

<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
    background-image: url(../../assets/img/Web.png);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
  }
</style>
