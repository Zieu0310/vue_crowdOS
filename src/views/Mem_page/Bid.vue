<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add">
        <div class="titleText">投标</div>
        <div class="the_bid0" v-if="budget != 0 && budget != null && budget != ''">该需求的预算为{{ budget }}万元</div>
        <div class="the_bid0" v-if="budget == 0 || budget == null || budget == ''">该需求暂无确定预算</div>
        <div class="the_bid">请输入您的报价（单位：万）</div>
        <el-input-number v-model="bid" :precision="2" :step="0.01" :max="10000" style="position:absolute;top:53%;left:8%;" />
        <el-button type="success" @click="tenderData" style="position:absolute;top:70%;left:30%">确认</el-button>
        <router-link to="./tasksquare"><el-button type="warning" style="position:absolute;top:70%;left:60%">取消</el-button></router-link>
      </div>     
    </div>
</template>
  
  <script>
    import { tender } from '../../api/Tender.js';
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';
    import { ElMessage } from 'element-plus';

    export default {
      name: 'bid',
      data() {
        return {
          event_id: 0,
          budget: 0,  
          bid: 0,
        };
      },
      components: {
        M_HeadBar,
      },
      mounted(){
        this.event_id = this.$route.query.event_id;
        this.budget = this.$route.query.budget;
        console.log(this.event_id);
      },
      methods: {
        tenderData() {      
          tender(this.event_id,this.bid).then((res)=>{
            console.log(res);
            ElMessage({
              message: '已投标！等待竞标！',
              type: 'success',
            })
            this.$router.push('/m_home/tasksquare')
          })
          .catch((err) => {
            if(err.response.request.status != 200){
              ElMessage({
                message: '投标失败！',
                type: 'error',
              })
            }
          })
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
      left: 8%;
      top: 38%;
      width: 30vw;
      height: 7vh;
      font-size: 1.5vw;
      color: black;
      font-family: '宋体';
    }
    .the_bid0{
      position: absolute;
      left: 8%;
      top: 25%;
      width: 30vw;
      height: 7vh;
      font-size: 1.5vw;
      color: black;
      font-family: '宋体';
    }
    .titleText{
      position: absolute;
      left: 8%;
      top: 10%;
      width: 8vw;
      height: 4vh;
      font-size: 2vw;
      color: black;
      font-family: '黑体';
    }
  </style>