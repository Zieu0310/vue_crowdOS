<template>
    <div class="CenterBox">
      <div>
        <div class="above">{{ company_name }}公司发布的需求</div>
        <div class="whitecenter">
          <router-link to="./task"><div class="grey">返回</div></router-link>
          <img src="../../assets/img/blue.png" class="blue">
          <div class="title">需求详情</div>
          <div class="item" id="i1">需求名</div>
          <div class="inblue" id="ib1">{{ name }}</div>
          <div class="item" id="i2">类型</div>
          <div class="inblue" id="ib2">{{ type }}</div>
          <div class="item" id="i2_5">具体描述</div>
          <el-input v-model="description" :rows="8" type="textarea" disabled style="position: absolute;
      left: 9.73%;top: 35%;width: 34.0625vw;height: 14.93vh;opacity: 1;border-radius: 0.3125vw;background: rgba(245, 245, 245, 1);" />
          <div class="item" id="i4" v-if="type !== 'VCG'">报价（万）</div>
          <div class="inblue" id="ib4">{{ reversePrice }}{{ budget }}</div>
          <div class="item" id="i5">报酬（万）</div>
          <div class="inblue" id="ib5">{{ salary }}</div>
        </div>
      </div>
    </div>
</template>
  
  <script>
    export default {
      data() {
        return {
          name: "",
          description: "",
          reversePrice: "",
          type: '',
          company_name: "",
          budget: "",
          endTime: '',
          salary: "",
        };
      },
      components: {
        
      },
      mounted(){
        this.company_name = this.$route.query.company_name;
        this.name = this.$route.query.name;
        this.description = this.$route.query.description;
        this.reversePrice = this.$route.query.reversePrice;
        this.budget = this.$route.query.budget;
        this.salary = this.$route.query.salary;
        if(this.$route.query.type == 0){
          this.type = '有成本预算交易';
        }else if(this.$route.query.type == 1){
          this.type = '一般交易';
        }else{
          this.type = '固定价格交易';
        }
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
      left: 9.73%;
      width: 6vw;
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
      top: 23.01%;
    }
    #i2_5{
      position: absolute;
      top: 30.01%;
    }
    #i3{
      position: absolute;
      top: 37.42%;
    }
    #i4{
      position: absolute;
      top: 65.79%;
    }
    #i5{
      position: absolute;
      top: 73.1%;
    }
    .grey_rec{
      position: absolute;
      left: 9.73%;
      top: 42.57%;
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
    top: 23.12%;
  }
  #ib2_5{
    position: absolute;
    top: 30.12%;
  }
  #ib4{
    position: absolute;
    top: 65.88%;
  }
  #ib5{
    position: absolute;
    top: 72.88%;
  }
  </style>