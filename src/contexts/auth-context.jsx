import { createContext, useState, useEffect } from "react";

import { onAuthStateChangeListener } from "../utils/firebase/firebase";

export const AuthContext = createContext({
  curentUser: null,
  setCurentUser: () => null,
});

export const AuthContextProvider = ({ children }) => {
  const [curentUser, setCurentUser] = useState(null);
  const value = { curentUser, setCurentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      console.log("User obj: ", user);
      setCurentUser(user);

      return unsubscribe;
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
