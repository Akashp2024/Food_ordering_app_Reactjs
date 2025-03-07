import React, { createContext, useState } from "react";
import Food_items from "../Food_items";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  let [cate, setcategory] = useState(Food_items);
  let [input, setinput] = useState("");
  let [showcart, setshowcart] = useState(false);
  let data = {
    input,
    setinput,
    cate,
    setcategory,
    showcart,
    setshowcart,
  };

  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
