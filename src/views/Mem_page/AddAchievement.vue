<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add">
        <div class="item" id="i1">成果名称</div>
        <el-input v-model="title" placeholder="Please input" type="text" class="im1" />
        <div class="item" id="i2">类型</div>
        <el-input v-model="type" placeholder="Please input" type="number" class="im2" />
        <div class="item" id="i3">成果描述</div>
        <el-input v-model="description" :rows="6" type="textarea" placeholder="请描述" class="grey_rec" />
        <div class="item" id="i4">附件</div>
        <div class="yes">
          <div class="yestext" @click="handlePostAchievement">上传</div>
        </div>
        <div class="no">
          <router-link to="./achievements"><div class="notext">取消</div></router-link>
        </div>
        <div class="bottom">
          <div class="btx">类型说明: 0为论文,1为专利,2为项目</div>
        </div>
      </div>
    </div>
</template>
  
  <script>
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';
    import { post_achievement } from '../../api/PostAchievement';
  
    export default {
      data() {
        return {
          achievements:{
            title: '',
            description: '',
            type: '',
          }
        };
      },
      components: {
        M_HeadBar,
      },
      methods:{
        handlePostAchievement(){
          post_achievement(this.achievements.title,this.achievements.description,this.achievements.type).then((res)=>{
            console.log(res);
            if(this.achievements.title !== "" && this.description !== "" && this.price > 0){
              this.$router.push("/c_home/deliversuccess")
            }
            else if(this.achievements.title === ""){
              alert('成果名称不能为空！')
            }
            else if(this.achievements.type != 0 || this.achievements.type != 1 || this.achievements.type !=2 ){
              alert('请正确输入类型！')
            }
            else if(this.achievements.description === ""){
              alert('成果描述不能为空！')
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
      top: 10%;
      width: 40vw;
      height: 80vh;
      opacity: 1;
      border-radius: 0.73vw;
      background-color: rgba(255, 255, 255, 1);
      border: 0.1vw solid black;
      z-index: 10;
    }
    .item{
      position: absolute;
      position: absolute;
      left: 9.73%;
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
    #i1{
    position: absolute;
    top: 16.69%;
    }
    #i2{
      position: absolute;
      top: 23.6%;
    }
    #i3{
      position: absolute;
      top: 30.51%;
    }
    #i4{
      position: absolute;
      top: 58.86%;
    }
    .grey_rec{
      position: absolute;
      left: 9.73%;
      top: 35.66%;
      width: 34.0625vw;
      height: 15.93vh;
      opacity: 1;
      border-radius: 0.3125vw;
      background: rgba(245, 245, 245, 1);
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
  .bottom{
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 40vw;
    height: 4vh;
    background-color: lightpink;
  }
  .btx{
    position: absolute;
    left: 3%;
    top: 30%;
    width: 30vw;
    height: 2vh;
    font-weight: 400;
    opacity: 1;
    font-size: 1.04vw;
    color: red;
  }
  .im1{
    position: absolute;
    right: 5%;
    top: 15.7%; 
    width: 28vw;
  }
  .im2{
    position: absolute;
    right: 5%;
    top: 22.61%;
    width: 28vw;
  }
  </style>