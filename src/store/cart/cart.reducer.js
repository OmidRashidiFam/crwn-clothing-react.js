import { CART_ACTION_TYPE } from "./cart.types";

const CART_INITIAL_STATE = {
  isVisible: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_IS_VISIBIL:
      return { ...state, isVisible: payload };

    case CART_ACTION_TYPE.SET_CART_ITEM:
      return {
        ...state,
        cartItems: payload,
      };

    default:
      return state;
  }
};
