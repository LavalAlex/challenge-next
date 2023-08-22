import AlertModel from "./models/AlertModel";

export type CreateAlert = (
  a: Partial<AlertModel>,
  timeout?: number
) => AlertModel | null;
export type DeleteAlert = (id: string) => any;

export interface AlertContext {
  alerts: AlertModel[];
  create: CreateAlert;
  deleteAlert: DeleteAlert;
}
