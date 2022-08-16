import React from "react";
import { data } from "../data/items";
import { twoDecimals } from "../utils/twoDecimals";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCartContext } from "../context/context";

type cartProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: cartProps) {
  const { state, removeFromCart, increaseQty, decreaseQty } = useCartContext();
  const item = data.find((i) => i.id === id);
  if (item == null) return null;

  const countQuantity = (id: number): any => {
    const item = state.cartItems.find((item) => item.id === id);
    console.log(item?.quantity);
    return item?.quantity;
  };

  return (
    <div className="my-5">
      <div className="flex w-full">
        <img src={item.img} className="w-20 object-cover mr-2" alt="" />
        <div className="flex w-full justify-between">
          <div className="flex items-center">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>
                <span>${twoDecimals(item.price)}</span> x{" "}
                <span className="text-gray-700">{countQuantity(id)}(Qty)</span>
              </p>
              <button
                className="mr-1 mt-1 p-0.5 bg-white rounded-md"
                onClick={() => decreaseQty(id)}
              >
                <AiOutlineMinus />
              </button>
              <button
                className="mr-1 mt-1 p-0.5 bg-white rounded-md"
                onClick={() => increaseQty(id)}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <p>${twoDecimals(item.price * quantity)}</p>
            <button
              className="ml-2 p-1 bg-white rounded-md"
              onClick={() => removeFromCart(id)}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
