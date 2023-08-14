<template>
    <div class="ScoreSelector">
      <div id="score">打分</div>
      <el-select v-model="value" placeholder="请选择分数" class="scoreShow">
        <el-option v-for="item in cities" :key="item.value" :value="item.value">
          <span>{{ item.value }}</span>
          <!-- <span style="float: right; color: #8492a6; font-size: 13px">
            {{ item.value }}
          </span> -->
        </el-option>
      </el-select>
    </div>
</template>
  
  <script>
  export default {
    score() {
      return {
        cities: [
          {
            value: "5",
          },
          {
            value: "4",
          },
          {
            value: "3",
          },
          {
            value: "2",
          },
          {
            value: "1",
          },
          {
            value: "0",
          },
        ],
        value: "",
      };
    },
  };
  </script>
  
  
  <style scoped>
  .ScoreSelector {
    display: inline-block;
    align-items: center;
    box-sizing: border-box;
    height: 9.73vh;
  }
  .scoreShow {
    text-align: center;
    display: inline-block;
  }
  #score {
    padding: 1.5rem 0.55rem 1.5rem 9rem;
    font-size: 2vw;
    font-weight: 500;
    letter-spacing: 3px;
    display: inline-block;
  }
  </style>