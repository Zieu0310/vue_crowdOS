import { apis } from ".";

export const postEvents = (company_id, event_name, description, arithmetic, price, reversePrice) => {
  return apis({
    method: "post",
    url: "/companies/postEvents",
    data: {
      company_id: company_id,
      event_name: event_name,
      description: description,
      arithmetic: arithmetic,
      price: price,
      reversePrice: reversePrice,
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

export const events_get = () => {
  return apis({
    method: "get",
    url: "/companies/getEventDetails",
    data: {},
  });
};

export const myteam_get = () => {
  return apis({
    method: "get",
    url: "/companies/getTeamInformation",
    data: {},
  });
};