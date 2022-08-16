import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useCartContext } from "../context/context";
import ShoppingCart from "./ShoppingCart";

const Navbar = () => {
  const { state } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);

  const closeCart = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="flex justify-between w-full h-24 bg-red-500 shadow-xl mb-10">
        <div className="w-3/5 mx-auto flex justify-between">
          <div className="flex list-none text-2xl h-full items-center">
            <Link
              to="/"
              className="mx-5 cursor-pointer text-white hover:font-xl"
            >
              Store
            </Link>
          </div>
          <div className="flex list-none text-2xl h-full items-center relative">
            <div>
              <button
                className="bg-yellow-300 border-2  hover:bg-transparent hover:border-yellow-400 p-2 rounded-lg"
                onClick={() => setIsOpen(true)}
              >
                <BsFillCartFill />
                <div className="flex justify-center items-center bg-white rounded-full absolute right-0 top-3 w-8 h-8 text-md translate-x-4 -translate-y-2 text-base">
                  {state.cartItems.reduce(
                    (qty, item) => item.quantity + qty,
                    0
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen ? <ShoppingCart closeCart={closeCart} isOpen={isOpen} /> : ""}
    </>
  );
};

export default Navbar;
