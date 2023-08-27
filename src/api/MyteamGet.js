import { apis } from "./LoginRequest";

export const myteam_get = () => {
    return apis({
      method: "get",
      url: "/companies/getTeamInformation",
    });
  };