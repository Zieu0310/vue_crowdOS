<template>
  <div class="CenterBox">
    <div class="over"></div>
    <div class="add">
      <div class="item" id="i2">成员</div>
      <el-input v-model="member1.name" placeholder="请输入姓名" class="inm1" />
      <div class="my-4 flex items-center text-sm">
        <el-radio-group v-model="member1.role" class="op" style="position:absolute;top:16%">
          <el-radio label="0" size="small">普通成员</el-radio>
          <el-radio label="1" size="small" @click="dis">队长</el-radio>
        </el-radio-group>
      </div>
      <el-input v-model="member2.name" placeholder="请输入姓名" class="inm2" />
      <div class="my-4 flex items-center text-sm">
        <el-radio-group v-model="member2.role" class="op" style="position:absolute;top:27%">
          <el-radio label="0" size="small">普通成员</el-radio>
          <el-radio label="1" size="small">队长</el-radio>
        </el-radio-group>
      </div>
      <el-input v-model="member3.name" placeholder="请输入姓名" class="inm3" />
      <div class="my-4 flex items-center text-sm">
        <el-radio-group v-model="member3.role" class="op" style="position:absolute;top:38%">
          <el-radio label="0" size="small">普通成员</el-radio>
          <el-radio label="1" size="small">队长</el-radio>
        </el-radio-group>
      </div>
      <el-input v-model="member4.name" placeholder="请输入姓名" class="inm4" />
      <div class="my-4 flex items-center text-sm">
        <el-radio-group v-model="member4.role" class="op" style="position:absolute;top:49%">
          <el-radio label="0" size="small">普通成员</el-radio>
          <el-radio label="1" size="small">队长</el-radio>
        </el-radio-group>
      </div>
      <el-input v-model="member5.name" placeholder="请输入姓名" class="inm5" />
      <div class="my-4 flex items-center text-sm">
        <el-radio-group v-model="member5.role" class="op" style="position:absolute;top:60%">
          <el-radio label="0" size="small">普通成员</el-radio>
          <el-radio label="1" size="small">队长</el-radio>
        </el-radio-group>
      </div>
      <el-input v-model="member6.name" placeholder="请输入姓名" class="inm6" />
      <div class="my-4 flex items-center text-sm">
        <el-radio-group v-model="member6.role" class="op" style="position:absolute;top:71%">
          <el-radio label="0" size="small">普通成员</el-radio>
          <el-radio label="1" size="small">队长</el-radio>
        </el-radio-group>
      </div>
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
  import { useDisabled } from 'element-plus';
  import { create_team } from '../../api/research';
  import M_HeadBar from '../../components/M_common/M_HeadBar.vue';

  export default {
    data() {
      return {
        member1:{
          name: "",
          role: "",
        },
        member2:{
          name: "",
          role: "",
        },
        member3:{
          name: "",
          role: "",
        },
        member4:{
          name: "",
          role: "",
        },
        member5:{
          name: "",
          role: "",
        },
        member6:{
          name: "",
          role: "",
        },
      };
    },
    components: {
      M_HeadBar,
    },
    methods:{
      dis(){
        document.getElementsByClassName('op').style = useDisabled;
      },
      handleSetup(){
        create_team(this.member1.name,this.member1.role,this.member2.name,this.member2.role,this.member3.name,this.member3.role,this.member4.name,this.member4.role,this.member5.name,this.member5.role,this.member6.name,this.member6.role).then((res) => {
          console.log(res);
          this.$router.push("/m_home/team");
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
    top: 5%;
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
</style>