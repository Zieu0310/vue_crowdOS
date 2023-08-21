import axios from "../utils/http";

// 设置默认的请求地址
export const apis = axios.create({
  timeout: 20000,
  baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const auditEventsNo = (id, remark) => {
    return apis({
      method: "post",
      url: "/adminstrators/auditEvents",
      data: {
        id: id,
        remark: remark,
      },
    });
  };

  export const auditEventsYes = (id, remark) => {
    return apis({
      method: "post",
      url: "/adminstrators/auditEvents",
      data: {
        id: id,
        remark: remark,
      },
    });
  };