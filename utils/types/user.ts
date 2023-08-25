import { Action, ActionError, Dispatch } from "./generics";
import { USER_ACTIONS } from "@/actions/user";
import { PhotoModel } from "./models";
import { Reducer } from "react";

export interface UserStore {
  photos: PhotoModel[];
}

export type UserAction = Action<USER_ACTIONS, any>;
export type UserError = Action<USER_ACTIONS, ActionError>;
export type UserDispatch = Dispatch<UserAction | UserError>;

export type UserReducer = Reducer<UserStore, UserAction | UserError>;

export interface UserContext {
  store: UserStore;
  dispatch: UserDispatch;
}
