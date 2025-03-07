import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Categories from "../Categories";
import Card from "../Components/Card";
import Food_items from "../Food_items";
import { dataContext } from "../context/UserContext";

const Home = () => {
  let { cate, setcategory, input } = useContext(dataContext);

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
  // const filterCategory = (category) => {
  //   if (category === "all") {
  //     setcategory(Food_items);
  //   } else {
  //     let filteredCategory = Food_items.filter(
  //       (item) => item.food_category === category
  //     );
  //     setcategory(filteredCategory);
  //   }
  //   console.log(category);
  // };
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
    </div>
  );
};

export default Home;
