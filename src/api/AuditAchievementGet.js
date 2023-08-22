import axios from "../utils/http";

// 设置默认的请求地址
export const apis = axios.create({
  timeout: 20000,
  baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const auachig = (id, title, type, remark, team_id, file) => {
    return apis({
      method: "get",
      url: "/adminstrators/getAchievementInformation",
      params: {
        id: id,
        title: title,
        type: type,
        remark: remark,
        team_id: team_id,
        file: file,
      },
    });
  };