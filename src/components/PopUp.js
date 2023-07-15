import React from "react";
import { faClose, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFillCartFill } from "react-icons/bs";

const PopUp = ({ selectedItem, onClose, onAddToCart }) => {
  if (!selectedItem) {
    return null;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
      );
    }
    return stars;
  };

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75 z-50 p-8"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg p-4 relative">
        <h3 className="text-lg font-bold mb-4">{selectedItem.title}</h3>
        <img
          src={selectedItem.image}
          alt={selectedItem.title}
          className="w-full h-auto object-cover rounded-lg mb-4 max-w-xl m-auto"
        />
        <p className="text-sm mb-2">Price: Rs. {selectedItem.price}</p>
        <p className="text-sm mb-2">Description: {selectedItem.description}</p>
        <p className="text-sm mb-2">
          Discount:{" "}
          <span className="text-green-500 font-bold"> Rs. {selectedItem.discount}</span>
        </p>
        <div className="flex mb-4">
          <p className="text-sm mr-2">Rating:</p>
          {renderStars(selectedItem.rating)}
        </div>
        <button
          className="text-orange-700 p-4 absolute top-0 right-0 hover:text-orange-600 focus:outline-none border-none text-2xl"
          onClick={onClose}
        >
          <FontAwesomeIcon size={20} icon={faClose} />
        </button>
        <button
          className="bg-orange-700 text-white px-4 py-3 rounded-lg mt-2 ml-2 flex items-center transition duration-300 hover:bg-white hover:text-orange-700 border-orange-700"
          onClick={() => onAddToCart(selectedItem)}
        >
          <BsFillCartFill size={20} className="mr-1" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PopUp;
