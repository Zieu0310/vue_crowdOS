import axios from "../utils/http";
import { request } from "./request";

// 设置默认的请求地址
export const apis = axios.create({
  timeout: 20000,
  baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const tender = (event_id, bid) => {
    return apis({
      method: "post",
      url: "/tender",
      data: {
        event_id: event_id,
        bid: bid,
      },
    });
  };