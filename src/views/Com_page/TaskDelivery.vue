<template>
    <div class="CenterBox">
        <div class="foretext">任务描述</div>
        <input type="text" value="请描述任务概况">
        <div class="foretext">关键词</div>
        <input type="text" value="请输入任务需求团队关键词">
        <input type="submit" value="发布任务" id="deliver">
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
  .foretext{
    padding: 1.5rem 0.55rem 1.5rem 9rem;
    font-size: 2vw;
    font-weight: 500;
    letter-spacing: 3px;
    display: inline-block;
  }
  #deliver{
    position: absolute;
    left: 45%;
    top: 60%;
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
</style>

