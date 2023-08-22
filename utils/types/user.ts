import { USER_ACTIONS } from "@/actions/user";
import { Reducer } from "react";
import { Action, ActionError, Data, Dispatch } from "./generics";
import { PhotoModel } from "./models";

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
