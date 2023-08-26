import { apis } from "./LoginRequest";

export const auditEvents = (id, remark) => {
    return apis({
      method: "post",
      url: "/adminstrators/auditEvents",
      data: {
        id: id,
        remark: remark,
      },
    });
  };
