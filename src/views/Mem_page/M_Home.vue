<template>
  <div class="container">
    <M_HeadBar></M_HeadBar>     
  </div>
  <router-view></router-view>
</template>

<script>
  import M_HeadBar from '../../components/M_common/M_HeadBar.vue';

  export default {
    data() {
      return {};
    },
    components: {
      M_HeadBar,
    },
  };
</script>

<style scoped>
  .container {
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
