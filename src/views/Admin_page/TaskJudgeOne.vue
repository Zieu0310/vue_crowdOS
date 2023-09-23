<template>
    <div class="CenterBox">
      <div>
        <div class="above">{{ company_name }}的需求申请</div>
        <div class="whitecenter">
          <router-link to="./taskjudge"><div class="grey">返回</div></router-link>
          <img src="../../assets/img/blue.png" class="blue">
          <div class="title">已申报需求详情</div>
          <div class="item" id="i1">需求名</div>
          <div class="inblue" id="ib1">{{ event_name }}</div>
          <div class="item" id="i3">具体描述</div>
          <el-input v-model="description" :rows="10" type="textarea" disabled style="position: absolute;
      left: 9.73%;top: 28%;width: 34.0625vw;height: 14.93vh;opacity: 1;border-radius: 0.3125vw;background: rgba(245, 245, 245, 1);" />
          <div class="item" id="i4">报价（万）</div>
          <div class="inblue" id="ib4">{{ reservePrice }}</div>
          <el-radio-group v-model="remark" class="yon">
            <el-radio :label="2">通过</el-radio>
            <el-radio :label="1">不通过</el-radio>
          </el-radio-group>
          <div class="yes" @click="handleAuditEvents">
            <div class="yestext">提交</div>
          </div>
        </div>
      </div>
    </div>
</template>
  
  <script>
    import { ElMessage } from 'element-plus';
    import { auditEvents } from '../../api/admin';
    export default {
      name: 'auditEvent',
      data() {
        return {
          company_id: 0,
          event_id: 0,
          event_name: "",
          description: "",
          reservePrice: 0,
          remark: 0,
          company_name: "",
        };
      },
      components: {
        
      },
      methods: {
        handleAuditEvents(){
          auditEvents(this.event_id,this.remark).then((res) => {
            if(this.remark != 0){
              console.log(res);
              ElMessage({
                message: '审核成功！',
                type: 'success',
              })
              this.$router.push("/a_home/taskjudge")
            }
            else{
              alert('请审核！');
            }
          })
          .catch((err) => {
            if(err.response.request.status != 200){
              ElMessage({
                message: '审核失败！',
                type: 'error',
              })
            }
          })
        } 
      },
      mounted() {
        this.company_id = this.$route.query.company_id;
        this.description = this.$route.query.description;
        this.event_id = this.$route.query.id;
        this.event_name = this.$route.query.name;
        this.reservePrice = this.$route.query.price;
        this.remark = this.$route.query.remark;
        this.company_name = this.$route.query.company_name;
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
    #i3{
      position: absolute;
      top: 23.42%;
    }
    #i4{
      position: absolute;
      top: 65.79%;
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
    .yes{
      position: absolute;
      left: 40%;
      top: 85%;
      width: 7.29vw;
      height: 4.26vh;
      opacity: 1;
      border-radius: 1.20vw;
      background: rgba(0, 43, 255, 1);
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
  #ib4{
    position: absolute;
    top: 65.88%;
  }
  .yon{
    position: absolute;
    left: 12%;
    top: 72%;
  }
  </style>