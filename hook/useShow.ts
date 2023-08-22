import { useCallback, useState } from "react";

interface Props {
  init?: boolean;
}
function useShow({ init }: Props) {
  const [_state, _setState] = useState<boolean>(!!init);

  const toggle = useCallback(() => _setState((old) => !old), []);
  const show = useCallback(() => _setState(true), []);
  const hide = useCallback(() => _setState(false), []);

  return {
    state: _state,
    toggle,
    show,
    hide,
  };
}

export default useShow;
