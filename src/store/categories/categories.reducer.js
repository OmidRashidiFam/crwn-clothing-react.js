import { CATEGORIES_ACTION_TYPE } from "./categories.types";

// define initial state for the reducer
const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  // destructure type and payload from action
  const { type, payload } = action;

  // Execute switch statement depending on action type
  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
