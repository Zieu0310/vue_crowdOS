<template>
    <div class="CenterBox">
      <div>
        <div class="above">团队详情</div>
        <div class="whitecenter">
          <router-link to="./team"><div class="grey">返回</div></router-link>
          <img src="../../assets/img/group.png" class="group">
          <div class="groupname">XX教授团队</div>
          <div class="groupid">400826975</div>
          <img src="../../assets/img/blue.png" class="tblue">
          <div class="textBlue" id="tb1">团队成员</div>
          <div class="whs" id="whs1">
            <img src="../../assets/img/icon.png" class="icon">
            <div class="mem_name">XX教授</div>
          </div>
          <div class="whs" id="whs2">
            <img src="../../assets/img/icon.png" class="icon">
            <div class="mem_name">阿sir</div>
          </div>
          <div class="whs" id="whs3">
            <img src="../../assets/img/icon.png" class="icon">
            <div class="mem_name">刘老六</div>
          </div>
          <div class="whs" id="whs4">
            <img src="../../assets/img/icon.png" class="icon">
            <div class="mem_name">哥哥</div>
          </div>
          <div class="whs" id="whs5">
            <img src="../../assets/img/icon.png" class="icon">
            <div class="mem_name">胖熊</div>
          </div>
          <div class="whs" id="whs6">
            <img src="../../assets/img/icon.png" class="icon">
            <div class="mem_name">沙雕</div>
          </div>
          <router-link to="./chat">
            <div class="look" id="chat">
              <div class="tw">前往聊天</div>
            </div>
          </router-link>          
          <router-link to="./achievements">
            <div class="look" id="achi">
              <div class="tw">查看成果</div>
            </div>
          </router-link>           
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    components: {
    
    },
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
}
.above{
  position: absolute;
  left: 29.95%;
  top: 13.06%;
  width: 20.9375vw;
  height: 2.96vh;
  opacity: 1;
  font-size: 1.25vw;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 2.93vh;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.whitecenter{
  position: absolute;
  left: 28.59375%;
  top: 18.98%;
  width: 42.8125vw;
  height: 81.02vh;
  opacity: 1;
  background: rgba(255, 255, 255, 0.8);
}
.grey{
  position: absolute;
  left: 6.81%;
  top: 3.086%;
  width: 3.75vw;
  height: 2.22vh;
  opacity: 1;
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 2.20vh;
  color: rgba(166, 166, 166, 1);
  text-align: left;
  vertical-align: top;
}
.group{
  position: absolute;
  left: 5%;
  top: 8%;
  width: 6vw;
  height: 10vh;
}
.groupname{
  position: absolute;
  left: 20%;
  top: 8%;
  width: 20vw;
  height: 1.6vh;
  font-size: 2.5vw;
  color: black;
}
.groupid{
  position: absolute;
  left: 20%;
  top: 15%;
  width: 15vw;
  height: 1.2vh;
  font-size: 1.5vw;
  color: darkgray;
}
.tblue{
  position: absolute;
  left: 4.87%;
  top: 25%;
  width: 0.21vw;
  height: 1.76vh;
}
.textBlue{
  position: absolute;
  left: 6.45%;
  top: 24.5%;
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
.whs{
  width: 42.8125vw;
  left: 0%;
  height: 8.1vh;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
  border: 0.03vw solid rgba(166, 166, 166, 1);
}
#whs1{
  position: absolute;  
  top: 28.5%;
}
#whs2{
  position: absolute;
  top: 38.49753%;
}
#whs3{
  position: absolute;
  top: 48.495%;
}
#whs4{
  position: absolute;
  top: 58.4926%;
}
#whs5{
  position: absolute;
  top: 68.49%;
}
#whs6{
  position: absolute;
  top: 78.48765%;
}
.icon{
  position: absolute;
  left: 3%;
  top: 28%;
}
.mem_name{
  position: absolute;
  left: 12%;
  top: 30%;
  width: 15vw;
  height: 1.5vh;
  font-size: 1.5vw;
  color: black;
}
.title{
  position: absolute;
  left: 6.20%;
  top: 8.34%;
  width: 10.42vw;
  height: 2.5vh;
  opacity: 1;
  font-size: 1.04vw;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 2.44vh;
  color: rgba(0, 43, 255, 1);
  text-align: left;
  vertical-align: top;
}
.item{
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
top: 27.89%;
}
#i2{
position: absolute;
top: 34.8%;
}
#i3{
position: absolute;
top: 41.71%;
}
#i4{
position: absolute;
top: 70.06%;
}

.look{
  position: absolute;  
  top: 90.97%;
  width: 7.29vw;
  height: 4.26vh;
  opacity: 1;
  border-radius: 1.20vw;
  background: rgba(0, 43, 255, 1);
}
#chat{
  position: absolute;
  left: 27.70%;
}
#achi{
  position: absolute;
  left: 57.30%;
}
.tw{
  position: absolute;
  left: 20%;
  top: 21.74%;
  width: 4.16vw;
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
.upgrey{
position: absolute;
left: 8.39%;
top: 15.31%;
width: 34.64vw;
height: 7.69vh;
opacity: 1;
border-radius: 0.3125vw;
background: rgba(245, 245, 245, 1);
}
.word{
width: 5.7vw;
height: 2.22vh;
opacity: 1;
font-size: 0.83vw;
font-weight: 400;
letter-spacing: 0px;
line-height: 2.15vh;
color: rgba(97, 97, 97, 1);
text-align: left;
vertical-align: top;
}
#w1{
position: absolute;
left: 7.07%;
top: 18.07%;
}
#w2{
position: absolute;
left: 55.04%;
top: 18.07%;
}
#w3{
position: absolute;
left: 7.07%;
top: 53.01%;
}
#w4{
position: absolute;
left: 55.04%;
top: 53.01%;
}
.num{
width: 6.5vw;
height: 2.04vh;
opacity: 1;
font-size: 0.83vw;
font-weight: 500;
letter-spacing: 0px;
line-height: 1.95vh;
color: rgba(97, 97, 97, 1);
text-align: right;
vertical-align: top;
}
#n1{
position: absolute;
left: 24.36%;
top: 19.28%;
}  
#n2{
position: absolute;
left: 72.33%;
top: 19.28%;
}
#n3{
position: absolute;
left: 23.31%;
top: 54.22%;
}
#n4{
position: absolute;
left: 66.47%;
top: 54.22%;
}
.inblue{
position: absolute;
right: 12.29%;
height: 2.5vh;
opacity: 1;
font-size: 1.04vw;
font-weight: 500;
letter-spacing: 0px;
line-height: 2.44vh;
color: rgba(0, 43, 255, 1);
text-align: right;
vertical-align: top;
}
#ib1{
position: absolute;
top: 28%;
width: 5.21vw;
}
#ib2{
position: absolute;
top: 34.91%;
width: 3.125vw;
}
</style>