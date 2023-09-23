<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add">
        <div class="item" id="i2">任务名称</div>
        <el-input v-model="event_name" placeholder="请输入" type="text" class="im2" />
        <div class="item" id="i3">任务描述</div>
        <el-input v-model="description" :rows="6" type="textarea" placeholder="请描述" class="grey_rec" />
        <div class="item" id="i4">算法</div>
        <el-radio-group v-model="type" style="position: absolute;right: 25%;top: 53.86%;">
          <el-radio :label="0">IOT&nbsp;J</el-radio>
          <el-radio :label="1">VCG</el-radio>
          <el-radio :label="2">固定价格交易</el-radio>
        </el-radio-group>
        <div class="item" id="i5" v-if="type == 0">预算(万)</div>
        <div class="item" id="i6" v-if="type == 2">固定价格(万)</div>
        <el-input-number v-model="price" :min="0" :max="50000" @change="handleChange" class="im5" v-if="type == 0" />
        <el-input-number v-model="reversePrice" :min="0" :max="50000" @change="handleChange" class="im6" v-if="type == 2" />
        <div class="item" id="i7">有效期限(日)</div>
        <el-input-number v-model="time" :min="1" :max="300" @change="handleChange" class="im7" />
        <div class="yes">
          <div class="yestext" @click="handlePostEvents">上传</div>
        </div>
        <div class="no">
          <router-link to="./c_task"><div class="notext">取消</div></router-link>
        </div>
      </div>
      
    </div>
</template>
  
  <script>
    import M_HeadBar from '../../components/M_common/M_HeadBar.vue';
    import { postEvents } from '../../api/company';
    import { ElMessage } from 'element-plus';
  
    export default {
      name: 'postEvents',
      data() {
        return {
          company_id: "",
          event_name: '',
          description: '',
          type: 1,
          price: 0,
          reversePrice: 0,
          time: 100,
        };
      },
      components: {
        M_HeadBar,
      },
      methods:{
        handlePostEvents(){
          postEvents(this.event_name,this.description,this.type,this.price,this.reversePrice,this.time).then((res)=>{
            if(this.event_name !== "" && this.description !== "" && this.type !== ""){
              if(this.type == 0 && this.price == 0){
                alert('请正确输入预算！');
              } 
              else if(this.type == 2 && this.reversePrice == 0){
                alert('请正确输入固定价格！')
              }
              else{
                console.log(res);
                ElMessage({
                  message: '已发布！等待审核！',
                  type: 'success',
                })
                this.$router.push("/c_home/c_task");
              }          
            }
            else if(this.event_name === ""){
              alert('任务名不能为空！')
            }
            else if(this.description === ""){
              alert('描述不能为空！')
            }
            else if(this.type === ""){
              alert('算法不能为空！')
            }
          })
        }
      },
      mounted() {
        this.company_id = localStorage.getItem("company_id");
      },
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
    .im1{
      position: absolute;
      right: 5%;
      top: 10.7%; 
      width: 28vw;
    }
    .im2{
      position: absolute;
      right: 5%;
      top: 17.61%;
      width: 28vw;
    }
    .im3{
      position: absolute;
      right: 5%;
      top: 58.86%;
      width: 28vw;
    }
    .im5{
      position: absolute;
      right: 35%;
      top: 60.77%;
    }
    .im6{
      position: absolute;
      right: 35%;
      top: 60.77%;
    }
    .im7{
      position: absolute;
      right: 40%;
      top: 69.5%;
    }
    #im3{
      position: absolute;
      right: 5%;
      top: 58.86%;
      width: 28vw;
    }
    .item{
      position: absolute;
      left: 9.73%;
      width: 9vw;
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
    top: 11.69%;
    }
    #i2{
      position: absolute;
      top: 18.6%;
    }
    #i3{
      position: absolute;
      top: 25.51%;
    }
    #i4{
      position: absolute;
      top: 55%;
    }
    #i5{
      position: absolute;
      top: 61.91%;
    }
    #i6{
      position: absolute;
      top: 61.91%;
    }
    #i7{
      position: absolute;
      top: 70%;
    }
    .grey_rec{
      position: absolute;
      left: 9.73%;
      top: 30.66%;
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
  </style>