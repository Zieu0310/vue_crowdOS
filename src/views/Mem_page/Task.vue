<template>
    <div class="CenterBox">
      <div class="whitelarge">
        <div class="whs" id="whs1">
          <div class="InBlack">研发</div>
          <router-link to="./tasktaken"><div class="InBlue">查看详情</div></router-link>
        </div>
        <div class="whs" id="whs2">
          <div class="InBlack">研发</div>
          <router-link to="./tasktaken"><div class="InBlue">查看详情</div></router-link>
        </div>
        <div class="whs" id="whs3">
          <div class="InBlack">研发</div>
          <router-link to="./tasktaken"><div class="InBlue">查看详情</div></router-link>
        </div>
        <div class="whs" id="whs4">
          <div class="InBlack">研发</div>
          <router-link to="./tasktaken"><div class="InBlue">查看详情</div></router-link>
        </div>
        <div class="whs" id="whs5">
          <div class="InBlack">研发</div>
          <router-link to="./tasktaken"><div class="InBlue">查看详情</div></router-link>
        </div>
        <div class="whs" id="whs6">
          <div class="InBlack">研发</div>
          <router-link to="./tasktaken"><div class="InBlue">查看详情</div></router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import { successfullyevents_get } from '../../api/research';
  export default {
    data() {
      return {};
    },
    components: {
      
    },
    methods: {
      
    },
    mounted(){
      successfullyevents_get().then((res) => {
        console.log(res);
      })
    }
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
  .gr{
    position: absolute;
    left: 3%;
    top: 2%;
    width: 4vw;
    height: 1vh;
    font-size: 0.8vw;
    color: rgba(51, 51, 51, 1);
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
  .InBlack{
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
  .InBlue{
    position: absolute;
    left: 85%;
    top: 35.71%;
    width: 6vw;
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
</style>