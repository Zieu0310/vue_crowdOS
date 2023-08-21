<template>
    <div>
      <img src="../../assets/img/bidsuccess.png" class="success">
      <router-link to="./c_task"><div class="suctext">发布成功&nbsp;点此返回</div></router-link>
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
    .success{
      position: absolute;
      left: 38%;
      top: 30%;
      width: 24vw;
      height: 40vh;
    }
    .suctext{
      position: absolute;
      left: 42.5%;
      top: 75%;
      width: 20vw;
      height: 2vh;
      color: blue;
      font-size: 1.8vw;
    }
  </style>