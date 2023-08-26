import axios from "../utils/http";

export const apis = axios.create({
    timeout: 20000,
    baseURL: "http://127.0.0.1:4523/m1/3023705-0-default",
});

export const create_team = (name1,role1,name2,role2,name3,role3,name4,role4,name5,role5,name6,role6) => {
    return apis({
        method: "post",
        url: "/research/createTeam",
        data: {
          member1:{
            name1: name1,
            role1: role1,
          },
          member2:{
            name2: name2,
            role2: role2,
          },
          member3:{
            name3: name3,
            role3: role3,
          },
          member4:{
            name4: name4,
            role4: role4,
          },
          member5:{
            name5: name5,
            role5: role5,
          },
          member6:{
            name6: name6,
            role6: role6,
          },
        },
    });
}