<template>
    <div class="CenterBox">
      <C_HeadBar></C_HeadBar>
    </div>
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
  .CenterBox {
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/img/Web.jpg);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
