import { ctx } from "@/context/auth";
import { useContext } from "react";

function useAuth() {
  const { store, dispatch } = useContext(ctx);
  return { store, dispatch };
}

export default useAuth;
