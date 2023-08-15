<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add"></div>
      <div class="whitelarge">
        <img src="../../assets/img/blue.png" class="blue_">
        <div class="textblue_">科研成果</div>
        <div class="whs" id="whs1"></div>
        <div class="whs" id="whs2"></div>
        <div class="whs" id="whs3"></div>
        <div class="whs" id="whs4"></div>
        <div class="whs" id="whs5"></div>
        <div class="whs" id="whs6"></div>
        <img src="../../assets/img/add.png" class="round">
      </div>
    </div>
</template>
  
  <script>
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';
  
    export default {
      data() {
        return {};
      },
      components: {
        M_HeadBar,
      },
    };
  </script>
  
  <style scoped>
    .CenterBox {
      width: 100%;
      height: 100%;
      background: rgba(148, 148, 148, 0.8);
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
      top: 8.83%;
    }
    #whs2{
      position: absolute;
      top: 21.29%;
    }
    #whs3{
      position: absolute;
      top: 33.74%;
    }
    #whs4{
      position: absolute;
      top: 46.20%;
    }
    #whs5{
      position: absolute;
      top: 58.66%;
    }
    #whs6{
      position: absolute;
      top: 71.11%;
    }
    .round{
      position: absolute;
      left: 46.50%;
      top: 84%;
      width: 5.625vw;
      height: 10vh;
      background-color: rgba(245, 245, 245, 0.8);
      border-radius: 50%;
    }
    .over{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    .add{
      position: absolute;
      left: 30%;
      top: 10%;
      width: 40vw;
      height: 80vh;
      opacity: 1;
      border-radius: 0.73vw;
      background-color: rgba(255, 255, 255, 1);
      border: 0.1vw solid black;
      z-index: 10;
    }

  </style>