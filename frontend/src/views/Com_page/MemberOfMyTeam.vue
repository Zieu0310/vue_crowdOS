<template>
    <div class="CenterBox">
        <div class="whitelarge">
          <div class="whs" id="whs1"></div>
          <div class="whs" id="whs2"></div>
          <div class="whs" id="whs3"></div>
          <div class="whs" id="whs4"></div>
          <div class="whs" id="whs5"></div>
          <div class="whs" id="whs6"></div>
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
  .whitelarge{
    position: absolute;
    left: 9.01%;
    top: 18.98%;
    width: 80.36vw;
    height: 81.02vh;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
  .whs{
    position: absolute;
    left: 3.82%;
    width: 74.27vw;
    height: 8.24vh;
    opacity: 1;
    border-radius: 0.73vw;
    background: rgba(255, 255, 255, 1);
    border: 0.03vw solid rgba(166, 166, 166, 1);
  }
  #whs1{
    position: absolute;
    top: 5.83%;
  }
  #whs2{
    position: absolute;
    top: 18.29%;
  }
  #whs3{
    position: absolute;
    top: 30.74%;
  }
  #whs4{
    position: absolute;
    top: 43.20%;
  }
  #whs5{
    position: absolute;
    top: 55.66%;
  }
  #whs6{
    position: absolute;
    top: 68.11%;
  }
</style>