<template>
    <div class="CenterBox">
        <div class="whitelarge">
          <router-link to="./allmember">
            <div class="whs" id="whs1">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">{{ teams0.team_name }}</div>
            </div>
          </router-link>
          <router-link to="./allmember">
            <div class="whs" id="whs2">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">{{ teams1.team_name }}</div>
            </div>
          </router-link>
          <router-link to="./allmember">
            <div class="whs" id="whs3">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">{{ teams2.team_name }}</div>
            </div>
          </router-link>
          <router-link to="./allmember">
            <div class="whs" id="whs4">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">{{ teams3.team_name }}</div>
          </div>
          </router-link>
          <router-link to="./allmember">
            <div class="whs" id="whs5">
              <img src="../../assets/img/icon.png" class="icon">
              <div class="name">{{ teams4.team_name }}</div>
            </div>
          </router-link>                    
        </div>
    </div>
</template>

<script>
  import axios from 'axios';
  import { myteam_get } from '../../api/MyteamGet';  
  export default {
    data() {
      return {
        teams0: [
            {
              team_id: 0,
              team_name: "string",
              event_id: 0
            }
        ],
        teams1: [
            {
              team_id: 0,
              team_name: "string",
              event_id: 0
            }
        ],
        teams2: [
            {
              team_id: 0,
              team_name: "string",
              event_id: 0
            }
        ],
        teams3: [
            {
              team_id: 0,
              team_name: "string",
              event_id: 0
            }
        ],
        teams4: [
            {
              team_id: 0,
              team_name: "string",
              event_id: 0
            }
        ]
      };
    },
    components: {
      
    },
    created(){
      axios.get("http://127.0.0.1:4523/m1/3023705-0-default/companies/getTeamInformation").then(res => {
        console.log(res);
        this.teams0.team_name = res.data.data.teams[0].team_name;
        this.teams1.team_name = res.data.data.teams[1].team_name;
        this.teams2.team_name = res.data.data.teams[2].team_name;
        this.teams3.team_name = res.data.data.teams[3].team_name;
        this.teams4.team_name = res.data.data.teams[4].team_name;
      }).catch(error =>{
        console.log(error);
      })
    },
    methods: {
      handGetTeam(){
        let data = {
          "teams": [
            {
                "team_id": 0,
                "team_name": "string",
                "event_id": 0
            }
          ]
        }
        myteam_get().then(res => {

        }).catch(error => {})
      }
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
    top: 35%;
    width: 15vw;
    height: 2.3vh;
    opacity: 1;
    font-size: 1.7vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.48vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
</style>
