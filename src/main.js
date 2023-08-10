import { createApp } from "vue";
import "./style.css";
import App from './App.vue';
import router from './router/index.js';
// 创建app
const app = createApp(App);
// 注入路由
app.use(router);
// 挂载实例
app.mount("#app");
