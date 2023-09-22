<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add">
        <div class="the_bid">你的报价是<input type="number" min="0" style="width: 5vw;height: 5vh;font-size: 4vh;" v-model="bid">万</div>>
        <div class="yes" @click="tenderData">
          <div class="yestext">确认</div>
        </div>
        <router-link to="./tasksquare">
          <div class="no">
            <div class="notext">取消</div>
          </div>
        </router-link>
      </div>     
    </div>
</template>
  
  <script>
    import { tender } from '../../api/Tender.js'
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';

    export default {
      name: 'bid',
      data() {
        return {
          event_id: 0,  
          bid: 0,
        };
      },
      components: {
        M_HeadBar,
      },
      mounted(){
        this.event_id = this.$route.query.event_id;
        console.log(this.event_id);
      },
      methods: {
        tenderData() {      
          tender(this.event_id,this.bid).then((res)=>{
            console.log(res);
            this.$router.push('/m_home/bidsuccess')
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
      top: 30%;
      width: 40vw;
      height: 40vh;
      opacity: 1;
      border-radius: 0.73vw;
      background-color: rgba(255, 255, 255, 1);
      border: 0.1vw solid black;
      z-index: 10;
    }
    .the_bid{
      position: absolute;
      left: 22%;
      top: 35%;
      width: 30vw;
      height: 7vh;
      font-size: 3vw;
      color: black;
      font-family: '黑体';
    }
    .yes{
    position: absolute;
    left: 27.70%;
    top: 65%;
    width: 7.29vw;
    height: 4.26vh;
    opacity: 1;
    border-radius: 1.20vw;
    background: rgba(67, 207, 124, 1);
  }
  .no{
    position: absolute;
    left: 57.30%;
    top: 65%;
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