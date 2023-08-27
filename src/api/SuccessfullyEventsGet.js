import { apis } from "./LoginRequest";

export const successfullyevents_get = () => {
    return apis({
      method: "get",
      url: "/research/getSuccessfullyEventInformation",
    });
  };