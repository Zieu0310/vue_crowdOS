<template>
    <div class="CenterBox">
      <div class="whitelarge">
        <img src="../../assets/img/blue.png" class="blue_">
        <div class="textblue_">成员</div>
        <el-button class="addMember" style="position:absolute;left:45%;top:90%" @click="handleAdd" type="info" round v-if="Members == null">点此添加</el-button>
        <el-table
        :data="Members"
        border
        fit
        highlight-current-row
        style="position:absolute;top:10%;width: 1000"
        height="250"
      >
        <el-table-column prop="name" label="姓名" width="560" align="center">
          <template #default="scope">
            <el-input
              v-model="scope.row.name"
              v-show="scope.row.show"
              type="text"
              style="width: 90%"
              size="mini"
            />
            <span v-show="!scope.row.show">{{
              scope.row.name
            }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="team_role" label="邮箱" width="551" align="center">
          <template #default="scope">
            <el-input
              v-model="scope.row.email"
              v-show="scope.row.show"
              type="text"
              style="width: 90%"
              size="mini"
            />
            <span v-show="!scope.row.show">{{
              scope.row.email
            }}</span>
          </template>
        </el-table-column>

      </el-table>
        <img src="../../assets/img/blue.png" class="bluebelow">
        <div class="textBlueBelow">我们的成果</div>
        <el-table :data="Achievements" border style="position:absolute;top:54%;width: 100%" height="190">
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
      </div>
    </div>
</template>
  
  <script>
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';
    import { m_information, members_get ,create_team} from '../../api/research';
    import { ElMessage } from 'element-plus';
  
    export default {
      data() {
        return {
          team_id: "",
          team_name: "",
          account: "",
          id: "",
          name: "",
          Achievements: [],
          Members: [
            {},
          ],
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
        },
        handleDelete(index) {
          this.$confirm("此操作将永久删除, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
          .then(() => {
            this.Members.splice(index, 1)
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            })
          })
          console.log(this.Members);
        },
        save1(row) {
          row.show = false;
        },
        handleAdd() {
          this.$router.push('/m_home/teamsetup')
        },
        AllAdd(){
          create_team(this.Members).then((res) => {
            console.log(res);
            ElMessage({
              message: '保存成功！',
              type: 'success',
            })
          })
          .catch((err) => {
            console.log(err);
          });
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
        members_get().then((res) => {
          console.log(res);
          if(res.request.status == 200){
            this.Members = res.data.data;
          }
        })
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