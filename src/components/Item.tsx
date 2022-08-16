import React from "react";
import { useCartContext } from "../context/context";

type ItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

const Item = ({ id, name, price, img }: ItemProps) => {
  const { addToCart } = useCartContext();
  return (
    <div className="flex justify-center m-3 p-5 shadow-2xl rounded-lg">
      <div className="w-full">
        <div className="flex justify-center">
          <img src={img} className="h-48 object-cover" alt="" />
        </div>
        <h1 className="font-semibold mt-2">{name}</h1>
        <div className="flex justify-between ">
          <h2>${price}</h2>
          <button
            className="border-2 border-red-700 hover:bg-red-700 hover:text-white rounded-lg px-2"
            onClick={() => addToCart(id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
