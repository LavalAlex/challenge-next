import { ctx } from "@/context/support";
import { useContext } from "react";

function useSupport() {
  return useContext(ctx);
}

export default useSupport;
