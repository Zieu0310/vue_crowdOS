import axios from "../utils/http";

// 设置默认的请求地址
export const apis = axios.create({
  timeout: 20000,
  baseURL: "http://47.113.218.236:6667",
});

// 配置token
apis.interceptors.request.use((config) => {
  if (localStorage.getItem("token") !== "") {
    config.headers["token"] = localStorage.getItem("token");
  } else {
    localStorage.clear("token");
  }
  return config;
});
apis.interceptors.response.use((res) => {
  if (!res.data.success) {
    switch (res.data.errCode) {
      case 5000:
        alert("登陆失败");
        break;
    }
  }
  return res;
});

/**
 * 登录接口
 * @params account 账号
 * @params password 密码
 * @return axios对象
 */
export const login = (data) => {
  return apis({
    method: "post",
    url: "/login",
    data,
  });
};
