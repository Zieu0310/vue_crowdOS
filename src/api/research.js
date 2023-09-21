import { apis } from ".";

export const allevents_get = (state, time, type) => {
  return apis({
    method: "get",
    url: "/research/getEvent",
    params: {
      state: state,
      time: time,
      type: type,
    }
  });
};

export const create_team = (teamName,member) => {
  return apis({
    method: "post",
    url: "/research/createTeam",
    data: {
      teamName: teamName,
      member,
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
export const members_get = () => {
  return apis({
    method: "get",
    url: "/research/getTeamMembers",
  });
};
export const successfullyevents_get = () => {
  return apis({
    method: "get",
    url: "/research/getSuccessfullyEventInformation",
  });
};