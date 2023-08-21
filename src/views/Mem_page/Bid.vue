<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add">
        <div class="the_bid">你的报价(万)为</div>
        <input type="number" class="in_bid" v-model="bid">
        <router-link to="./bidsuccess">
          <div class="yes" @click="tenderData">
            <div class="yestext">确认</div>
          </div>
        </router-link>
        <router-link to="./taskdescription">
          <div class="no">
            <div class="notext">取消</div>
          </div>
        </router-link>
      </div>     
    </div>
</template>
  
  <script>
    import { bid } from '../../api/Bid.js'
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';

    export default {
      name: 'bid',
      data() {
        return {
          event_id: '',  
          bid: '',
        };
      },
      components: {
        M_HeadBar,
      },
      methods: {
        tenderData() {      
          bid(this.event_id,this.bid).then((res)=>{
            console.log(res.data.bid);
          });
        }   
      }
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
    .the_bid{
      position: absolute;
      left: 35%;
      top: 40%;
      width: 20vw;
      height: 7vh;
      font-size: 1.5vw;
      color: black;
      font-family: '黑体';
    }
    .in_bid{
      position: absolute;
      left: 25%;
      top: 50%;
      width: 20vw;
      height: 5vh;
      font-size: 4vh;
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