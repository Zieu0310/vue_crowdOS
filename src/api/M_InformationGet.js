import { apis } from "./LoginRequest";

export const m_information = () => {
    return apis({
      method: "get",
      url: "/research/getInformation",
    });
  };