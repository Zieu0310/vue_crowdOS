import { apis } from "./LoginRequest";

export const post_achievement = (title, description, type, file) => {
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