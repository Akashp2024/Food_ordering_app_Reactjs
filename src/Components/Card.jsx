import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { additem } from "../redux/cartSlice";

const Card = ({ name, image, id, price, type }) => {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-500 ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs {price}</div>
        <div className="flex gap-2 items-center text-green-500 text-lg font-bold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full p-3 bg-green-400 rounded-lg text-lg cursor-pointer hover:bg-green-500 text-white font-bold"
        onClick={() =>
          dispatch(
            additem({ id: id, name: name, price: price, image: image, qty: 1 })
          )
        }
      >
        Add to Dish
      </button>
    </div>
  );
};

export default Card;
