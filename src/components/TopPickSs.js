import React from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BsFillCartFill } from "react-icons/bs";

const TopPickSs = () => {
  return (
    <div>
      <h2 className="text-orange-700 font-bold text-2xl text-center pb-4">
        Top Picks
      </h2>
      <div className="flex m-w[1520px] m-auto p-2">
        <Splide options={{ perPage: 4, gap: "0.5rem", drag: "free" }}>
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <p className="px-2 pt-4 font-bold">{item.name}</p>
                    <p className="px-2">{item.price}</p>

                    <button className="absolute border-dotted border-orange-700 bg-orange-700 text-white mx-2 mb-4 py-2 px-4 flex items-center hover:text-orange-700 hover:bg-white ease-out duration-300">
                      <BsFillCartFill size={20} className="mr-1" />
                      Add to Cart
                    </button>
                  </div>
                  <img
                    className="h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default TopPickSs;
