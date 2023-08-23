import { Api } from "@/utils/axios";
import { AuthAction, AuthError } from "@/utils/types/auth";
import { AuthModel } from "@/utils/types/models";

export enum AUTH_ACTIONS {
  LOGOUT = "AUTH_LOGOUT",
  LOGIN = "AUTH_LOGIN",
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

    console.log(response);

    return { type: AUTH_ACTIONS.LOGIN, payload: response.data };
  } catch (e: any) {
    console.debug(e);
    return { type: AUTH_ACTIONS.ERROR, payload: null };
  }
}

export function logout(): AuthAction {
  return { type: AUTH_ACTIONS.LOGOUT, payload: null };
}

// export interface EnableProps {
//   email: string;
//   password: string;
//   code: string;
// }
// export async function enable(_cred: EnableProps) {
//   try {
//     const { data } = await Api<AuthModel>({
//       url: `/auth/enableAccount`,
//       method: "PUT",
//       data: _cred,
//     });
//     return { type: AUTH_ACTIONS.ENABLE, payload: data };
//   } catch (e: any) {
//     return { type: AUTH_ACTIONS.ERROR, payload: null };
//   }
// }

// export interface RecoveryProps {
//   email: string;
// }
// export async function recovery(_cred: RecoveryProps) {
//   try {
//     const { data } = await Api<AuthModel>({
//       url: `/auth/forgotPassword`,
//       method: "PUT",
//       data: _cred,
//     });
//     return { type: AUTH_ACTIONS.RECOVERY, payload: data };
//   } catch (e: any) {
//     return { type: AUTH_ACTIONS.ERROR, payload: null };
//   }
// }

export function loadingAuth(): AuthAction {
  return { type: AUTH_ACTIONS.LOADING, payload: null };
}

export function authFromCookie(data: AuthModel | null): AuthAction {
  return { type: AUTH_ACTIONS.FROM_COOKIE, payload: data };
}
