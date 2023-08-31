<template>
    <div class="CenterBox">
        <div class="whitelarge">
          <div class="whs" id="whs1" @click="ResearchLook">
            <img src="../../assets/img/icon.png" class="icon">
            <div class="name">PN公司</div>
            <div class="message">发来一条任务</div>
          </div>
          <router-link to="./taskdescription">
            <div class="whs" id="whs2">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">PN公司</div>
              <div class="message">发来一条任务</div>
            </div>
          </router-link>
          <router-link to="./taskdescriptionv">
            <div class="whs" id="whs3">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">PN公司</div>
              <div class="message">发来一条任务</div>
            </div>
          </router-link>
          <router-link to="./taskdescription">
            <div class="whs" id="whs4">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">PN公司</div>
              <div class="message">发来一条任务</div>
          </div>
          </router-link>
          <router-link to="./taskdescription">
            <div class="whs" id="whs5">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">PN公司</div>
              <div class="message">发来一条任务</div>
            </div>
          </router-link>
          <router-link to="./taskdescription">
            <div class="whs" id="whs6">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">PN公司</div>
              <div class="message">发来一条任务</div>
            </div>
          </router-link>                    
        </div>
    </div>
</template>

<script>
  import { allevents_get } from '../../api/research';
  export default {
    data() {
      return {
        events: [
          {
            event_name: "",
            event_id: "",
            company_id: "",
            description: "",
            state: "",
            budget: "",
            reversePrice: "",
            type: ""
          },
          {
            event_name: "",
            event_id: "",
            company_id: "",
            description: "",
            state: "",
            budget: "",
            reversePrice: "",
            type: ""
          },
          {
            event_name: "",
            event_id: "",
            company_id: "",
            description: "",
            state: "",
            budget: "",
            reversePrice: "",
            type: ""
          },
          {
            event_name: "",
            event_id: "",
            company_id: "",
            description: "",
            state: "",
            budget: "",
            reversePrice: "",
            type: ""
          },
        ],
      };
    },
    components: {
      
    },
    methods: {
      ResearchLook(){
        this.$router.push({
          path: '/m_home/taskdescriptioni',
          query:{
            event_id: this.events[0].event_id,
            event_name: this.events[0].event_name,
            company_id: this.events[0].company_id,
            description: this.events[0].description,
            reversePrice: this.events[0].reversePrice,
            budget: this.events[0].budget,
            state: this.events[0].state,
            type: this.events[0].type,
          }
        })
      }
    },
    mounted(){
      allevents_get().then((res) => {
        console.log(res);
        for(let i = 0; i < res.data.data.length; i++){
          this.events[i].event_name = res.data.data[i].name;
          this.events[i].event_id = res.data.data[i].id;
          this.events[i].company_id = res.data.data[i].companyId;
          this.events[i].description = res.data.data[i].description;
          this.events[i].state = res.data.data[i].state;
          this.events[i].budget = res.data.data[i].budget;
          this.events[i].reversePrice = res.data.data[i].reversePrice;
          this.events[i].type = res.data.data[i].type;
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
    width: 80.36vw;
    height: 8.1vh;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 0.03vw solid rgba(166, 166, 166, 1);
  }
  #whs1{
    position: absolute;
    top: 0%;
  }
  #whs2{
    position: absolute;
    top: 9.99753%;
  }
  #whs3{
    position: absolute;
    top: 19.995%
  }
  #whs4{
    position: absolute;
    top: 29.9926%;
  }
  #whs5{
    position: absolute;
    top: 39.99%;
  }
  #whs6{
    position: absolute;
    top: 49.98765%;
  }
  .icon{
    position: absolute;
    left: 5.65%;
    top: 26.17%;
    width: 2.8vw;
    height: 4vh;
  }
  .name{
    position: absolute;
    left: 10%;
    top: 25%;
    width: 10vw;
    height: 2.3vh;
    opacity: 1;
    font-size: 1.3vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.48vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
  .message{
    position: absolute;
    left: 10%;
    top: 60%;
    width: 30vw;
    height: 1.2vh;
    opacity: 1;
    font-size: 0.975vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.5vh;
    color: rgba(110, 110, 110, 1);
    text-align: left;
    vertical-align: top;
  }
</style>