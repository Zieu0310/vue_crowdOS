<template>
    <div class="CenterBox">
      <div class="whitelarge">
        <img src="../../assets/img/blue.png" class="blue">
        <div class="textBlue" id="tb1">已发布</div>
        <div class="whs" id="whs1">
          <div class="InBlack">{{ events[0].event_name }}</div>
          <div class="InBlue" @click="EventDetailsAppear0">查看详情</div>
        </div>
        <div class="whs" id="whs2">
          <div class="InBlack">{{ events[1].event_name }}</div>
          <div class="InBlue" @click="EventDetailsAppear1">查看详情</div>
        </div>
        <div class="whs" id="whs3">
          <div class="InBlack">{{ events[2].event_name }}</div>
          <div class="InBlue" @click="EventDetailsAppear2">查看详情</div>
        </div>
        <div class="whs" id="whs4">
          <div class="InBlack">{{ events[3].event_name }}</div>
          <div class="InBlue" @click="EventDetailsAppear3">查看详情</div>
        </div>
        <div class="whs" id="whs5">
          <div class="InBlack">{{ events[4].event_name }}</div>
          <div class="InBlue" @click="EventDetailsAppear4">查看详情</div>
        </div>
        <router-link to="addtask"><img src="../../assets/img/add.png" alt="添加任务" class="round" @click="newEvent"></router-link>
      </div>
    </div>
</template>

<script>
  import { events_get } from '../../api/company';
  export default {
    data() {
      return {
        events: [
          {event_name: "",event_id: "",type: "",description: "",reversePrice: "",budget: "",state: ""},
          {event_name: "",event_id: "",type: "",description: "",reversePrice: "",budget: "",state: ""},
          {event_name: "",event_id: "",type: "",description: "",reversePrice: "",budget: "",state: ""},
          {event_name: "",event_id: "",type: "",description: "",reversePrice: "",budget: "",state: ""},
          {event_name: "",event_id: "",type: "",description: "",reversePrice: "",budget: "",state: ""}
        ],
      };
    },
    components: {
      
    },
    methods:{
      EventDetailsAppear0(){
        this.$router.push({
          path: '/c_home/deliveredtask',
          query:{
            id: this.events[0].event_id,
            name: this.events[0].event_name,
            type: this.events[0].type,
            description: this.events[0].description,
            reversePrice: this.events[0].reversePrice,
            budget: this.events[0].budget,
            state: this.events[0].state
          }
        })
      },
      EventDetailsAppear1(){
        this.$router.push({
          path: '/c_home/deliveredtask',
          query:{
            id: this.events[1].event_id,
            name: this.events[1].event_name,
            type: this.events[1].type,
            description: this.events[1].description,
            reversePrice: this.events[1].reversePrice,
            budget: this.events[1].budget,
            state: this.events[1].state
          }
        })
      },
      EventDetailsAppear2(){
        this.$router.push({
          path: '/c_home/deliveredtask',
          query:{
            id: this.events[2].event_id,
            name: this.events[2].event_name,
            type: this.events[2].type,
            description: this.events[2].description,
            reversePrice: this.events[2].reversePrice,
            budget: this.events[2].budget,
            state: this.events[2].state
          }
        })
      },
      EventDetailsAppear3(){
        this.$router.push({
          path: '/c_home/deliveredtask',
          query:{
            id: this.events[3].event_id,
            name: this.events[3].event_name,
            type: this.events[3].type,
            description: this.events[3].description,
            reversePrice: this.events[3].reversePrice,
            budget: this.events[3].budget,
            state: this.events[3].state
          }
        })
      },
      EventDetailsAppear4(){
        this.$router.push({
          path: '/c_home/deliveredtask',
          query:{
            id: this.events[4].event_id,
            name: this.events[4].event_name,
            type: this.events[4].type,
            description: this.events[4].description,
            reversePrice: this.events[4].reversePrice,
            budget: this.events[4].budget,
            state: this.events[4].state
          }
        })
      },
    },
    mounted(){
      events_get().then((res) => {
        console.log(res);
        this.company_id = res.data.data[0].company_id;
        localStorage.setItem("company_id",this.company_id);
        for(let i = 0 ; i < res.data.data.length; i++){
          this.events[i].event_name = res.data.data[i].event_name;
          this.events[i].event_id = res.data.data[i].event_id;
          this.events[i].description = res.data.data[i].description;
          this.events[i].type = res.data.data[i].type;
          this.events[i].reversePrice = res.data.data[i].reversePrice;
          this.events[i].budget = res.data.data[i].price;
          this.events[i].state = res.data.data[i].state;
        }        
      })
    }
  };
</script>

<style scoped>
  .CenterBox {
    margin: 0 auto;
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
    top: 10.83%;
  }
  #whs2{
    position: absolute;
    top: 23.29%;
  }
  #whs3{
    position: absolute;
    top: 35.74%;
  }
  #whs4{
    position: absolute;
    top: 48.19%;
  }
  #whs5{
    position: absolute;
    top: 60.64%;
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
    width: 5.21vw;
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
    left: 90.11%;
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
