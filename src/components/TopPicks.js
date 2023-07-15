import React, { useState } from "react";
import { topPicks } from "../data/data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { BsFillCartFill } from "react-icons/bs";

const TopPicks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToNextSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl sm:text-4xl  text-center py-4">
        Top <span className="text-orange-700">Picks</span>
      </h2>
      <div className="max-w-[1520px] m-auto p-2 relative">
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            perMove: 1,
            gap: "1rem",
            drag: "free",
            autoplay: true,
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
            },
          }}
        >
          {topPicks.map((topPick, index) => (
            <SplideSlide key={topPick.id}>
              <div className="w-full h-[200px] rounded-3xl hover:scale-105 ease-out duration-500">
                <img
                  src={topPick.image}
                  alt={topPick.name}
                  className="w-full h-full rounded-3xl bg-center object-cover cursor-pointer"
                />

                <div className="absolute bottom-0 left-0 p-2 px-4 text-white flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{topPick.name}</p>
                    <p className="text-lg">Rs. {topPick.price}</p>
                  </div>

                  <div>
                    <button className="bg-orange-700 px-4 py-3 rounded-lg mt-2 ml-2 flex items-center transition duration-300 hover:bg-white hover:text-orange-700 border-none">
                      <BsFillCartFill size={20} className="mr-1" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
