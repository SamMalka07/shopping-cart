import React from "react";
import { useCartContext } from "../context/context";
import { data } from "../data/items";
import { twoDecimals } from "../utils/twoDecimals";
import CartItem from "./CartItem";
import { MdClose } from "react-icons/md";

const ShoppingCart = ({ closeCart, isOpen }: any) => {
  const { state } = useCartContext();

  return (
    <div
      className={`fixed top-0 right-0 bg-blue-400 z-50 w-[100vw] sm:w-[70vw] md:w-[60vw] lg:w-[40vw] h-full p-5 overflow-scroll ${
        isOpen ? "open-sidebar translate-x-0" : "translate-x-full"
      } ease-in-out duration-1000`}
    >
      <h1 className="font-bold text-lg underline">Shopping Cart</h1>
      <button
        className="absolute top-0 right-0 p-5"
        onClick={() => closeCart()}
      >
        <p className="flex items-center hover:text-white">
          Close <MdClose className="ml-1 text-xl" />
        </p>
      </button>
      <div>
        {state.cartItems?.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-end font-bold text-xl mt-2">
        {state?.cartItems?.length > 0 ? (
          `Total: $` +
          twoDecimals(
            state.cartItems.reduce((total, cartItem) => {
              const item = data.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )
        ) : (
          <p className="mt-20">Empty Cart</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
