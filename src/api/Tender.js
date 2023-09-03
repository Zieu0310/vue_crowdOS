import { apis } from ".";

export const tender = (event_id, bid) => {
    return apis({
      method: "post",
      url: `/tender/${event_id}`,
      params: { event_id: event_id },
      data: {
        bid: bid,
      },
    });
  };