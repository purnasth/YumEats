import React from "react";
import { partners } from "../data/data";

const Categories = () => {
  console.log(partners);
  return (
    <div className="max-w-[1520px] m-auto px-4 py-8">
      <h2 className="font-bold text-2xl sm:text-4xl text-center py-8">
        Our <span className="text-orange-700">Partners</span>
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 py-5 px-2 ">
        {partners.map((partner) => {
          return (
            <div
              key={partner.id}
              className="p-4 flex justify-center items-center hover:scale-105 duration-300 m-auto"
            >
              <div className="object-cover cursor-pointer flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-3/4"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
