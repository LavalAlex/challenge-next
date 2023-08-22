import { ChangeEvent } from "react";

export interface Data<T = null> {
  data: T | null;
  isLoading: boolean;
}

export type Action<T = string, P = null> = { type: T; payload: P };
export type Dispatch<T = any> = (
  action: Promise<T> | T,
  pre?: (Promise<T> | T)[]
) => Promise<T | null>;

export type InputChange = ChangeEvent<HTMLInputElement>;
export type TextareaChange = ChangeEvent<HTMLTextAreaElement>;

export interface ActionError {
  code: string;
  message: string;
}
