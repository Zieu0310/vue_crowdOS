<template>
  <el-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
  <div>
    <h1>当前时间：{{ currentTime }}</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date().toLocaleString(),
      items: []
    };
  },
  created() {
    // 初次请求
    this.fetchData();

    // 设置整点定时发送请求
    setInterval(() => {
      const now = new Date();
      if (now.getMinutes() === 0 && now.getSeconds() === 0) {
        this.fetchData();
      }
      this.currentTime = now.toLocaleString();
    }, 1000);
  },
  methods: {
    fetchData() {
      // 发送请求的代码
      // 例如使用axios发送请求
      axios.get('/api/items').then(response => {
        this.items = response.data;
      });
    }
  }
};
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
