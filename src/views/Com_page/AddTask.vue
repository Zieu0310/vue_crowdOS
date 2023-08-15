<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add">
        <div class="item" id="i1">任务名称</div>
        <div class="item" id="i2">类型</div>
        <div class="item" id="i3">任务描述</div>
        <textarea name="" id="" cols="30" rows="10" placeholder="请描述" class="grey_rec"></textarea>
        <div class="item" id="i4">报价</div>
        <div class="yes">
          <div class="yestext">上传</div>
        </div>
        <div class="no">
          <router-link to="./c_information"><div class="notext">取消</div></router-link>
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
    #i4{
      position: absolute;
      top: 58.86%;
    }
    .grey_rec{
      position: absolute;
      left: 9.73%;
      top: 35.66%;
      width: 34.0625vw;
      height: 15.93vh;
      opacity: 1;
      border-radius: 0.3125vw;
      background: rgba(245, 245, 245, 1);
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