<template>
    <div class="CenterBox">
      <div class="whitesmall" id="ws1">
        <img src="../../assets/img/blue.png" class="blue">
        <div class="textBlue" id="tb1">待评价</div>
      </div>
      <div class="whitesmall" id="ws2">
        <img src="../../assets/img/blue.png" class="blue">
        <div class="textBlue" id="tb2">已评价</div>
      </div>
    </div>
</template>

<script>
  
  export default {
    data() {
      return {};
    },
    components: {
      
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
  .whitesmall{
    position: absolute;
    top: 18.98%;
    width: 42.8125vw;
    height: 81.02vh;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
  #ws1{
    position: absolute;
    left: 6.09375%;
  }
  #ws2{
    position: absolute;
    left: 51.61%;
  }
  .blue{
    position: absolute;
    left: 4.87%;
    top: 4.69%;
    width: 0.21vw;
    height: 1.76vh;
  }
  .textBlue{
    position: absolute;
    left: 6.45%;
    top: 4.23%;
    height: 2.50vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(0, 43, 255, 1);
    text-align: left;
    vertical-align: top;
  }
  #tb1{
    width: 5.21vw;
  }
  #tb2{
    width: 3.125vw;
  }
</style>
