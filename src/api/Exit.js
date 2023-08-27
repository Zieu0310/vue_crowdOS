import { apis } from "./LoginRequest";

export function exit() {
    return apis({
      url: "/exit",
      method: "post",
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