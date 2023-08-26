import { apis } from "./LoginRequest";

export const m_information = (account, id, name) => {
    return apis({
      method: "get",
      url: "/research/getInformation",
      params: {
        account: account,
        id: id,
        name: name,
      },
    });
  };