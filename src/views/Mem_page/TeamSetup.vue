<template>
  <div class="CenterBox">
    <div class="over"></div>
    <div class="add">
      <div class="item" id="i0">领队</div>
      <input type="text" placeholder="请输入领队ID" class="im" id="im1">
      <div class="item" id="i1">团队名称</div>
      <input type="text" placeholder="请输入团队名称" class="im" id="im2">
      <div class="item" id="i2">成员</div>
      <input type="text" placeholder="请输入成员姓名" class="imt" id="imt1">
      <input type="number" placeholder="请输入成员ID" class="imm" id="imm1">
      <input type="text" placeholder="请输入成员姓名" class="imt" id="imt2">
      <input type="number" placeholder="请输入成员ID" class="imm" id="imm2">
      <input type="text" placeholder="请输入成员姓名" class="imt" id="imt3">
      <input type="number" placeholder="请输入成员ID" class="imm" id="imm3">
      <input type="text" placeholder="请输入成员姓名" class="imt" id="imt4">
      <input type="number" placeholder="请输入成员ID" class="imm" id="imm4">
      <input type="text" placeholder="请输入成员姓名" class="imt" id="imt5">
      <input type="number" placeholder="请输入成员ID" class="imm" id="imm5">
      <input type="text" placeholder="请输入成员姓名" class="imt" id="imt6">
      <input type="number" placeholder="请输入成员ID" class="imm" id="imm6">
      <div class="yes">
        <div class="yestext">创建</div>
      </div>
      <div class="no">
        <router-link to="./team"><div class="notext">取消</div></router-link>
      </div>
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
  .im{
    position: absolute;
    right: 5%;
  }
  #im1{
    position: absolute;
    top: 9.78%;
    width: 31vw;
  }
  #im2{
    position: absolute;
    top: 16.69%;
    width: 29vw;
  }
  .imm{
    position: absolute;
    right: 5%;
    width: 15vw;
  }
  .imt{
    position: absolute;
    left: 10%;
    width: 15vw;
  }
  #imm1{
    position: absolute;
    top: 27%;
  }
  #imm2{
    position: absolute;
    top: 31%;
  }
  #imm3{
    position: absolute;
    top: 35%;
  }
  #imm4{
    position: absolute;
    top: 39%;
  }
  #imm5{
    position: absolute;
    top: 43%;
  }
  #imm6{
    position: absolute;
    top: 47%;
  }
  #imt1{
    position: absolute;
    top: 27%;
  }
  #imt2{
    position: absolute;
    top: 31%;
  }
  #imt3{
    position: absolute;
    top: 35%;
  }
  #imt4{
    position: absolute;
    top: 39%;
  }
  #imt5{
    position: absolute;
    top: 43%;
  }
  #imt6{
    position: absolute;
    top: 47%;
  }
  .item{
    position: absolute;
    position: absolute;
    left: 9.73%;
    width: 4.17vw;
    height: 2.69vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 2.68vh;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
  }
  #i0{
    position: absolute;
    top: 9.78%;
  }
  #i1{
  position: absolute;
  top: 16.69%;
  }
  #i2{
    position: absolute;
    top: 23.6%;
  }
  #i3{
    position: absolute;
    top: 30.51%;
  }
  .yes{
  position: absolute;
  left: 27.70%;
  top: 79.77%;
  width: 7.29vw;
  height: 4.26vh;
  opacity: 1;
  border-radius: 1.20vw;
  background: rgba(67, 207, 124, 1);
}
.no{
  position: absolute;
  left: 57.30%;
  top: 79.77%;
  width: 7.29vw;
  height: 4.26vh;
  opacity: 1;
  border-radius: 1.20vw;
  background: rgba(255, 87, 51, 1);
}
.yestext{
  position: absolute;
  left: 35.71%;
  top: 21.74%;
  width: 2.08vw;
  height: 2.5vh;
  opacity: 1;
  font-size: 1.04vw;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 2.44vh;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  vertical-align: top;
}
.notext{
  position: absolute;
  left: 28.57%;
  top: 21.74%;
  width: 3.125vw;
  height: 2.5vh;
  opacity: 1;
  font-size: 1.04vw;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 2.44vh;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  vertical-align: top;
}
</style>