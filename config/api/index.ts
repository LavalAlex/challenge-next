export const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const API_USER_CREATE_TICKET = "/user/ticket";
export const API_USER_UPDATE_TICKET = "/user/ticket";
export const API_USER_GET_TICKETS = "/user/tickets";
export const API_USER_GET_SUPPORTS = "/user/accounts";
export const API_USER_GET_STATISTICS = "/user/statistics";

export const API_USER_GET_ACTION_TICKETS = "/user/action";

export const API_SUPPORT_GET_TICKET = "/support/ticket";
export const API_SUPPORT_UPDATE_TICKET = "/support/ticket";
export const API_SUPPORT_GET_ACCOUNTS = "/support/accounts";
export const API_SUPPORT_REASSIGN = "/support/reassign";
export const API_SUPPORT_STATISTICS = "/support/statistics";

export const API_SUPPORT_GET_ACTION_TICKETS = "/support/action";

// export const API_NASA_GET_PHOTOS = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=mn0cL646A86fzVD3vI3MdMpphxncHeUDjNCzgPja"
export const API_NASA_GET_PHOTOS =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=mn0cL646A86fzVD3vI3MdMpphxncHeUDjNCzgPja";
