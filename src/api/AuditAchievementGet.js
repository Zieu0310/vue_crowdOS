import { apis } from "./LoginRequest";

export const auachig = (team_id) => {
    return apis({
      method: "get",
      url: "/adminstrators/getAchievementInformation",
      params: {
        team_id: team_id,
      },
    });
  };