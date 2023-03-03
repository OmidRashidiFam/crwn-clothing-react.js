import { createContext, useState, useEffect } from "react";

import { onAuthStateChangeListener } from "../utils/firebase/firebase";

export const AuthUserContext = createContext({
  curentUser: null,
  setCurentUser: () => null,
});

export const AuthUserContextProvider = ({ children }) => {
  const [curentUser, setCurentUser] = useState(null);
  const value = { curentUser, setCurentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      console.log("User obj: ", user);
      setCurentUser(user);

      return unsubscribe;
    });
  }, []);

  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  );
};
