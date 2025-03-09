import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Categories from "../Categories";
import Card from "../Components/Card";
import Food_items from "../Food_items";
import { dataContext } from "../context/UserContext";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

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
  let subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  let deliveryfee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryfee + taxes);

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
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              price={item.price}
              type={item.food_type}
              key={item.food_name}
            />
          ))
        ) : (
          <div className="w-full text-center py-10 flex flex-col items-center gap-4">
            <span className="text-4xl font-semibold text-green-600">
              No Match Found
            </span>
          </div>
        )}
      </div>
      <div
        className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-5 transition-all duration-400 overflow-auto ${
          showcart ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center`}
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
        {items.length === 0 ? (
          <div className="w-full h-[80%] flex justify-center items-center">
            <span className="text-3xl font-semibold text-green-400">
              No Items in Cart
            </span>
          </div>
        ) : (
          <>
            <div className="w-full mt-6 flex flex-col gap-4">
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
            <div className="w-full border-t-2 border-gray-400 flex flex-col gap-2 p-8 mt-5 border-b-2">
              <div className="w-full flex justify-between items-center text-2xl">
                <span className="text-gray-600 font-semibold">Subtotal</span>
                <span className="text-green-600 font-semibold">
                  Rs {subtotal}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center text-2xl">
                <span className="text-gray-600 font-semibold">DeliveryFee</span>
                <span className="text-green-600 font-semibold">
                  Rs {deliveryfee}/-
                </span>
              </div>
              <div className="w-full flex justify-between items-center text-2xl">
                <span className="text-gray-600 font-semibold">Taxes</span>
                <span className="text-green-600 font-semibold">
                  Rs {taxes}/-
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col justify-between gap-2">
              <div className="w-full flex justify-between items-center text-3xl p-5">
                <span className="text-gray-600 font-semibold">Total</span>
                <span className="text-green-600 font-semibold">
                  Rs {total}/-
                </span>
              </div>
            </div>
            <button
              className="w-[80%] p-3 bg-green-400 rounded-lg text-3xl cursor-pointer hover:bg-green-500 text-white font-semibold"
              onClick={() => toast("Order Placed", { type: "success" })}
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
