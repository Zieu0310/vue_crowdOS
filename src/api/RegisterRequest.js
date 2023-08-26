import { apis } from "./LoginRequest";

export const register = (account, password, role, name, e_mail) => {
    return apis({
      method: "post",
      url: "/register",
      data: {
        account: account,
        password: password,
        role: role,
        name: name,
        e_mail: e_mail,
      },
    });
  };