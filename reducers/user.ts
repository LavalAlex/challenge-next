import { USER_ACTIONS } from "@/actions/user";
import { UserReducer } from "@/utils/types/user";

const userReducer: UserReducer = (store, action) => {
  if (action.type === USER_ACTIONS.GET_PHOTOS) {
    return {
      ...store,
      photos: action.payload.photos,
    };
  }

  return store;
};

export default userReducer;
