<template>
  <div class="CenterBox">
    <div class="whitecenter">
      <img src="../../assets/img/blue.png" class="blue">
      <div class="title">奖学金申请详情</div>
      <div class="upgrey">
        <div class="word" id="w1">综测总分/排名</div>
        <div class="num" id="n1">86.39（8/120）</div>
        <div class="word" id="w2">学分绩点/排名</div>
        <div class="num" id="n2">4.09（9/120）</div>
        <div class="word" id="w3">德育素质评分</div>
        <div class="num" id="n3">15</div>
        <div class="word" id="w4">体测分数</div>
        <div class="num" id="n4">88</div>
      </div>
      <div class="item" id="i1">奖项名称</div>
      <div class="inblue" id="ib1">精神文明奖</div>
      <div class="item" id="i2">等级</div>
      <div class="inblue" id="ib2">无等级</div>
      <div class="item" id="i3">申请理由</div>
      <div class="grey_rec">
        <div class="innertext">用户分享内容到社交媒体或好友，不应该是一种粗暴的强制行为，我们应该在保证产品本身内容有吸引力的核心前提下，仔细揣摩用户心理，结合产品本身的特色，在不同情境下提供给用户最合适的分享平台及方式，让用户分享成为一种水到渠成的自然行为，甚至在某些时候还能给用户带来一...</div>
      </div>
      <div class="item" id="i4">附件</div>
      <div class="yes">
        <div class="yestext">通过</div>
      </div>
      <div class="no">
        <div class="notext">不通过</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data () {
    return {};
  },
  components: {
      
  },
}

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
  .whitecenter{
      position: absolute;
      left: 28.59375%;
      top: 18.98%;
      width: 42.8125vw;
      height: 81.02vh;
      opacity: 1;
      background: rgba(255, 255, 255, 0.8);
  }

</style>
