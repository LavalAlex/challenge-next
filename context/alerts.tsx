import { AlertContext, CreateAlert, DeleteAlert } from "@/utils/types/alerts";
import AlertModel from "@/utils/types/models/AlertModel";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

export const ctx = createContext<AlertContext>({
  alerts: [],
  create: () => null,
  deleteAlert: () => null,
});

interface Props {
  children?: ReactNode;
}
function AlertsProvider({ children }: Props) {
  const [_alerts, _setAlerts] = useState<AlertModel[]>([]);

  const _delete = useCallback<DeleteAlert>(
    (id) =>
      _setAlerts((old) =>
        old.filter((a) => {
          return a.$id !== id;
        })
      ),
    []
  );

  const _create = useCallback<CreateAlert>(
    (a, t) => {
      const $id =
        new Date().getTime().toString() + Math.random().toString().slice(2);
      const _alert: AlertModel = {
        $id,
        code: a.code || "",
        type: a.type || "info",
        message: a.message || "",
        timeout: setTimeout(() => _delete($id), t || 2.5 * 1000),
      };

      _setAlerts((old) => [_alert, ...old]);
      return _alert;
    },
    [_delete]
  );

  const value = useMemo<AlertContext>(
    () => ({
      alerts: _alerts,
      create: _create,
      deleteAlert: _delete,
    }),
    [_alerts, _create, _delete]
  );

  return <ctx.Provider value={value}>{children}</ctx.Provider>;
}

export default AlertsProvider;
