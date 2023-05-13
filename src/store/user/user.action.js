// Import USER_ACTION_TYPE
import { USER_ACTION_TYPE } from "./user.types";

// Import custom hook createAction
import { createAction } from "../../utils/reducer/reducer.utils";

// Create setCurentUser action creator
export const setCurentUser = (user) => {
  // Return an action with SET_CURENT_USER for type and the user for payload
  return createAction(USER_ACTION_TYPE.SET_CURENT_USER, user);
};
