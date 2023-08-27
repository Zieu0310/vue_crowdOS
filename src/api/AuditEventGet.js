import { apis } from "./LoginRequest";

export const auevg = () => {
    return apis({
      method: "get",
      url: "/adminstrators/getEventInformation",
    });
  };