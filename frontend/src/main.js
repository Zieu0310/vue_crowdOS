import { createApp } from "vue";
import "./style.css";
import App from './App.vue';
import router from './router';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import axios from 'axios';
// 创建app
const app = createApp(App);
// 注入路由
app.use(router);
// 挂载实例
app.mount("#app");

app.use(ElementPlus);

// new Vue({
//     render: h => h(App), 
// }).$mount('#app')

