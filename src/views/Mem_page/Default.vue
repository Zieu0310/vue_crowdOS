<template>
    <div class="page">
      <div class="row">
        <div>数据1：</div>
        <div
          class="inner"
          contenteditable
          v-text="valueObj.value1"
          @blur="setValue('valueObj', 'value1', $event.target.innerHTML)"
        ></div>
      </div>
      <div class="row">
        <div>数据2：</div>
        <div
          class="inner"
          contenteditable
          v-text="valueObj.value2"
          @blur="setValue('valueObj', 'value2', $event.target.innerHTML)"
        ></div>
      </div>
    </div>
    
</template>
  <script>
  // 引入qrcode
  export default {
    data() {
      return {
        valueObj: {
          value1: "",
          value2: ""
        }
      };
    },
    methods: {
      setValue(obj, field, val) {
        this[obj][field] = val;
      }
    }
  };
  </script>
  
  <style scoped>
  .page {
    padding: 10px;
    box-sizing: border-box;
  }
  .row {
    display: flex;
    margin-bottom: 10px;
  }
  .inner {
    border: 1px solid #bbb;
    width: 100px;
    padding: 3px;
  }
  </style>
  
  