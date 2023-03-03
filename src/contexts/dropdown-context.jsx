import { createContext, useState } from "react";

export const DropdownContext = createContext({
  // dropdownItems: null,
  isVisible: false,
  // setDropdownItems: () => null,
  setIsVisible: () => {},
});

export const DropdownContextProvider = ({ children }) => {
  // const [dropdownItems, setDropdownItems] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const value = { isVisible, setIsVisible };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
