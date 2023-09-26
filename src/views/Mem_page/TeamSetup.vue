<template>
  <div class="CenterBox">
    <div class="over"></div>
    <div class="add">
      <div class="item">成员</div>
      <el-button class="addMember" @click="handleAdd">点此添加</el-button>
      <el-table
        :data="Members"
        border
        fit
        highlight-current-row
        style="position:absolute;top:22%;width: 1000"
        height="340"
      >
        <el-table-column prop="name" label="姓名" align="center">
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

        <el-table-column prop="email" label="邮箱" align="center">
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

        <el-table-column prop="" label="操作" min-width="180" align="center">
          <template #default="scope">
            <el-button
              @click="handleDelete(scope.$index)"
              class="btn-text-red"
              type="danger"
              size="mini"
              icon="el-icon-delete"
              >删除
            </el-button>

            <el-button
              @click="scope.row.show = true"
              type="primary"
              size="mini"
              icon="el-icon-edit"
              >编辑</el-button
            >

            <el-button
              @click="save1(scope.row)"
              type="success"
              size="mini"
              icon="el-icon-success"
              >保存</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-button type="success" round @click="handleSetup" style="position: absolute;left: 27.70%;top: 79.77%;">添加</el-button>
      <el-button type="danger" round @click="Cancel" style="position: absolute;left: 57.30%;top: 79.77%;">取消</el-button>
    </div>
    
  </div>
</template>

<script>
  import { ElMessage } from 'element-plus';
  import { create_team} from '../../api/research';
  import M_HeadBar from '../../components/M_common/M_HeadBar.vue';


  
  export default {
    data() {
      return {
        dialogVisible: false,
        name: "",
        email: "",
        Members: [],
        MembersToAdd: [],
      };
    },
    components: {
      M_HeadBar,
    },
    methods:{
      Cancel(){
        this.$router.push('/m_home/team')
      },
      handleSetup(){
        for(let item of this.Members){
          console.log(item);
          this.MembersToAdd.push({ name: item.name, email: item.email });
        }
        create_team(this.MembersToAdd).then((res) => {
          console.log(res);
          ElMessage({
            message: '成员添加成功！',
            type: 'success',
          })
          this.$router.push('/m_home/team');
        })
      },
    // 添加点击按钮
    handleAdd() {
      this.Members.push({
        name: "",
        show: true,
      });
    },
    save1(row) {
      row.show = false;
    },
    handleDelete(index) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.tableData.splice(index, 1)
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
    },
    },
    mounted(){
      console.log(this.MembersToAdd);
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
    top: 10%;
    width: 40vw;
    height: 80vh;
    opacity: 1;
    border-radius: 0.73vw;
    background-color: rgba(255, 255, 255, 1);
    border: 0.1vw solid black;
    z-index: 10;
  }
  .blue{
    position: absolute;
    left: 4.87%;
    top: 4.69%;
    width: 0.21vw;
    height: 1.76vh;
  }
  .textBlue{
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
  .inm1{
    position: absolute;
    left: 15%;
    top: 10%;
    width: 30vw;
  }
  .inm2{
    position: absolute;
    left: 15%;
    top: 21%;
    width: 30vw;
  }
  .inm3{
    position: absolute;
    left: 15%;
    top: 32%;
    width: 30vw;
  }
  .inm4{
    position: absolute;
    left: 15%;
    top: 43%;
    width: 30vw;
  }
  .inm5{
    position: absolute;
    left: 15%;
    top: 54%;
    width: 30vw;
  }
  .inm6{
    position: absolute;
    left: 15%;
    top: 65%;
    width: 30vw;
  }
  .item{
    position: absolute;
    left: 9.73%;
    top: 10%;
    width: 4.17vw;
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
  .teamName{
    position: absolute;
    left: 9.73%;
    top: 15%;
    width: 30vw;
  }
  .addMember{
    position: absolute;
    left: 9.73%;
    top: 15%;
  }
  .yes{
  position: absolute;
  left: 27.70%;
  top: 79.77%;
  width: 7.29vw;
  height: 4.26vh;
  opacity: 1;
  border-radius: 1.20vw;
  background: rgba(67, 207, 124, 1);
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
.name{
  position: absolute;
  left: 10%;
  top: 30%;
}
.e_mail{
  position: absolute;
  left: 10%;
  top: 50%;
}
.inname{
  position: absolute;
  left: 25%;
  top: 28%;
  width: auto;
}
.ine_mail{
  position: absolute;
  left: 25%;
  top: 48%;
  width: auto;
}
</style>