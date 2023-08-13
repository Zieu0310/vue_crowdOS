<template>
    <div class="CenterBox">
        <ScorePicker></ScorePicker>
        <textarea name="message" placeholder="留言" id="" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
  import ScorePicker from '../../components/C_common/ScorePicker.vue';

  export default {
    components: {
        ScorePicker,
    },
    data(){
        return{};
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
</style>
