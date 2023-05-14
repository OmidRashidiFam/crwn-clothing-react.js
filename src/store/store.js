// import the necessary redux functions and methods
import { compose, createStore, applyMiddleware } from "redux";
// import the necessary redux-persist functions
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import the root reducer
import { rootReducer } from "./root-reducer";

// create a customLogger
const customLogger = (store) => (next) => (action) => {
  // if no action type is present, return the next action
  if (!action.type) {
    return next(action);
  }
  // log action type, payload and previous state
  console.log("action type: ", action.type);
  console.log("action payload: ", action.payload);
  console.log("prev state: ", store.getState());
  // call the next action
  next(action);
  // log the next state
  console.log("next state: ", store.getState());
};

// create a config object for persist
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// create a persisted reducer using persisitreducer
const persistedreducer = persistReducer(persistConfig, rootReducer);

// define middlewares to be used
const middleWares = [customLogger];

// compose enhancers for store creation
const composedEnhancers = compose(applyMiddleware(...middleWares));

// create store with persistedreducer, no initial state and composed enhancers
export const store = createStore(
  persistedreducer,
  undefined,
  composedEnhancers
);

// create a persistor using persistStore
export const persistor = persistStore(store);
