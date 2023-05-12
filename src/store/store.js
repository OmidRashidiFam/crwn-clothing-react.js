// import the necessary redux functions
import { compose, createStore, applyMiddleware } from "redux";
// import the root reducer
import { rootReducer } from "./root-reducer";

// import the logger from  redux-logger
const customLogger = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("action type: ", action.type);
  console.log("action payload: ", action.payload);
  console.log(" prev state: ", store.getState());

  next(action);

  console.log("next state: ", store.getState());
};

// define middlewares to be used
const middleWares = [customLogger];

// compose enhancers for store creation
const composedEnhancers = compose(applyMiddleware(...middleWares));

// create store with root reducer, no initial state and composed enhancers
export const store = createStore(rootReducer, undefined, composedEnhancers);
