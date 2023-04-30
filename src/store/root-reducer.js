// Import combineReducers from redux library
import { combineReducers } from "redux";

// Import Reducers
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

// Export rootReducer which combines all the reducers
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
