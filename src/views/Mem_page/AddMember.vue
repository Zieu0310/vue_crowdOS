<template>
  <div class="CenterBox">
    <div class="over"></div>
    <div class="add">
      <div class="title">添加成员</div>
      <div class="item1">姓名</div>
      <el-input v-model="name" placeholder="请输入成员姓名" class="inname" />
      <div class="item2">邮箱</div>
      <el-input v-model="e_mail" placeholder="请输入成员邮箱" class="inemail" />
      <div class="yes" @click="addMember">
        <div class="yestext">添加</div>
      </div>
      <div class="no">
        <router-link to="./teamsetup"><div class="notext">取消</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        e_mail: "",
      };
    },
    methods: {
      addMember(){
        
        this.$router.push({
          path: "/m_home/teamsetup",
          query: {
            name: this.name,
            e_mail: this.e_mail,
          }
        })
      }
    }
  }
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
    top: 25%;
    width: 40vw;
    height: 50vh;
    opacity: 1;
    border-radius: 0.73vw;
    background-color: rgba(255, 255, 255, 1);
    border: 0.1vw solid black;
    z-index: 10;
  }
  .title{
    position: absolute;
    left: 10%;
    top: 10%;
  }
  .item1{
    position: absolute;
    left: 15%;
    top: 25%;
  }
  .item2{
    position: absolute;
    left: 15%;
    top: 45%;
  }
  .inname{
    position: absolute;
    left: 25%;
    top: 24%;
    width: 25vw;
  }
  .inemail{
    position: absolute;
    left: 25%;
    top: 44%;
    width: 25vw;
  }
  .yes{
    position: absolute;
    left: 27.70%;
    top: 70%;
    width: 7.29vw;
    height: 4.26vh;
    opacity: 1;
    border-radius: 1.20vw;
    background: rgba(67, 207, 124, 1);
  }
  .no{
    position: absolute;
    left: 57.30%;
    top: 70%;
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
</style>