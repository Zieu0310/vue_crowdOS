<template>
  <div class="container">
    <A_HeadBar></A_HeadBar>
  </div>
  <router-view></router-view>
</template>

<script>
  import A_HeadBar from '../../components/A_common/A_HeadBar.vue';
  
  export default {
    data() {
      return {};
    },
    components: {
      A_HeadBar,
    },
  };
</script>

<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
    background-color: rgba(245, 245, 245, 0.8);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
  }
</style>
