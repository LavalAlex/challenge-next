import { ctx } from "@/context/user";
import { useContext } from "react";

function useUser() {
  return useContext(ctx);
}

export default useUser;
