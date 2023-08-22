import { SUPPORT_ACTIONS } from "@/actions/support";
import { SupportReducer } from "@/utils/types/support";

const supportReducer: SupportReducer = (store, action) => {
  if (action.type === SUPPORT_ACTIONS.GET_TICKETS) {
    return {
      ...store,
      tickets: { isLoading: false, data: action.payload.tickets },
      totals: { tickets: action.payload.length },
    };
  }
  return store;
};

export default supportReducer;
