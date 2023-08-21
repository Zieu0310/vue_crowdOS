import axios from "../utils/http";

export const apis = axios.create({
    timeout: 20000,
    baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const post_achievement = (title, description, type) => {
    return apis({
        method: "post",
        url: "/research/postAchievement",
        data: {
          achievements:{
            title: title,
            description: description,
            type: type,
          }
        },
    });
}