<template>
  <div class="CenterBox">
        <div class="title">团队信息</div>
        <div class="whitelarge">
            <img src="../../assets/img/blue.png" class="blue_" id="b1">
            <div class="textblue_" id="tb1">成员</div>
            <el-table :data="Members" border height="200" style="position:absolute;top:10%;width: 100%">
              <el-table-column prop="name" label="姓名" width="1120" />
            </el-table>
            <img src="../../assets/img/blue.png" class="blue_" id="b2">
            <div class="textblue_" id="tb2">成果</div>
            <el-table :data="Achievements" border height="200" style="position:absolute;top:49.3%;width: 100%">
              <el-table-column prop="title" label="标题" width="400" />
              <el-table-column prop="type" label="类型" width="400" />
              <el-table-column prop="address" label="">
                <template #default="scope">
                  <el-button size="small" @click="LookAchievement(scope.row)"
                    >详情</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
        </div>
    </div>    
</template>

<script>
  import { getTeamAchievement,getTeamDetalis } from '../../api/company';
  export default{
    data(){
      return{
        Members: [],
        Achievements: [],
        team_id: "",
        title: "",
        team_name: "",
      }
    },
    methods: {
      LookAchievement(row){
        this.$router.push({
          path: '/c_home/teamachievement',
          query: {
            title: row.title,
            description: row.description,
            type: row.type,
            team_name: this.team_name,
          }
        })
      }
    },
    mounted(){
      this.team_id = this.$route.query.team_id;
      this.team_name = this.$route.query.team_name;
      getTeamDetalis(this.team_id).then((res) =>{
        console.log(res);
        if(res.request.status == 200){
          this.Members = res.data.data.members;
          this.Achievements = res.data.data.achievements;
          for(let i = 0; i < this.Achievements.length; i++){
            if(this.Achievements[i].type == 0){
              this.Achievements[i].type = "论文";
            }else if(this.Achievements[i].type == 1){
              this.Achievements[i].type = "专利";
            }else{
              this.Achievements[i].type = "项目";
            }
          }
        }
      })
    }
  }
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
  .title{
    position: absolute;
    left: 10%;
    top: 12%;
    width: 20vw;
    height: 3vh;
    color: black;
    font-weight: 1000;
    font-size: 2vw;
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
  .blue_{
    position: absolute;
    left: 2%;
    top: 2%;
    width: 0.21vw;
    height: 1.76vh;
  }
  #b1{
    position: absolute;
    top: 2%;
  }
  #b2{
    position: absolute;
    top: 45.5%;
  }
  .textblue_{
    position: absolute;
    left: 3%;
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
  #tb1{
    position: absolute;
    top: 1.5%;
  }
  #tb2{
    position: absolute;
    top: 45%;
  }
  .mem{
    position: absolute;
    top: 5%;
    width: 80vw;
    height: 23vh;
  }
  .name{
    position: absolute;
    left: 10%;
    top: 40%;
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
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    margin: 1vh;
    text-align: center;
    border-radius: 4px;
    border: solid 1px darkgrey;
    background: rgba(255, 255, 255, 0.8);
    font-weight: 700;
    color: black;
  }
  .scrollbar-demo-item1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 6vh;
    margin: 1vh;
    border-radius: 4px;
    border: solid 1px darkgrey;
    background: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    font-size: 2vw;
    color: black;
  }
  .achi{
    position: absolute;
    top: 50%;
    width: 80vw;
    height: 23vh;
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