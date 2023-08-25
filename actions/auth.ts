import { Api } from "@/utils/axios";
import { AuthAction } from "@/utils/types/auth";
import { AuthModel } from "@/utils/types/models";

export enum AUTH_ACTIONS {
  LOGOUT = "AUTH_LOGOUT",
  LOGIN = "AUTH_LOGIN",
  SIGNUP = "AUTH_SIGNUP",
  ENABLE = "AUTH_ENABLE",
  RECOVERY = "AUTH_RECOVERY",
  FROM_COOKIE = "AUTH_FROM_COOKIE",
  LOADING = "AUTH_LOADING",
  ERROR = "AUTH_ERROR",
}

export interface LoginProps {
  email: string;
  password: string;
}

export async function login(_cred: LoginProps) {
  try {
    const response = await Api.post("/login", { ..._cred });

    return { type: AUTH_ACTIONS.LOGIN, payload: response.data };
  } catch (e: any) {
    return { type: AUTH_ACTIONS.ERROR, payload: e.response.data };
  }
}

export function logout(): AuthAction {
  return { type: AUTH_ACTIONS.LOGOUT, payload: null };
}

export async function sigup(_cred: LoginProps) {
  try {
    const response = await Api.post("/signup", { ..._cred });

    return { type: AUTH_ACTIONS.SIGNUP, payload: response.data };
  } catch (e: any) {
    return { type: AUTH_ACTIONS.ERROR, payload: e.response.data };
  }
}

export function loadingAuth(): AuthAction {
  return { type: AUTH_ACTIONS.LOADING, payload: null };
}

export function authFromCookie(data: AuthModel | null): AuthAction {
  return { type: AUTH_ACTIONS.FROM_COOKIE, payload: data };
}
