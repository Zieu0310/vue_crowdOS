import { apis } from "./LoginRequest";

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