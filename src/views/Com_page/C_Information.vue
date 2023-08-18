<template>
    <div class="CenterBox">
        <div class="whitelarge">
          <img src="../../assets/img/blue.png" class="blue_">
          <div class="textblue_">个人信息</div>
          <div class="item" id="i1">账号:</div>
          <input type="number" class="in" id="in1">
          <div class="item" id="i2">ID:</div>
          <input type="number" value="000000000" readonly="readonly" class="in" id="in2">
          <div class="item" id="i3">公司名:</div>
          <input type="text" class="in" id="in3">
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
    background: rgba(245,245,245,0.8);
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
  .blue_{
    position: absolute;
    left: 4.87%;
    top: 4.69%;
    width: 0.21vw;
    height: 1.76vh;
  }
  .textblue_{
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
  .item{
    position: absolute;
    left: 8%;
    width: 8vw;
    height: 2vh;
    opacity: 1;
    font-size: 1.5vw;
    font-weight: 450;
    line-height: 1.96vh;
    color: black;
    text-align: left;
    vertical-align: top;
  }
  #i1{
    position: absolute;
    top: 13%;
  }
  #i2{
    position: absolute;
    top: 28%;
  }
  #i3{
    position: absolute;
    top: 43%;
  }
  .in{
    position: absolute;
    left: 16%;
    width: 40vw;
    height: 3vh;
  }
  #in1{
    position: absolute;
    top: 12%;
  }
  #in2{
    position: absolute;
    top: 27%;
  }
  #in3{
    position: absolute;
    top: 42%;
  }
</style>