<template>
    <div class="CenterBox">
      <div>
        <div class="above">XXX团队的成果</div>
        <div class="whitecenter">
          <router-link to="./allmember"><div class="grey">返回</div></router-link>
          <img src="../../assets/img/blue.png" class="blue">
          <div class="title">成果详情</div>
          <div class="item" id="i1">成果</div>
          <div class="inblue" id="ib1">{{ title }}</div>
          <div class="item" id="i2">类型</div>
          <div class="inblue" id="ib2">{{ type }}</div>
          <div class="item" id="i21">科研队</div>
          <div class="inblue" id="ib21">XX教授团队</div>
          <div class="item" id="i22">科研队ID</div>
          <div class="inblue" id="ib22">{{ team_id }}</div>
          <div class="item" id="i3">具体描述</div>
          <div class="grey_rec">
              <div class="innertext">{{ file }}</div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
    import axios from 'axios';
    export default {
      data() {
        return {
          title: "",
          type: 0,
          team_id: 0,
          file: ""
        };
      },
      components: {
        
      },
      created(){
        axios.get("http://127.0.0.1:4523/m1/3023705-0-default/companies/getTeamAchievements/1",{
          params:{
            team_id: 0,
          }
        }).then(res => {
          console.log(res);
          this.title = res.data.data.title;
          this.team_id = res.data.data.team_id;
          this.file = res.data.data.file;
          if(res.data.data.type == 0){
            this.type = "论文";
          }else if(res.data.data.type == 1){
            this.type = "专利";
          }else{
            this.type = "项目";
          }
        }).catch(error =>{
          console.log(error);
        })
      },
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
    }
    .above{
      position: absolute;
      left: 29.95%;
      top: 13.06%;
      width: 20.9375vw;
      height: 2.96vh;
      opacity: 1;
      font-size: 1.25vw;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 2.93vh;
      color: rgba(0, 0, 0, 1);
      text-align: left;
      vertical-align: top;
    }
    .whitecenter{
      position: absolute;
      left: 28.59375%;
      top: 18.98%;
      width: 42.8125vw;
      height: 81.02vh;
      opacity: 1;
      background: rgba(255, 255, 255, 0.8);
    }
    .grey{
      position: absolute;
      left: 6.81%;
      top: 3.086%;
      width: 3.75vw;
      height: 2.22vh;
      opacity: 1;
      font-size: 0.9375vw;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 2.20vh;
      color: rgba(166, 166, 166, 1);
      text-align: left;
      vertical-align: top;
    }
    .blue{
      position: absolute;
      left: 4.62%;
      top: 8.76%;
      width: 0.26vw;
      height: 2.25vh;
    }
    .title{
      position: absolute;
      left: 6.20%;
      top: 8.34%;
      width: 10.42vw;
      height: 2.5vh;
      opacity: 1;
      font-size: 1.04vw;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 2.44vh;
      color: rgba(0, 43, 255, 1);
      text-align: left;
      vertical-align: top;
    }
    .item{
      position: absolute;
      left: 9.73%;
      width: 5vw;
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
    #i21{
      position: absolute;
      top: 30.51%;
    }
    #i22{
      position: absolute;
      top: 37.42%;
    }
    #i3{
      position: absolute;
      top: 44.33%;
    }
    .grey_rec{
      position: absolute;
      left: 9.73%;
      top: 49.48%;
      width: 34.0625vw;
      height: 15.93vh;
      opacity: 1;
      border-radius: 0.3125vw;
      background: rgba(245, 245, 245, 1);
    }
    .innertext{
      position: absolute;
      left: 3.67%;
      top: 10.465%;
      width: 31.5625vw;
      height: 7.87vh;
      opacity: 1;
      font-size: 0.83vw;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 1.95vh;
      color: rgba(0, 0, 0, 1);
      text-align: justify;
      vertical-align: top;
    }
    .inblue{
    position: absolute;
    right: 12.29%;
    width: 13.54vw;
    height: 2.5vh;
    opacity: 1;
    font-size: 1.04vw;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 2.44vh;
    color: rgba(0, 43, 255, 1);
    text-align: right;
    vertical-align: top;
  }
  #ib1{
    position: absolute;
    top: 16.8%;
  }
  #ib2{
    position: absolute;
    top: 23.71%;
  }
  #ib21{
    position: absolute;
    top: 30.62%;
  }
  #ib22{
    position: absolute;
    top: 37.53%;
  }
  </style>