<template>
    <div class="CenterBox">
      <div class="whitesmall" id="ws1">
        <img src="../../assets/img/blue.png" class="blue">
        <div class="textBlue">我的项目</div>
        <div class="whs" id="whs11"></div>
        <div class="whs" id="whs12"></div>
      </div>
      <div class="whitesmall" id="ws2">
        <img src="../../assets/img/blue.png" class="blue">
        <div class="textBlue">合作团队</div>
        <div class="whs" id="whs21"></div>
        <div class="whs" id="whs22"></div>
        <div class="whs" id="whs23"></div>
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
    width: 5.21vw;
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
  .whs{
    position: absolute;
    left: 8.52%;
    width: 35.57vw;
    height: 8.24vh;
    opacity: 1;
    border-radius: 0.73vw;
    background: rgba(255, 255, 255, 1);
    border: 0.03vw solid rgba(166, 166, 166, 1);
  }
  #whs11{
    position: absolute;
    top: 14.06%;
  }
  #whs12{
    position: absolute;
    top: 26.51%;
  }
  #whs21{
    position: absolute;
    top: 14.06%;
  }
  #whs22{
    position: absolute;
    top: 26.51%;
  }
  #whs23{
    position: absolute;
    top: 38.97%;
  }
</style>
