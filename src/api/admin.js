import { apis } from ".";

export const auditAchievementNo = (achievement_id, remark) => {
  return apis({
    method: "post",
    url: "/adminstrators/auditEvents",
    data: {
      achievement_id: achievement_id,
      remark: remark,
    },
  });
};

export const auditAchievement = (achievement_id, remark) => {
  return apis({
    method: "post",
    url: "/adminstrators/auditEvents",
    data: {
      achievement_id: achievement_id,
      remark: remark,
    },
  });
};

export const auachig = (team_id) => {
  return apis({
    method: "get",
    url: "/adminstrators/getAchievementInformation",
    params: {
      team_id: team_id,
    },
  });
};

export const auevg = () => {
  return apis({
    method: "get",
    url: "/adminstrators/getEventInformation",
  });
};

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
  