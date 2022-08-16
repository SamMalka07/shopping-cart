import { actionTypes, stateTypes } from "../types/types";
import { ADDTOCART, DECREASEQTY, INCREASEQTY, REMOVEFROMCART } from "./actions";

export const reducer = (state: stateTypes, action: actionTypes): any => {
  switch (action.type) {
    case ADDTOCART:
      const existItem = state.cartItems?.find(
        (item) => item.id === action.payload
      );
      if (existItem === undefined) {
        const newItem = { id: action.payload, quantity: 1 };
        return {
          ...state,
          cartItems: state.cartItems.concat(newItem),
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.id === action.payload) {
              const newQty = item.quantity + 1;
              console.log(newQty);
              return {
                ...item,
                quantity: newQty,
              };
            } else {
              return item;
            }
          }),
        };
      }

    case INCREASEQTY:
      const newCart = state?.cartItems?.map((item) => {
        if (item.id === action.payload) {
          const newQty = item.quantity + 1;
          return {
            ...item,
            quantity: newQty,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: newCart,
      };

    case DECREASEQTY:
      const updatedCart = state?.cartItems?.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          const newQty = item.quantity - 1;
          return {
            ...item,
            quantity: newQty,
          };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCart,
      };

    case REMOVEFROMCART:
      const filterCart = state.cartItems?.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: filterCart,
      };

    default:
      return state;
  }
};
