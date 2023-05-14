// import the necessary redux functions and methods
import { compose, createStore, applyMiddleware } from "redux";
// import the necessary redux-persist functions
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import redux-logger
import logger from "redux-logger";

// import the root reducer
import { rootReducer } from "./root-reducer";

// create a config object for persist
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

// create a persisted reducer using persisitreducer
const persistedreducer = persistReducer(persistConfig, rootReducer);

// define middlewares to be used
const middleWares = [logger];

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
