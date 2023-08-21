import axios from "../utils/http";

// 设置默认的请求地址
export const apis = axios.create({
  timeout: 20000,
  baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const deliver = (company_id, event_name, description, price) => {
    return apis({
      method: "post",
      url: "/companies/postEvents",
      data: {
        company_id: company_id,
        event_name: event_name,
        description: description,
        price: price,
      },
    });
  };