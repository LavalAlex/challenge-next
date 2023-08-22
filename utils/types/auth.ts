import { Reducer } from "react";
import { AUTH_ACTIONS } from "@/actions/auth";
import { Action, ActionError, Data, Dispatch } from "./generics";
import { AuthModel } from "./models";

export type AuthStore = Data<AuthModel>;

export type AuthAction = Action<AUTH_ACTIONS, AuthStore["data"]>;
export type AuthError = Action<AUTH_ACTIONS, ActionError>;
export type AuthDispatch = Dispatch<AuthAction | AuthError>;

export type AuthReducer = Reducer<
  AuthStore,
  { type: AUTH_ACTIONS; payload: any }
>;

export interface AuthContext {
  store: AuthStore;
  dispatch: AuthDispatch;
}
