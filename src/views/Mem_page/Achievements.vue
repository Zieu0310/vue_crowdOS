<template>
  <div class="CenterBox">
    <div class="whitelarge">
      <img src="../../assets/img/blue.png" class="blue_">
      <div class="textblue_">科研成果</div>
      <el-table :data="Achievements" border height="450" style="position:absolute;top:10%;width: 100%">
        <el-table-column prop="title" label="标题" width="300" />
        <el-table-column prop="type" label="类型" width="300" />
        <el-table-column prop="remark" label="审核状态" width="300" />
        <el-table-column prop="address" label="">
          <template #default="scope">
            <el-button size="small" @click="LookAchievementDetail(scope.row)"
            >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <router-link to="addachievement"><img src="../../assets/img/add.png" alt="添加成果" class="round"></router-link>
    </div>
  </div>
</template>

<script>
  import M_HeadBar from '../../components/M_common/M_HeadBar.vue';
  import { m_information } from '../../api/research';
  export default {
    data() {
      return {
        Achievements: [],
      };
    },
    components: {
      M_HeadBar,
    },
    methods:{
      LookAchievementDetail(row){
        this.$router.push({
          path: '/m_home/achievementsmaken',
          query: {
            title: row.title,
            type: row.type,
            description: row.description,
          }
        })
      }
    },
    mounted(){
      m_information().then((res) => {
        console.log(res);
        if(res.request.status == 200){
          this.Achievements = res.data.data.achievements;
          this.team_name = res.data.data.team_name;
          this.team_id = res.data.data.team_id;
          for(let i = 0; i < this.Achievements.length; i++){
            if(this.Achievements[i].type == 0){
              this.Achievements[i].type = "论文";
            }else if(this.Achievements[i].type == 1){
              this.Achievements[i].type = "专利";
            }else{
              this.Achievements[i].type = "项目";
            }
          }
          for(let i = 0; i < this.Achievements.length; i++){
            if(this.Achievements[i].remark == 0){
              this.Achievements[i].remark = "未审核";
            }else if(this.Achievements[i].remark == 1){
              this.Achievements[i].remark = "审核不通过";
            }else{
              this.Achievements[i].remark = "审核通过";
            }
          }
        }
      });
    }
  };
</script>

<style scoped>
  .CenterBox {
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
  .whitelarge{
    position: absolute;
    left: 9.01%;
    top: 18.98%;
    width: 80.36vw;
    height: 81.02vh;
    opacity: 1;
    background: rgba(255,255,255,0.8);
  }
  .blue_{
    position: absolute;
    left: 4.87%;
    top: 4.69%;
    width: 0.21vw;
    height: 1.76vh;
  }
  .textblue_{
    position: absolute;
    left: 6.45%;
    top: 4.23%;
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
  .gr{
    position: absolute;
    right: 3%;
    top: 2%;
    width: 4vw;
    height: 1vh;
    font-size: 0.8vw;
    color: rgba(51, 51, 51, 1);
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
    top: 8.83%;
    display: none;
  }
  #whs2{
    position: absolute;
    top: 21.29%;
    display: none;
  }
  #whs3{
    position: absolute;
    top: 33.74%;
    display: none;
  }
  #whs4{
    position: absolute;
    top: 46.20%;
    display: none;
  }
  #whs5{
    position: absolute;
    top: 58.66%;
    display: none;
  }
  #whs6{
    position: absolute;
    top: 71.11%;
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
    left: 85%;
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
</style>
