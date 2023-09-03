<template>
  <div class="container">
    <div class="above">成果审核列表</div>
    <div class="whitesmall" id="ws1">
      <img src="../../assets/img/blue.png" class="blue">
      <div class="textBlue" id="tb1">待审核</div>
      <div class="whs" id="whs11">
        <div class="Intextblack">XXX教授的团队申请</div>
        <router-link to="./achievementjudgeone"><div class="Intextblue">审核</div></router-link>
      </div>
      <div class="whs" id="whs12">
        <div class="Intextblack">XXX教授的团队申请</div>
        <router-link to="./achievementjudgeone"><div class="Intextblue">审核</div></router-link>
      </div>
    </div>
    <div class="whitesmall" id="ws2">
      <img src="../../assets/img/blue.png" class="blue">
      <div class="textBlue" id="tb2">已审核</div>
      <div class="whs" id="whs21">
        <div class="Intextblack">1团队申请</div>
        <div id="textred">审核不通过</div>
      </div>
      <div class="whs" id="whs22">
        <div class="Intextblack">2团队申请</div>
        <div id="textgreen">审核通过</div>
      </div>
      <div class="whs" id="whs23">
        <div class="Intextblack">3团队申请</div>
        <div id="textgreen">审核通过</div>
      </div>
    </div>
  </div>
</template>
 
<script>

  import A_HeadBar from '../../components/A_common/A_HeadBar.vue'; 
  import { auachig } from '../../api/admin';
  export default {
    data() {
      return {};
    },
    components: {
      A_HeadBar,
    },
    methods: {
      
    },
    mounted(){
      auachig().then((res) => {
        console.log(res);
      })
    }
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
    .container {
      height: 100vh;
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
    .tb2{
      width: 3.125vw;
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
      display: none;
    }
    #whs12{
      position: absolute;
      top: 26.51%;
      display: none;
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
    .above{
    position: absolute;
    left: 9.01%;
    top: 13.06%;
    width: 20.9375vw;
    height: 2.96vh;
    opacity: 1;
    font-size: 1.25vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.93vh;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
  }
  .Intextblue{
    position: absolute;
    left: 89.17%;
    top: 35.71%;
    width: 2vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(0, 43, 255, 1);
    text-align: right;
    vertical-align: top;
  }
  #textred{
    position: absolute;
    left: 75.11%;
    top: 35.71%;
    width: 4.5vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(255, 87, 51, 1);
    text-align: right;
    vertical-align: top;
  }
  #textgreen{
    position: absolute;
    left: 77.45%;
    top: 35.71%;
    width: 3.5vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(67, 207, 124, 1);
    text-align: right;
    vertical-align: top;
  }
  .Intextblack{
    position: absolute;
    left: 15.67%;
    top: 35.71%;
    width: 10.35vw;
    height: 2.22vh;
    opacity: 1;
    font-size: 0.83vw;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 2.15vh;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
  }
</style>