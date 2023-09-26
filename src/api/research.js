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

export const create_team = (members) => {
  return apis({
    method: "post",
    url: "/research/addMembers",
    data: {
      members,
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
      title: title,
      description: description,
      type: type,
      file: file,
    },
  });
}
export const members_get = () => {
  return apis({
    method: "get",
    url: "/research/getTeamMembers",
  });
};
export const successfullyevents_get = (state) => {
  return apis({
    method: "get",
    url: `/research/getSuccessfullyEventInformation/${state}`,
    params: { state: state }
  });
};

export const deleteMember = (id) => {
  return apis({
    method: "post",
    url: `/research/deleteMembers/${id}`,
    params: { id: id }
  });
};