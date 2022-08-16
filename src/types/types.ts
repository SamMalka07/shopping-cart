export type CartItem = {
  id: number;
  quantity: number;
};

export type stateTypes = {
  cartItems: CartItem[];
};

export type actionTypes = {
  type: string;
  payload: number;
};

export type contextTypes = {
  state: stateTypes;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  resetCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};
