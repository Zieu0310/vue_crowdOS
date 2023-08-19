import { createApp } from "vue";
import "./style.css";
import App from './App.vue';
import router from './router/index.js';
import axios from 'axios';
// 创建app
const app = createApp(App);
// 注入路由
app.use(router);
// 挂载实例
app.mount("#app");
axios.defaults.baseURL = 'http://47.113.218.236:6667/api'

new Vue({
    render: h => h(App), 
}).$mount('#app')