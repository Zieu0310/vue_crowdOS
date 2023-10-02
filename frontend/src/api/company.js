import { apis } from "./index";

export const postEvents = (event_name, description, type, price, reversePrice, time) => {
  return apis({
    method: "post",
    url: "/companies/postEvents",
    data: {
      event_name: event_name,
      description: description,
      type: type,
      price: price,
      reversePrice: reversePrice,
      time: time,
    },
  });
};

export const getTeamAchievement = (team_id) => {
  return apis({
    url: `/companies/getTeamAchievements/${team_id}`,
    methods: "GET",
    params: { team_id: team_id },
  });
};

export const getTeamDetalis = (team_id) => {
  return apis({
    url: `/companies/getTeamDetails/${team_id}`,
    methods: "get",
    params: { team_id: team_id },
  });
};

export const events_get = (state,remark,type,time) => {
  return apis({
    method: "get",
    url: "/companies/getEventDetails",
    params: {
      state: state,
      remark: remark,
      type: type,
      time: time,
    },
  });
};

export const myteam_get = () => {
  return apis({
    method: "get",
    url: "/companies/getTeamInformation",
    data: {},
  });
};