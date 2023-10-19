<template>
    <div class="CenterBox">
      <el-select v-model="state" class="m-2" placeholder="投标状态" style="position:absolute;left:9%;top:12%">
        <el-option
          v-for="item in State"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="time" class="m-2" placeholder="时间要求" style="position:absolute;left:34%;top:12%">
        <el-option
          v-for="item in Time"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="type" class="m-2" placeholder="类型" style="position:absolute;left:59%;top:12%">
        <el-option
          v-for="item in Type"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary" style="position:absolute;left:79%;top:12%" @click="GetAllEvents">确认选择</el-button>
      <div class="whitelarge">
        <el-table :data="Events" border style="width: 100%">
          <el-table-column prop="company_name" label="公司名" width="250"></el-table-column>
          <el-table-column prop="event.name" label="需求名" width="250"></el-table-column>
          <el-table-column prop="event.type" label="类型" width="250"></el-table-column>
          <el-table-column prop="event.state" label="状态" width="250"></el-table-column>
          <el-table-column prop="address" label="">
            <template #default="scope">
              <el-button size="small" @click="LookTaken(scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>                
      </div>
    </div>
</template>

<script>
  import { allevents_get } from '../../api/research';
  export default {
    data() {
      return {
        State: [
          {
            value: 0,
            label: "无人投标",
          },
          {
            value: 1,
            label: "有人投标",
          },
          
        ],
        state: 0,
        Time: [
          {
            value: 0,
            label: "不考虑截止日期",
          },
          {
            value: 1,
            label: "早于截止日期",
          },
        ],
        time: 1,
        Type: [
          {
            value: 0,
            label: "有成本预算交易",
          },
          {
            value: 1,
            label: "一般交易",
          },
          {
            value: 2,
            label: "固定价格交易",
          },
        ],
        type: 0,
        Events:[],
      };
    },
    components: {
      
    },
    methods: {
      LookTaken(row){
        this.$router.push({
          path: '/m_home/taskdescriptioni',
          query: {
            name: row.event.name,
            description: row.event.description,
            type: row.event.type,
            company_name: row.company_name,
            budget: row.event.budget,
            reservePrice: row.event.reservePrice,
            endTime: row.end,
            state: row.event.state,
            id: row.event.id,
          }
        })
      },
      GetAllEvents(){
        allevents_get(this.state,this.time,this.type).then((res) => {
          if(this.state === ""){
            alert('请选择投标状态！')
          }else if(this.time === ""){
            alert('请选择时间要求！')
          }else if(this.type === ""){
            alert('请选择投标类型！')
          }else{
            console.log(res);
            if(res.request.status == 200){
              this.Events = res.data.data;
              for(let i = 0; i < this.Events.length; i++){
                if(this.Events[i].event.type == 0){
                  this.Events[i].event.type = "有成本预算交易";
                }else if(this.Events[i].event.type == 1){
                  this.Events[i].event.type = "一般交易";
                }else{
                  this.Events[i].event.type = "固定价格交易";
                }
              }
              for(let i = 0; i < this.Events.length; i++){
                if(this.Events[i].event.state == 0){
                  this.Events[i].event.state = "无人投标";
                }else if(this.Events[i].event.state == 1){
                  this.Events[i].event.state = "有人投标";
                }else{
                  this.Events[i].event.state = "已被成功接取";
                }
              }
            }
          }
        })
      },
      
    },
    mounted(){
      allevents_get(this.state,this.time,this.type).then((res) => {
        console.log(res);
        if(res.request.status == 200){
              this.Events = res.data.data;
              for(let i = 0; i < this.Events.length; i++){
                if(this.Events[i].event.type == 0){
                  this.Events[i].event.type = "有成本预算交易";
                }else if(this.Events[i].event.type == 1){
                  this.Events[i].event.type = "一般交易";
                }else{
                  this.Events[i].event.type = "固定价格交易";
                }
              }
              for(let i = 0; i < this.Events.length; i++){
                if(this.Events[i].event.state == 0){
                  this.Events[i].event.state = "无人投标";
                }else if(this.Events[i].event.state == 1){
                  this.Events[i].event.state = "有人投标";
                }else{
                  this.Events[i].event.state = "已被成功接取";
                }
              }
            }
      })
    }
  };
</script>

<style scoped>
   .CenterBox {
    margin: 0 auto;
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
    align-items: center;
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
  .whs{
    width: 80.36vw;
    height: 8.1vh;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    border: 0.03vw solid rgba(166, 166, 166, 1);
  }
  #whs1{
    position: absolute;
    top: 0%;
  }
  #whs2{
    position: absolute;
    top: 9.99753%;
  }
  #whs3{
    position: absolute;
    top: 19.995%;
    display: none;
  }
  #whs4{
    position: absolute;
    top: 29.9926%;
    display: none;
  }
  #whs5{
    position: absolute;
    top: 39.99%;
    display: none;
  }
  #whs6{
    position: absolute;
    top: 49.98765%;
    display: none;
  }
  .icon{
    position: absolute;
    left: 5.65%;
    top: 26.17%;
    width: 2.8vw;
    height: 4vh;
  }
  .name{
    position: absolute;
    left: 10%;
    top: 25%;
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