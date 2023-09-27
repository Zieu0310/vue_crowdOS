<template>
    <div class="CenterBox">
      <div>
        <div class="above">成果详细</div>
        <div class="whitecenter">
          <router-link to="./team"><div class="grey">返回</div></router-link>
          <img src="../../assets/img/blue.png" class="blue">
          <div class="title">已申报成果详情</div>
          <div class="item" id="i1">成果</div>
          <div class="inblue" id="ib1">{{ title }}</div>
          <div class="item" id="i2">类型</div>
          <div class="inblue" id="ib2">{{ type }}</div>
          <div class="item" id="i3">具体描述</div>
          <el-input v-model="description" :rows="17" type="textarea" disabled style="position: absolute;
      left: 4.73%;top: 35%;width: 35.0625vw;height: 45.93vh;opacity: 1;border-radius: 0.3125vw;background: rgba(245, 245, 245, 1);" />
        </div>
      </div>
    </div>
</template>
  
  <script>
    export default {
      data() {
        return {
          title: "",
          type: "",
          description: "",
        };
      },
      components: {
        
      },
      mounted(){
        this.title = this.$route.query.title;
        this.type = this.$route.query.type;
        this.description = this.$route.query.description;
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
      left: 4.73%;
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
    #i3{
      position: absolute;
      top: 30.51%;
    }
    .grey_rec{
      position: absolute;
      left: 9.73%;
      top: 34%;
      width: 34.0625vw;
      height: 30.93vh;
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
    width: 35vw;
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