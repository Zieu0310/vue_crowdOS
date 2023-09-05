import { apis } from ".";

export const allevents_get = () => {
  return apis({
    method: "get",
    url: "/research/getEvent",
  });
};

export const create_team = () => {
  return apis({
    method: "post",
    url: "/research/createTeam",
    data: {
      account: account,
      
    },
  });
}

export const m_information = () => {
  return apis({
    method: "get",
    url: "/research/getInformation",
  });
};

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

export const successfullyevents_get = () => {
  return apis({
    method: "get",
    url: "/research/getSuccessfullyEventInformation",
  });
};