import { USER_ACTION_TYPE } from "./user.types";

// define initial state for the reducer
const USER_INITIAL_STATE = {
  curentUser: null,
};

// userReducer function to determine the type of user action
export const userReducer = (state = USER_INITIAL_STATE, action) => {
  // destructure type and payload from action
  const { type, payload } = action;

  // Execute switch statement depending on action type
  switch (type) {
    case USER_ACTION_TYPE.SET_CURENT_USER:
      return {
        curentUser: payload,
      };
    default:
      return state;
  }
};
