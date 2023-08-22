import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

import { authReducer } from "@/reducers";

import {
  AuthContext,
  AuthDispatch,
  AuthReducer,
  AuthStore,
} from "@/utils/types/auth";
import { getCookie } from "cookies-next";
import { AUTH_COOKIE } from "@/config";
import { authFromCookie } from "@/actions/auth";
import { AuthModel } from "@/utils/types/models";

const storeInit: AuthStore = { data: null, isLoading: true };

export const ctx = createContext<AuthContext>({
  store: storeInit,
  dispatch: async () => null,
});

interface Props {
  children?: ReactNode;
}
function AuthProvider({ children }: Props) {
  const [store, _dispatch] = useReducer<AuthReducer, AuthStore>(
    authReducer,
    storeInit,
    (state) => state
  );

  const dispatch = useCallback<AuthDispatch>(async (e, pre) => {
    if (pre) {
      (await Promise.all(pre.map(async (a) => await Promise.resolve(a)))).map(
        _dispatch
      );
    }

    const _action = await Promise.resolve(e);
    _dispatch(_action);
    return _action;
  }, []);

  useEffect(() => {
    const cookie = getCookie(AUTH_COOKIE);
    const user = cookie ? (JSON.parse(cookie as string) as AuthModel) : null;
    dispatch(authFromCookie(user));
  }, []);

  const value: AuthContext = useMemo(
    () => ({ store, dispatch }),
    [store, dispatch]
  );
  return <ctx.Provider value={value}>{children}</ctx.Provider>;
}

export default AuthProvider;
