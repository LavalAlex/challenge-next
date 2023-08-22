export type AlertTypes = "success" | "error" | "info" | "warning";

interface AlertModel {
  $id: string;
  type: AlertTypes;
  code: string;
  message: string;
  timeout?: NodeJS.Timeout;
}

export default AlertModel;
