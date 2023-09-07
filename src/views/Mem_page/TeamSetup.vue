<template>
  <div class="CenterBox">
    <div class="over"></div>
    <div class="add">
      <div class="item">团队名称</div>
      <el-input v-model="team_name" placeholder="请输入团队名称" class="teamName" />
      <div class="item1">成员</div>
      <el-button class="addMember" @click="dialogVisible = true">点此添加</el-button>
      <el-dialog
        v-model="dialogVisible"
        title="添加成员"
        width="30%"
        :before-close="handleClose"
      >
        <div class="name">姓名</div>
        <el-input v-model="name" placeholder="请输入姓名" class="inname" />
        <div class="e_mail">邮箱</div>
        <el-input v-model="e_mail" placeholder="请输入邮箱" class="ine_mail" />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="addMember">
              添加
            </el-button>
          </span>
        </template>
      </el-dialog>
      <table>
      <thead>
        <tr>
          <th width="10vw" height="40vh" bgcolor="rgba(0,0,255,1)">姓名</th>
          <th width="20vw" height="40vh" bgcolor="rgba(0,0,255,1)">邮箱</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ member[0].name }}</td>
          <td>{{ member[0].e_mail }}</td>
        </tr>
        <tr>
          <td>{{ member[1].name }}</td>
          <td>{{ member[1].e_mail }}</td>
        </tr>
        <tr>
          <td>{{ member[2].name }}</td>
          <td>{{ member[2].e_mail }}</td>
        </tr>
        <tr>
          <td>{{ member[3].name }}</td>
          <td>{{ member[3].e_mail }}</td>
        </tr>
        <tr>
          <td>{{ member[4].name }}</td>
          <td>{{ member[4].e_mail }}</td>
        </tr>
        <tr>
          <td>{{ member[5].name }}</td>
          <td>{{ member[5].e_mail }}</td>
        </tr>
      </tbody>
    </table>
      <div class="yes" @click="handleSetup">
        <div class="yestext">创建</div>
      </div>
      <div class="no">
        <router-link to="./team"><div class="notext">取消</div></router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
  import { create_team } from '../../api/research';
  import M_HeadBar from '../../components/M_common/M_HeadBar.vue';


  
  export default {
    data() {
      return {
        dialogVisible: false,
        name: "",
        e_mail: "",
        team_name: "",
        member: [
          {name: null, e_mail: null},
          {name: null, e_mail: null},
          {name: null, e_mail: null},
          {name: null, e_mail: null},
          {name: null, e_mail: null},
          {name: null, e_mail: null},
        ]
      };
    },
    components: {
      M_HeadBar,
    },
    methods:{
      addMember(){
        this.dialogVisible = false;
        for(let i = 0; i < 6; i++){
          if(this.member[i].name == null && this.member[i].e_mail == null){
            this.member[i].name = this.name;
            this.member[i].e_mail = this.e_mail;
            break;
          }else{
            continue;
          }
        }
      },
      handleSetup(){
        create_team(this.team_name,this.member).then((res) => {
          console.log(res);
        })
      }
    },
    mounted(){
      for(let i = 0; i < 6; i ++){
        if(this.member[i].name == null && this.member[i].e_mail == null){
          this.member[i].name = this.$route.query.name;
          this.member[i].e_mail = this.$route.query.e_mail;
          break;
        }else{
          continue;
        }
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
  .item1{
    position: absolute;
    left: 9.73%;
    top: 25%;
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
    top: 30%;
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
.op{
  position: absolute;
  left: 15%;
}
table{
  position: absolute;
  left: 10%;
  top: 40%;
  width: 30vw;
  height: auto;
  border-spacing: 0px;
}
th{
  border: 0.5px solid grey;
  color: beige;
}
td{
  border: 0.5px solid grey;
  background-color: rgba(135,206,250,1);
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