import React from "react";
import Item from "../components/Item";
import { data } from "../data/items";

const Store = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center w-4/5 mx-auto">
        {data.map((item) => (
          <div key={item.id} className="single-item">
            <Item {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
