import { userReducer } from "@/reducers";
import {
  UserContext,
  UserDispatch,
  UserReducer,
  UserStore,
} from "@/utils/types/user";

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useReducer,
} from "react";

const init: UserStore = {
  photos: [] ,
};
export const ctx = createContext<UserContext>({
  store: init,
  dispatch: async () => null,
});

interface Props {
  children?: ReactNode;
}
function UserProvider({ children }: Props) {
  const [store, _dispatch] = useReducer<UserReducer, UserStore>(
    userReducer,
    init,
    (store) => store
  );

  const dispatch = useCallback<UserDispatch>(async (e, pre) => {
    if (pre) {
      const promises = pre.map(async (a) => await Promise.resolve(a));
      (await Promise.all(promises)).map(_dispatch);
    }

    const _action = await Promise.resolve(e);
    _dispatch(_action);
    return _action;
  }, []);

  const value: UserContext = useMemo(
    () => ({ store, dispatch }),
    [store, dispatch]
  );

  return <ctx.Provider value={value}>{children}</ctx.Provider>;
}

export default UserProvider;
