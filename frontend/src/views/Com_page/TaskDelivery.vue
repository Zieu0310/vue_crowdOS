<template>
  <div class="CenterBox">
    <div class="whitelarge">
      <img src="../../assets/img/blue.png" class="blue_">
      <div class="textblue_">新建任务</div>
      <input type="submit" value="发布任务" id="deliver">
      <div class="grs" id="grs1">
        <div class="item">任务名</div>
        <input type="text" placeholder="请输入" class="in" id="in1">
      </div>
      <div class="grs" id="grs2">
        <div class="item">任务描述</div>
        <input type="text" placeholder="请输入" class="in" id="in2">
      </div>
      <div class="grs" id="grs3">
        <div class="item">报价</div>
        <input type="text" placeholder="请输入" class="in" id="in3">
      </div>
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
    background: rgba(255,255,255,0.8);
  }
  #deliver{
    position: absolute;
    left: 45%;
    top: 80%;
    width: 8.75rem;
    height: 2.875rem;
    border-radius: 1.4375rem;
    background-color: rgba(0, 43, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 1.15rem;
    border: 0;
    transition: 0.2s;
    cursor: pointer;
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
  .grs{
    position: absolute;
    left: 3.82%;
    width: 74.27vw;
    height: 8.24vh;
    opacity: 1;
    border-radius: 0.73vw;
    background: rgba(255, 255, 255, 0.8);
  }
  #grs1{
    position: absolute;
    top: 8.83%;
  }
  #grs2{
    position: absolute;
    top: 21.29%;
  }
  #grs3{
    position: absolute;
    top: 33.74%;
  }
  #grs4{
    position: absolute;
    top: 46.20%;
  }
  #grs5{
    position: absolute;
    top: 58.66%;
  }
  #grs6{
    position: absolute;
    top: 71.11%;
  }
  .item{
    position: absolute;
    left: 2%;
    top: 18%;
    width: 20vw;
    height: 4vh;
    color: black;
    font-size: 2vw;
  }
  .in{
    position: absolute;
    top: 28%;
    width: 63vw;
    font-size: 1.5vw;
    background-color: rgba(255,255,255,0.8);
    border-color: rgba(255,255,255,0.8);
  }
  #in1{
    position: absolute;
    left: 12%;
  }
  #in2{
    position: absolute;
    left: 15%;
  }
  #in3{
    position: absolute;
    left: 10%;
  }
</style>

