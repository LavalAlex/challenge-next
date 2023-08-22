import { supportReducer } from "@/reducers";
import {
  SupportContext,
  SupportDispatch,
  SupportStore,
} from "@/utils/types/support";
import { createContext, ReactNode, useCallback, useReducer } from "react";

const init: SupportStore = {
  tickets: { data: [], isLoading: false },
  totals: { tickets: 0 },
};

export const ctx = createContext<SupportContext>({
  store: init,
  dispatch: async () => null,
});
interface Props {
  children: ReactNode;
}
function SupportProvider({ children }: Props) {
  const [store, dispatch] = useReducer(supportReducer, init, (store) => store);

  const _dispatch = useCallback<SupportDispatch>(async (e, pre) => {
    if (pre) {
      const promises = pre.map(async (a) => await Promise.resolve(a));
      (await Promise.all(promises)).map(dispatch);
    }

    const _action = await Promise.resolve(e);
    dispatch(_action);
    return _action;
  }, []);

  return (
    <ctx.Provider value={{ store, dispatch: _dispatch }}>
      {children}
    </ctx.Provider>
  );
}

export default SupportProvider;
