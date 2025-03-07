import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag2Line } from "react-icons/ri";
import { dataContext } from "../context/UserContext";
import Food_items from "../Food_items";

const Nav = () => {
  let { input, setinput, cate, setcategory, showcart, setshowcart } =
    useContext(dataContext);
  useEffect(() => {
    let newlist = Food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setcategory(newlist);
  }, [input]);

  return (
    <div className="w-full h-[100px] flex justify-between items-center bg-slate-300 px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood className="w-[30px] h-[30px] text-green-500" />
      </div>
      <form
        className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-green-500 w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search Items.."
          className="w-[100%] outline-none text-[15px] md:text-[20px]"
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
      </form>
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
        onClick={() => setshowcart(true)}
      >
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          0
        </span>
        <RiShoppingBag2Line className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
};

export default Nav;
