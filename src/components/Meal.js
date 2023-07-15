import React, { useState } from "react";
import { mealData } from "../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShare } from "@fortawesome/free-solid-svg-icons";
import PopUp from "./PopUp";
import AddedCarts from "./AddedCarts";

const Meal = () => {
  const [foods, setFoods] = useState(mealData);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [addedCarts, setAddedCarts] = useState([]);

  const filterCategory = (category) => {
    if (category === "all") {
      setFoods(mealData);
    } else {
      const filteredFoods = mealData.filter(
        (item) => item.category === category
      );
      setFoods(filteredFoods);
    }
    setActiveCategory(category);
  };

  const openPopUp = (item) => {
    setSelectedItem(item);
  };

  const closePopUp = () => {
    setSelectedItem(null);
  };
  const addToCart = (item) => {
    setAddedCarts((prevCarts) => [...prevCarts, item]);
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-2">
      <h2 className="font-bold text-2xl sm:text-4xl text-center py-8">
        Our <span className="text-orange-700">Meal</span>
      </h2>

      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center mb-4">
          <button
            onClick={() => filterCategory("all")}
            className={`m-1 ${
              activeCategory === "all"
                ? "bg-orange-700 border-orange-700 text-white"
                : "bg-white border-orange-700 text-orange-700"
            } hover:bg-white hover:text-orange-700 hover:border-orange-700 ease-out duration-300`}
          >
            All
          </button>
          <button
            onClick={() => filterCategory("pizza")}
            className={`m-1 ${
              activeCategory === "pizza"
                ? "bg-orange-700 border-orange-700 text-white"
                : "bg-white border-orange-700 text-orange-700"
            } hover:bg-white hover:text-orange-700 hover:border-orange-700 ease-out duration-300`}
          >
            Pizza
          </button>
          <button
            onClick={() => filterCategory("chicken")}
            className={`m-1 ${
              activeCategory === "chicken"
                ? "bg-orange-700 border-orange-700 text-white"
                : "bg-white border-orange-700 text-orange-700"
            } hover:bg-white hover:text-orange-700 hover:border-orange-700 ease-out duration-300`}
          >
            Chicken
          </button>
          <button
            onClick={() => filterCategory("salad")}
            className={`m-1 ${
              activeCategory === "salad"
                ? "bg-orange-700 border-orange-700 text-white"
                : "bg-white border-orange-700 text-orange-700"
            } hover:bg-white hover:text-orange-700 hover:border-orange-700 ease-out duration-300`}
          >
            Salad
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300 relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-3xl cursor-pointer"
              onClick={() => openPopUp(item)}
            />
            <div className="flex justify-between py-2 px-4">
              <p className="font-bold drop-shadow-2xl">{item.title}</p>
              <p className="bg-orange-700 h-24 w-24 rounded-full py-6 px-2 -mt-16 text-white border-white border-8 text-center">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <PopUp
        selectedItem={selectedItem}
        onClose={closePopUp}
        onAddToCart={addToCart}
      />
      {addedCarts.length > 0 && <AddedCarts addedCarts={addedCarts} />}
    </div>
  );
};

export default Meal;
