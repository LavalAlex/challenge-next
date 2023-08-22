import { ctx } from "@/context/alerts";
import { useContext } from "react";

function useAlerts() {
  return useContext(ctx);
}

export default useAlerts;
