import { apis } from ".";

export const tender = (event_id, bid) => {
    return apis({
      method: "post",
      url: "/tender",
      data: {
        event_id: event_id,
        bid: bid,
      },
    });
  };