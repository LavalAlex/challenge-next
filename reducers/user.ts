import { UserReducer } from "@/utils/types/user";
import { USER_ACTIONS } from "@/actions/user";

const userReducer: UserReducer = (store, action) => {
  if (action.type === USER_ACTIONS.GET_PHOTOS) {
    return {
      ...store,
      photos: action.payload,
    };
  }

  return store;
};

export default userReducer;