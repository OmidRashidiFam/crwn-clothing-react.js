import { createContext, useState } from "react";

export const AuthContext = createContext({
  curentUser: null,
  setCurentUser: () => null,
});

export const AuthContextProvider = ({ children }) => {
  const [curentUser, setCurentUser] = useState(null);
  const value = { curentUser, setCurentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
