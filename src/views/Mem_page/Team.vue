<template>
    <div class="CenterBox">
      <div class="whitelarge">
        <img src="../../assets/img/blue.png" class="blue_">
        <div class="textblue_">成员</div>
        <div class="whs" id="whs1" @click="LookTeam">
          <img src="../../assets/img/group.png" class="group">
          <div class="textblack">{{ team_name }}</div>
        </div>
        <img src="../../assets/img/blue.png" class="bluebelow">
        <div class="textBlueBelow">我们的成果</div>
        <el-table :data="Achievements" border style="position:absolute;top:54%;width: 100%" height="270">
          <el-table-column prop="title" label="成果名" width="300"></el-table-column>
          <el-table-column prop="type" label="类型" width="300"></el-table-column>
          <el-table-column prop="remark" label="审核状态" width="300"></el-table-column>
          <el-table-column>
            <template #default="scope">
              <el-button size="small" @click="LookAchievementDetail(scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <router-link to="teamsetup"><img src="../../assets/img/add.png" alt="添加成果" class="round"></router-link>
      </div>
    </div>
</template>
  
  <script>
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';
    import { m_information } from '../../api/research';
  
    export default {
      data() {
        return {
          team_id: "",
          team_name: "",
          account: "",
          id: "",
          name: "",
          Achievements: [],
        };
      },
      components: {
        M_HeadBar,
      },
      methods: {
        LookTeam(){
          this.$router.push({
            path: "/m_home/teaminformation",
            query: {
              team_id: this.team_id,
              team_name: this.team_name,
              Achievements: this.Achievements,
            }
          })
        },
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
    .bluebelow{
      position: absolute;
      left: 4.87%;
      top: 50.69%;
      width: 0.21vw;
      height: 1.76vh;
    }
    .textBlueBelow{
      position: absolute;
      left: 6.45%;
      top: 50.23%;
      width: 10.21vw;
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
    .group{
      position: absolute;
      left: 2.52%;
      top: 30.95%;
      width: 1.67vw;
      height: 2.96vh;
    }
    .textblack{
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
    }
    #whs2{
      position: absolute;
      top: 21.29%;
    }
    #whs3{
      position: absolute;
      top: 33.74%;
    }
    #whs4{
      position: absolute;
      top: 46.20%;
    }
    #whs5{
      position: absolute;
      top: 58.66%;
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
  </style>