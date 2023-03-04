import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isVisible: false,
  cardDropdownItems: [],
  setIsVisible: () => {},
  setDropdownItems: () => {},
});

export const DropdownContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardDropdownItems, setCardDropdownItems] = useState([]);

  const addToCardDropdown = () => {};

  const value = {
    isVisible,
    setIsVisible,
    cardDropdownItems,
    setCardDropdownItems,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
