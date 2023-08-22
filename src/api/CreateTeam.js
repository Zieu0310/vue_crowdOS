import axios from "../utils/http";

export const apis = axios.create({
    timeout: 20000,
    baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const create_team = (title, description, type, file) => {
    return apis({
        method: "post",
        url: "/research/createTeam",
        data: {
          achievements:{
            title: title,
            description: description,
            type: type,
            file: file,
          }
        },
    });
}