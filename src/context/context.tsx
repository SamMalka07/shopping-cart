import { contextTypes } from "../types/types";
import { ReactNode, createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";
import {
  ADDTOCART,
  DECREASEQTY,
  INCREASEQTY,
  REMOVEFROMCART,
  RESETCART,
} from "./actions";

type providerProps = {
  children: ReactNode;
};

const AppContext = createContext({} as contextTypes);

const initialState = {
  cartItems: [],
};

export const AppProvider = ({ children }: providerProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id: number) => {
    dispatch({ type: ADDTOCART, payload: id });
  };
  const removeFromCart = (id: number) => {
    dispatch({ type: REMOVEFROMCART, payload: id });
  };
  const resetCart = (id: number) => {
    dispatch({ type: RESETCART, payload: id });
  };
  const increaseQty = (id: number) => {
    dispatch({ type: INCREASEQTY, payload: id });
  };
  const decreaseQty = (id: number) => {
    dispatch({ type: DECREASEQTY, payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        resetCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useCartContext() {
  return useContext(AppContext);
}

export { AppContext };
