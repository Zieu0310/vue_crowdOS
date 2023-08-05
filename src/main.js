import { createApp } from "vue";
import "./style.css";
import App from './App.vue';
import router from './router/index.js';
//全局引入Ui库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 创建app
const app = createApp(App);
// 注入路由
app.use(router);
//注入组件库
app.use(ElementPlus);
// 挂载实例
app.mount("#app");
