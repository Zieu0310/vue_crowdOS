<template>
    <div class="CenterBox">
        <div class="whitelarge">
          <el-table :data="teamData" border style="width: 100%">
            <el-table-column prop="team_name" label="团队名" width="400"></el-table-column>
            <el-table-column prop="event_name" label="需求名" width="400"></el-table-column>
            <el-table-column>
              <template #default="scope">
                <el-button size="small" @click="TeamDetailsAppear(scope.row)"
                  >详情</el-button
                >
              </template>
            </el-table-column>
          </el-table>    
        </div>
    </div>
</template>

<script>
  import { myteam_get } from '../../api/company';  
  export default {
    data() {
      return {
        teamData: [],
        teams: [
            {
              team_id: 0,
              team_name: "XXXX",
              event_id: 0
            },
            {
              team_id: 0,
              team_name: null,
              event_id: 0
            },
            {
              team_id: 0,
              team_name: null,
              event_id: 0
            },
            {
              team_id: 0,
              team_name: null,
              event_id: 0
            },
            {
              team_id: 0,
              team_name: null,
              event_id: 0
            },
        ],
      };
    },
    components: {
      
    },
    methods: {
      TeamDetailsAppear(row){
        this.$router.push({
          path: '/c_home/allmember',
          query:{
            team_id: row.team_id,
          }
        })
      },
      TeamDetailsAppear0(){
        this.$router.push({
          path: '/c_home/allmember',
          query:{
            team_id: this.teams[0].team_id,
          }
        })
      },
      TeamDetailsAppear1(){
        this.$router.push({
          path: '/c_home/allmember',
          query:{
            team_id: this.teams[1].team_id,
          }
        })
      },
      TeamDetailsAppear2(){
        this.$router.push({
          path: '/c_home/allmember',
          query:{
            team_id: this.teams[2].team_id,
          }
        })
      },
      TeamDetailsAppear3(){
        this.$router.push({
          path: '/c_home/allmember',
          query:{
            team_id: this.teams[3].team_id,
          }
        })
      },
      TeamDetailsAppear4(){
        this.$router.push({
          path: '/c_home/allmember',
          query:{
            team_id: this.teams[4].team_id,
          }
        })
      },
    },
    mounted(){
      myteam_get().then((res) => {
        console.log(res);
        if(res.request.status == 200){
          this.teamData = res.data.data;
        }
      })
    },
  };
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
    top: 19.995%
  }
  #whs4{
    position: absolute;
    top: 29.9926%;
  }
  #whs5{
    position: absolute;
    top: 39.99%;
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
    top: 35%;
    width: 15vw;
    height: 2.3vh;
    opacity: 1;
    font-size: 1.7vw;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 1.48vh;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
  }
</style>
