<template>
  <div class="CenterBox">
        <div class="title">成员和成果</div>
        <div class="whitelarge">
            <div class="whs" id="whs1">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">XX教授</div>
            </div>
            <div class="whs" id="whs2">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">阿sir</div>
            </div>
            <div class="whs" id="whs3">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">刘老六</div>
            </div>
            <div class="whs" id="whs4">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">哥哥</div>
            </div>
            <div class="whs" id="whs5">
            <img src="../../assets/img/icon.png" class="icon">
              <div class="name">胖熊</div>
            </div>
            <div class="whs" id="whs6">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">沙雕</div>
            </div>
            <el-scrollbar class="achi">
              <div class="scrollbar-demo-item">软件开发</div>
              <div class="scrollbar-demo-item">疫苗研发</div>
              <div class="scrollbar-demo-item">芯片</div>
              <div class="scrollbar-demo-item">网络维护</div>
            </el-scrollbar>
        </div>
    </div>    
</template>


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
  .title{
    position: absolute;
    left: 10%;
    top: 12%;
    width: 20vw;
    height: 3vh;
    color: black;
    font-weight: 1000;
    font-size: 2vw;
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
    width: 80.36vw;
    height: 8.1vh;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 0.03vw solid rgba(166, 166, 166, 1);
  }
  #whs1{
    position: absolute;
    top: 0%;
  }
  #whs2{
    position: absolute;
    top: 9.99753%;
  }
  #whs3{
    position: absolute;
    top: 19.995%
  }
  #whs4{
    position: absolute;
    top: 29.9926%;
  }
  #whs5{
    position: absolute;
    top: 39.99%;
  }
  #whs6{
    position: absolute;
    top: 49.98765%;
  }
  .icon{
    position: absolute;
    left: 5.65%;
    top: 26.17%;
    width: 2.8vw;
    height: 4vh;
  }
  .name{
    position: absolute;
    left: 10%;
    top: 40%;
    width: 10vw;
    height: 2.3vh;
    opacity: 1;
    font-size: 1.3vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.48vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    margin: 1vh;
    text-align: center;
    border-radius: 4px;
    border: solid 1px darkgrey;
    background: rgba(255, 255, 255, 0.8);
    font-weight: 700;
    color: black;
  }
  .achi{
    position: absolute;
    top: 65%;
    width: 80vw;
    height: 23vh;
  }
  .message{
    position: absolute;
    left: 10%;
    top: 60%;
    width: 30vw;
    height: 1.2vh;
    opacity: 1;
    font-size: 0.975vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.5vh;
    color: rgba(110, 110, 110, 1);
    text-align: left;
    vertical-align: top;
  }
</style>