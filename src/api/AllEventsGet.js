import { apis } from "./LoginRequest";

export const allevents_get = () => {
    return apis({
      method: "get",
      url: "/research/getEvent",
    });
  };