<template>
    <div class="CenterBox">
        <div class="whitelarge">
          <div class="top">
            <router-link to="./myteam"><img src="../../assets/img/return.png" class="return"></router-link>
          <div class="title">XX教授团队</div>
          <router-link to="allmember"><div class="member">成员</div></router-link>
          </div>
          <div class="bo">
            <img src="../../assets/img/icon.png" class="icon1" id="ic11">
            <div class="namel" id="n11">XX教授</div>
            <div class="messagel" id="ms11">可以接任务</div>
            <div class="datel" id="d11">2023/07/15 10:00</div>
            <img src="../../assets/img/icon.png" class="icon1" id="ic12">
            <div class="namel" id="n12">阿sir</div>
            <div class="messagel" id="ms12">技术要求符合</div>
            <div class="datel" id="d12">2023/07/15 10:01</div>
            <img src="../../assets/img/icon.png" class="icon2" id="ic2">
            <div class="namer" id="n2">PN公司</div>
            <div class="messager" id="ms2">OK</div>
            <div class="dater" id="d2">2023/07/15 10:02</div>
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
    background: rgba(255, 255, 255, 0.8);
  }
  .top{
    position: absolute;
    left: 0%;
    top: 0%;
    width: 80.36vw;
    height: 6vh;
    opacity: 1;
    background: black
  }
  .bo{
    position: absolute;
    left: 0%;
    top: 7.4056%;
    width: 80.36vw;
    height: 75.02vh;
    opacity: 1;
    background: rgba(255, 255, 255, 0.8);
  }
  .return{
    position: absolute;
    left: 4%;
    top: 30%;
    width: 0.55vw;
    height: 2.44vh;
  }
  .title{
    position: absolute;
    left: 45%;
    top: 30%;
    width: 20vw;
    height: 2.44vh;
    color: white;
  }
  .member{
    position: absolute;
    left: 95%;
    top: 30%;
    width: 20vw;
    height: 2.44vh;
    font-size: 1vw;
    color: white;
  }
  .icon1{
    position: absolute;
    left: 5.65%;
    width: 2.8vw;
    height: 4vh;
  }
  #ic11{
    position: absolute;
    top: 5%;
  }
  #ic12{
    position: absolute;
    top: 15%;
  }
  .icon2{
    position: absolute;
    right: 5.65%;
    width: 2.8vw;
    height: 4vh;
  }
  #ic2{
    position: absolute;
    top: 25%;
  }
  .namel{
    position: absolute;
    left: 10%;
    width: 10vw;
    height: 2.3vh;
    opacity: 1;
    font-size: 1vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.48vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
  #n11{
    position: absolute;
    top: 5%;
  }
  #n12{
    position: absolute;
    top: 15%;
  }
  .namer{
    position: absolute;
    right: 3%;
    width: 10vw;
    height: 2.3vh;
    opacity: 1;
    font-size: 1vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.48vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
  #n2{
    position: absolute;
    top: 25%;
  }
  .messagel{
    position: absolute;
    left: 10%;
    width: 20vw;
    height: 1.2vh;
    opacity: 1;
    font-size: 1.2vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.5vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
  #ms11{
    position: absolute;
    top: 7.5%;
  }
  #ms12{
    position: absolute;
    top: 17.5%;
  }
  .messager{
    position: absolute;
    right: 3%;
    width: 8.3vw;
    height: 1.2vh;
    opacity: 1;
    font-size: 1.2vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.5vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
  #ms2{
    position: absolute;
    top: 27.5%;
  }
  .datel{
    position: absolute;
    left: 10%;
    width: 12vw;
    height: 0.9vh;
    opacity: 1;
    font-size: 0.6vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0.88vh;
    color: rgba(158, 158, 158, 1);
    text-align: left;
    vertical-align: top;
  }
  #d11{
    position: absolute;
    top: 10.5%;
  }
  #d12{
    position: absolute;
    top: 20.5%;
  }
  .dater{
    position: absolute;
    right: 5.3%;
    width: 12vw;
    height: 0.9vh;
    opacity: 1;
    font-size: 0.6vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 0.88vh;
    color: rgba(158, 158, 158, 1);
    text-align: left;
    vertical-align: top;
  }
  #d2{
    position: absolute;
    top: 30.5%;
  }
</style>
