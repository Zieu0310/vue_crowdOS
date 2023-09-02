<template>
    <div class="CenterBox">
      <div class="over"></div>
      <div class="add">
        <div class="item" id="i1">公司ID</div>
        <el-input v-model="company_id" disabled type="number" class="im1" />
        <div class="item" id="i2">任务名称</div>
        <el-input v-model="event_name" placeholder="请输入" type="text" class="im2" />
        <div class="item" id="i3">任务描述</div>
        <el-input v-model="description" :rows="6" type="textarea" placeholder="请描述" class="grey_rec" />
        <div class="item" id="i4">算法</div>
        <el-radio-group v-model="arithmetic" size="large" style="position: absolute;right: 25%;top: 58.86%;">
          <el-radio-button label="VCG" />
          <el-radio-button label="IOT&nbsp;J" />
          <el-radio-button label="固定价格交易" />
        </el-radio-group>
        <div class="item" id="i5" v-if="type === 'IOT&nbsp;J'">预算(万)</div>
        <div class="item" id="i6" v-if="type === '固定价格交易'">固定价格(万)</div>
        <el-input-number v-model="price" :min="0" :max="50000" @change="handleChange" class="im5" v-if="arithmetic === 'IOT&nbsp;J'" />
        <el-input-number v-model="reversePrice" :min="0" :max="50000" @change="handleChange" class="im6" v-if="arithmetic === '固定价格交易'" />
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
  
    export default {
      name: 'postEvents',
      data() {
        return {
          company_id: "",
          event_name: '',
          description: '',
          type: '',
          price: null,
          reversePrice: null,
        };
      },
      components: {
        M_HeadBar,
      },
      methods:{
        handlePostEvents(){
          postEvents(this.company_id,this.event_name,this.description,this.type,this.price,this.reversePrice).then((res)=>{
            if(this.event_name !== "" && this.description !== "" && this.type !== ""){
              if(this.type === "IOT&nbsp;J" && this.price == null){
                alert('请正确输入预算！');
              } 
              else if(this.type === "固定价格交易" && this.reversePrice == null){
                alert('请正确输入固定价格！')
              }
              else{
                console.log(res);
                this.$router.push("/c_home/deliversuccess")
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
      top: 15.7%; 
      width: 28vw;
    }
    .im2{
      position: absolute;
      right: 5%;
      top: 22.61%;
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
      top: 65.77%;
    }
    .im6{
      position: absolute;
      right: 35%;
      top: 65.77%;
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
      top: 60%;
    }
    #i5{
      position: absolute;
      top: 66.91%;
    }
    #i6{
      position: absolute;
      top: 66.91%;
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
  </style>