// import useReducer, useEffect, createContext from react
import { createContext, useReducer, useEffect } from "react";

// import custom hook :)
import { createAction } from "../utils/reducer/reducer.utils";

// import onAuthStateChangeListener function from firebase
import { onAuthStateChangeListener } from "../utils/firebase/firebase";

// create an AuthUserContext context
export const AuthUserContext = createContext({
  curentUser: null,
  setCurentUser: () => null,
});

// define initial state for the reducer
const INITIAL_STATE = {
  curentUser: null,
};

// define user action type constants
const USER_ACTION_TYPE = {
  SET_CURENT_USER: "SET_CURENT_USER",
};

// userReducer function to determine the type of user action
const userReducer = (state, action) => {
  // destructure type and payload from action
  const { type, payload } = action;

  // Execute switch statement depending on action type
  switch (type) {
    case USER_ACTION_TYPE.SET_CURENT_USER:
      return {
        curentUser: payload,
      };
    default:
      // throw error if the type is unhandled
      throw new Error(`Unhnadled type: ${type}.
      in userReducer
      in user-auth-context.jsx`);
  }
};

// AuthUserContext Provider component
export const AuthUserContextProvider = ({ children }) => {
  // destructure state and dispatch from userReducer
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { curentUser } = state;

  // setCurrentUser function to update user state
  const setCurentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURENT_USER, user));
  };

  // set values to be passed by the context
  const value = { curentUser, setCurentUser };

  // subscribe to user changes using onAuthStateChangeListener hook
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      setCurentUser(user);

      return unsubscribe;
    });
  }, []);

  // return AuthUserContext Provider with the given children
  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  );
};
