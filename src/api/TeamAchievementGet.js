import { apis } from "./LoginRequest";

export const getTeamAchievement = (team_id) => {
    return apis({
      url: "/companies/getTeamAchievements",
      methods: "GET",
      params: { team_id: team_id },
    });
  };