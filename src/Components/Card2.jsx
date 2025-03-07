import React from "react";
import image1 from "../assets/image1.avif";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeitem } from "../redux/cartSlice";

const Card2 = ({ name, image, id, price, qty }) => {
  let dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between">
      <div className="w-[60%] h-full  flex gap-5">
        <div className="w-[60%] h-full overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-5">
          <div className="text-lg font-semibold">{name}</div>
          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-500">
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-green-300">
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-500">
              {qty}
            </span>
            <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-green-300">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-end gap-5">
        <span className="text-xl text-green-400 font-semibold">
          Rs {price}/-
        </span>
        <IoTrashBinOutline
          className="w-[30px] h-[30px] text-red-400 cursor-pointer"
          onClick={() => dispatch(removeitem(id))}
        />
      </div>
    </div>
  );
};

export default Card2;
