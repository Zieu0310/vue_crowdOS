import axios from "../utils/http";

// 设置默认的请求地址
export const apis = axios.create({
  timeout: 20000,
  baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const getTeamAchievement = (team_id) => {
    return request({
      url: "/companies/getTeamAchievements",
      methods: "GET",
      params: { team_id: team_id },
    });
  };