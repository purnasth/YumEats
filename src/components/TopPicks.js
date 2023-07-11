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
      <h2 className="text-orange-700 font-bold text-2xl text-center pb-8">
        Top Picks
      </h2>
      <div className="max-w-[1520px] m-auto p-2 relative">
        <Splide
          options={{
            rewind: true,
            perPage: 4,
            perMove: 1,
            gap: "1rem",
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
              <div className="w-full h-[250px] rounded-2xl bg-center bg-cover duration-500">
                <img
                  src={topPick.image}
                  alt={topPick.name}
                  className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                />

                <div className="absolute bottom-0 left-0 p-2 px-4 text-white flex items-center justify-between w-full">
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold">{topPick.name}</h2>
                    <h3 className="text-lg font-bold">{topPick.price}</h3>
                  </div>

                  <div>
                    <button className="bg-orange-700 p-4 rounded-lg mt-2 ml-2 flex items-center transition duration-300 hover:bg-white hover:text-orange-700 border-none">
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
