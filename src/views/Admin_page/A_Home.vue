<template>
    <div class="CenterBox">
      <A_HeadBar></A_HeadBar>
    </div>
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
