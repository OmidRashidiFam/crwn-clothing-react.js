// create a customLogger
export const customLogger = (store) => (next) => (action) => {
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
