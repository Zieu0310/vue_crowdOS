<template>
    <div class="CenterBox">
      <div class="whitelarge">
        <img src="../../assets/img/blue.png" class="blue_">
        <div class="textblue_">我的团队</div>
        <router-link to="./teaminformation">
          <div class="whs" id="whs1">
            <img src="../../assets/img/group.png" class="group">
            <div class="textblack">XX教授团队</div>
          </div>
        </router-link> 
        <router-link to="teamsetup"><img src="../../assets/img/add.png" alt="添加成果" class="round"></router-link>
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
      width: 100vw;
      height: 100vh;
      background-image: url(../../assets/img/Web.png);
      background-size: 100% 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      zoom: 1;
      z-index: -10;
      display: flex;
      flex-direction: column;
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
    .group{
    position: absolute;
    left: 2.52%;
    top: 30.95%;
    width: 1.67vw;
    height: 2.96vh;
    }
    .textblack{
    position: absolute;
    left: 6.45%;
    top: 34.52%;
    width: 8vw;
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
  </style>