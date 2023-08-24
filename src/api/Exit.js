import axios from "../utils/http";

// 设置默认的请求地址
export const apis = axios.create({
  timeout: 20000,
  baseURL: "http://127.0.0.1:4523/m1/3023705-0-default/exit",
});

export function logout() {
    return apis({
      url: "/exit",
      method: "POST",
    })
      .then((response) => {
        // 这里进行跳转逻辑
        // 例如：跳转到登录页面
        window.location.href = "/login";
        return response;
      })
      .catch((error) => {
        console.error("退出登录失败:", error);
        throw error;
      });
  }