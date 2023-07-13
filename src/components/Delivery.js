import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
       <h2 className="font-bold text-2xl sm:text-4xl text-center py-4">
        Quick <span className="text-orange-700 ">Delivery</span>
      </h2>
      <div className="max-w-[1520px] mx-auto grid md:grid-cols-2 items-center">
        <img
          className="w-full h-auto mx-auto md:max-w-none"
          src="https://www.softsuave.com/blog/wp-content/uploads/2020/03/Food-Delivery-app-development-softsuave.png"
          alt="Delivery App"
        />
        <div className="flex flex-col justify-center items-center md:align-start p-4">
          <p className="text-[#00df91] font-bold text-2xl text-center md:text-center">
            Get The App
          </p>
          <h3 className=" text-lg md:text-2xl font-bold py-2 text-center md:text-center">
            Quality foods! Unbeatable prices!!
          </h3>
          <p className="text-justify px-0 sm:px-8">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptate quos voluptas
            voluptatibus quas quibusdam, quia, quod voluptate quos voluptas
            voluptatibus quas
          </p>
          <button className="bg-black text-[#00df91] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 transition duration-300 hover:bg-[#00df91] hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
