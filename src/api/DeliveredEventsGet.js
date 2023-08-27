import { apis } from "./LoginRequest";

export const events_get = () => {
    return apis({
      method: "get",
      url: "/companies/getEventDetails",
    });
  };