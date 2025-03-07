import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Categories from "../Categories";
import Card from "../Components/Card";
import Food_items from "../Food_items";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";

const Home = () => {
  let { cate, setcategory, input, showcart, setshowcart } =
    useContext(dataContext);

  function filterCategory(category) {
    if (category === "all") {
      setcategory(Food_items);
    } else {
      let filteredCategory = Food_items.filter(
        (item) => item.food_category === category
      );
      setcategory(filteredCategory);
    }
  }

  let items = useSelector((state) => state.cart);

  return (
    <div className=" bg-slate-200 w-full min-h-screen">
      <Nav></Nav>
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Categories.map((item) => (
            <div
              className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filterCategory(item.name)}
            >
              {item.image}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap justify-center items-center gap-5 pt-8 px-9 pb-8">
        {cate.map((item) => (
          <Card
            name={item.food_name}
            image={item.food_image}
            id={item.id}
            price={item.price}
            type={item.food_type}
            key={item.food_name}
          />
        ))}
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-400 ${
          showcart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center ">
          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>
          <RxCross1
            className="w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-green-700"
            onClick={() => setshowcart(false)}
          />
        </header>
        <div className="w-full mt-9 flex flex-col gap-6">
          {items.map((item) => (
            <Card2
              name={item.name}
              image={item.image}
              price={item.price}
              key={item.id}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
