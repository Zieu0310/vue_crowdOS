import { apis } from "./LoginRequest";

export const postEvents = (company_id, event_name, description, arithmetic, price, reversePrice) => {
    return apis({
      method: "post",
      url: "/companies/postEvents",
      data: {
        company_id: company_id,
        event_name: event_name,
        description: description,
        arithmetic: arithmetic,
        price: price,
        reversePrice: reversePrice,
      },
    });
  };