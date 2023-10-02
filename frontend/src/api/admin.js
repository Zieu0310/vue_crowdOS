import { apis } from "./index";


export const auditAchievement = (id, remark) => {
  return apis({
    method: "post",
    url: `/adminstrators/auditAchievement/${id}`,
    params: {
      id: id,
    },
    data: {
      remark: remark,
    },
  });
};

export const auachig = (remark) => {
  return apis({
    method: "get",
    url: `/adminstrators/getAchievementInformation/${remark}`,
    params: {
      remark: remark,
    },
  });
};

export const auevg = (remark) => {
  return apis({
    method: "get",
    url: `/adminstrators/getEventInformation/${remark}`,
    params: {
      remark: remark,
    }
  });
};

export const auditEvents = (id, remark) => {
  return apis({
    method: "post",
    url: `/adminstrators/auditEvents/${id}`,
    params:{ id: id, },
    data: {
      remark: remark,
    },
  });
};
  