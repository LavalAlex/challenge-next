import { deleteCookie, setCookie } from "cookies-next";
import { AuthReducer } from "@/utils/types/auth";
import { AUTH_ACTIONS } from "@/actions/auth";
import { AUTH_COOKIE } from "@/config";

const authReducer: AuthReducer = (state, action) => {
  if (action.type === AUTH_ACTIONS.LOGOUT) {
    deleteCookie(AUTH_COOKIE);
    return { data: null, isLoading: false };
  }
  if (action.type === AUTH_ACTIONS.LOGIN) {
    const date = new Date();
    date.setDate(date.getDate() + 360);

    setCookie(AUTH_COOKIE, action.payload, {
      sameSite: true,
      expires: date,
      path: "/",
    });
    return { data: action.payload, isLoading: false };
  }

  if (action.type === AUTH_ACTIONS.FROM_COOKIE) {
    return { data: action.payload, isLoading: false };
  }

  if (action.type === AUTH_ACTIONS.ERROR) {
    return { data: null, isLoading: false };
  }

  if (action.type === AUTH_ACTIONS.LOADING) {
    return { ...state, isLoading: true };
  }

  return state;
};

export default authReducer;
