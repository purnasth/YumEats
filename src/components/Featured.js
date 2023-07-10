import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const [sliders, setSliders] = useState([
    "https://eatburgerburger.com/wp-content/uploads/2018/02/menu-bg.jpg",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    "https://media.istockphoto.com/id/1408775854/photo/indian-food-momo-with-chicken-and-tomato-sauce-on-dark-blue-table.jpg?s=612x612&w=0&k=20&c=ekB4vv1cTBfk-zyPmVKeLdzYqiO1slMNg0nfXe5Y0xE=",
    "https://img.freepik.com/premium-photo/rotisserie-chicken-served-with-fried-pods-green-peas-fresh-green-onion-parsley-lime-tomato-sauce-mustard-white-plate-rustic-wooden-table-landscape-view_268847-1022.jpg?w=2000",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliders.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
    );
  };
  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full p-4 relative m-auto">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex]})` }}
      ></div>
      <div
        className="absolute top-[50%] left-4 p-4 text-2xl rounded-2xl text-white cursor-pointer"
        style={{ backgroundColor: "#00000099", borderRadius: "0 50% 50% 0" }}
      >
        <BsChevronCompactLeft onClick={prevSlide} />
      </div>
      <div
        className="absolute top-[50%] right-4 p-4 text-2xl rounded-2xl text-white cursor-pointer"
        style={{ backgroundColor: "#00000099", borderRadius: "50% 0 0 50%" }}
      >
        <BsChevronCompactRight onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              index === currentIndex ? "w-8 bg-orange-700" : "bg-gray-500"
            }`}
            onClick={() => moveToNextSlide(index)}
          ></div>
        ))}
        {/* {sliders.map((sliderItems, slideIndex) => (
          <div key={slideIndex} onClick={moveToNextSlide} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Featured;
