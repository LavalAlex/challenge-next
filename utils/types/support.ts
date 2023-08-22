import { SUPPORT_ACTIONS } from "@/actions/support";
import { Reducer } from "react";
import { Action, ActionError, Data, Dispatch } from "./generics";
import { TicketModel } from "./models";

export interface SupportStore {
  tickets: Data<TicketModel[]>;
  totals: { tickets: number };
}

export type SupportAction = Action<SUPPORT_ACTIONS, any>;
export type SupportError = Action<SUPPORT_ACTIONS, ActionError>;
export type SupportDispatch = Dispatch<SupportAction | SupportError>;

export type SupportReducer = Reducer<
  SupportStore,
  SupportAction | SupportError
>;

export interface SupportContext {
  store: SupportStore;
  dispatch: SupportDispatch;
}
