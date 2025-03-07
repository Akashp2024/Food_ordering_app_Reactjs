import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { GiHotMeal } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const Categories = [
  {
    id: 1,
    name: "all",
    image: <TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 2,
    name: "breakfast",
    image: (
      <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 3,
    name: "soups",
    image: (
      <MdOutlineSoupKitchen className="w-[60px] h-[60px] text-green-600" />
    ),
  },
  {
    id: 4,
    name: "pasta",
    image: <CiBowlNoodles className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 5,
    name: "main_course",
    image: <GiHotMeal className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 6,
    name: "pizza",
    image: <GiFullPizza className="w-[60px] h-[60px] text-green-600" />,
  },
  {
    id: 7,
    name: "burger",
    image: <GiHamburger className="w-[60px] h-[60px] text-green-600" />,
  },
];

export default Categories;
