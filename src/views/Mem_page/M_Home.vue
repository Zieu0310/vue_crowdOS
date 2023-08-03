<template>
    <div class="container">
        <input type="submit" value="个人信息"  class="btn" />
        <input type="submit" value="我的任务"  class="btn" />
        <input type="submit" value="创建团队"  class="btn" />
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
  .container {
    height: 100vh;
    width: 100vw;
    background-color: rgba(245, 245, 245, 0.8);
    background-image: url(../../assets/img/Web.jpg);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
  }
  .btn{
    width: 8.75rem;
    height: 2.875rem;
    border-radius: 1.4375rem;
    background-color: rgba(0, 43, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 1.15rem;
    border: 0;
    transition: 0.2s;
    cursor: pointer;
  }
  .btn:hover {
    width: 9rem;
    height: 3rem;
    background-color: #4176e9;
  }
  input[type="submit"] {
    margin-top: 4vh;
  }
</style>
