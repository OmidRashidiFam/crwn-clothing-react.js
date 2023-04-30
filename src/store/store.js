// import the necessary redux functions
import { compose, createStore, applyMiddleware } from "redux";
// import the logger from  redux-logger
import logger from "redux-logger";

// import the root reducer
import { rootReducer } from "./root-reducer";

// define middlewares to be used
const middleWares = [logger];

// compose enhancers for store creation
const composedEnhancers = compose(applyMiddleware(...middleWares));

// create store with root reducer, no initial state and composed enhancers
export const store = createStore(rootReducer, undefined, composedEnhancers);
