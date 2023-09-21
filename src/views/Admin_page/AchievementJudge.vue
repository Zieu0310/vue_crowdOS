<template>
  <div class="container">
    <div class="above">成果审核列表</div>
    <div class="whitesmall" id="ws1">
      <img src="../../assets/img/blue.png" class="blue">
      <div class="textBlue">待审核</div>
      <el-table :data="AchievementNone" border height="560" style="position:absolute;top:10%;width: 100%;">
        <el-table-column prop="title" label="标题" width="250" />
        <el-table-column prop="teamId" label="团队ID" width="250" />
        <el-table-column>
          <template #default="scope">
            <el-button size="small" @click="LookAchievement(scope.row)"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="whitesmall" id="ws2">
      <img src="../../assets/img/blue.png" class="blue">
      <div class="textBlue">审核通过</div>
      <el-table :data="AchievementYes" border height="250" style="position:absolute;top:10%;width: 100%">
        <el-table-column prop="title" label="标题" width="225" />
        <el-table-column prop="teamId" label="团队ID" width="225" />
        <el-table-column prop="remark" label="审核状态" />
      </el-table>
      <img src="../../assets/img/blue.png" class="bluebelow">
      <div class="textBlueBelow">审核不通过</div>
      <el-table :data="AchievementNo" border height="270" style="position:absolute;top:55%;width: 100%">
        <el-table-column prop="title" label="标题" width="225" />
        <el-table-column prop="teamId" label="团队ID" width="225" />
        <el-table-column prop="remark" label="审核状态" />
      </el-table>
    </div>
  </div>
</template>
 
<script>

  import A_HeadBar from '../../components/A_common/A_HeadBar.vue'; 
  import { auachig } from '../../api/admin';
  export default {
    data() {
      return {
        remarknone: 0,
        remarkno: 1,
        remarkyes: 2,
        AchievementNone: [],
        AchievementNo: [],
        AchievementYes: [],

      };
    },
    components: {
      A_HeadBar,
    },
    methods: {
      LookAchievement(row){
        this.$router.push({
            path: '/a_home/achievementjudgeone',
            query:{
              title: row.title,
              type: row.type,
              id: row.id,
              description: row.description,
              team_id: row.teamId,
            }
          })
      }
    },
    mounted(){
      auachig(this.remarknone).then((res) => {
        console.log(res);
        if(res.request.status == 200 && this.remarknone == 0){
          this.AchievementNone = res.data.data;
        }
      })
      auachig(this.remarkno).then((res) => {
        console.log(res);
        if(res.request.status == 200 && this.remarkno == 1){
          this.AchievementNo = res.data.data;
          for(let i = 0; i < this.AchievementNo.length; i++){
            if(this.AchievementNo[i].remark == 2){
              this.AchievementNo[i].remark = "不通过";
            }
          }
        }
      })
      auachig(this.remarkyes).then((res) => {
        console.log(res);
        if(res.request.status == 200 && this.remarkyes == 2){
          this.AchievementYes = res.data.data;
          for(let i = 0; i < this.AchievementYes.length; i++){
            if(this.AchievementYes[i].remark == 2){
              this.AchievementYes[i].remark = "通过";
            }
          }
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
    .container {
      height: 100vh;
      width: 100vw;
      background-image: url(../../assets/img/Web.png);
      background-size: 100% 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      zoom: 1;
      z-index: -10;
    }
    .whitesmall{
      position: absolute;
      top: 18.98%;
      width: 42.8125vw;
      height: 81.02vh;
      opacity: 1;
      background: rgba(255, 255, 255, 0.8);
    }
    #ws1{
      position: absolute;
      left: 6.09375%;
    }
    #ws2{
      position: absolute;
      left: 51.61%;
    }
    .blue{
      position: absolute;
      left: 4.87%;
      top: 4.69%;
      width: 0.21vw;
      height: 1.76vh;
    }
    .bluebelow{
      position: absolute;
      left: 4.87%;
      top: 51.69%;
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
    .textBlueBelow{
      position: absolute;
      left: 6.45%;
      top: 51.23%;
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
    .above{
    position: absolute;
    left: 9.01%;
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
</style>