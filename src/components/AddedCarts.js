import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faMinus,
  faMinusCircle,
  faPlugCirclePlus,
  faPlus,
  faPlusCircle,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const AddedCarts = ({ addedCarts, setAddedCarts }) => {
  const handleRemoveFromCart = (cartId) => {
    setAddedCarts((prevCarts) =>
      prevCarts
        .map((cart) =>
          cart.id === cartId ? { ...cart, quantity: cart.quantity - 1 } : cart
        )
        .filter((cart) => cart.quantity > 0)
    );
  };

  const handleAddToCart = (cartId) => {
    setAddedCarts((prevCarts) =>
      prevCarts.map((cart) =>
        cart.id === cartId ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
    );
  };

  const calculateTotalPrice = () => {
    return addedCarts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateDiscount = () => {
    return addedCarts.reduce(
      (totalDiscount, item) =>
        totalDiscount + (item.discount || 0) * item.quantity,
      0
    );
  };

  const totalPriceWithDiscount = calculateTotalPrice() - calculateDiscount();
  const totalPriceWithoutDiscount = calculateTotalPrice();

  return (
    // <div className="fixed bottom-4 md:right-4 bg-gray-800 text-white p-4 rounded-lg shadow-md mx-auto md:mx-0 sm:m-0">
    <div className="fixed bottom-4 left-1/2 right-0 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-md w-[300px] sm:w-[400px] z-50">
      {/* <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-md w-[300px] sm:w-[400px] z-50"> */}
      {addedCarts.map((cart) => (
        <div
          key={cart.id}
          className="flex flex-col md:flex-row items-center justify-between py-1 mb-2 border-b border-gray-600"
        >
          <div className="flex items-center mr-4">
            <img
              src={cart.image}
              alt={cart.title}
              className="w-16 h-auto object-contain mr-2 rounded-md"
            />
            <div>
              <span className="font-semibold">{cart.title}</span>
              <p className="text-white">Rs. {cart.price}</p>
              <p className="text-red-500">Quantity: {cart.quantity}</p>
              {/* <p className="text-gray-500">Discount: Rs. {cart.discount}</p> */}
            </div>
          </div>
          <div>
            <button
              onClick={() => handleAddToCart(cart.id)}
              className="text-blue-500 font-semibold border-blue-500 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out mr-2"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button
              onClick={() => handleRemoveFromCart(cart.id)}
              className="text-red-500 font-semibold border-red-500 px-4 py-1 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
        </div>
      ))}
      {addedCarts.length > 0 && (
        <div className="mt-4 text-right">
          <p className="text-green-600">Discount: Rs. {calculateDiscount()}</p>
          <p className="text-red-600 text-xs line-through">
            Price: Rs. {totalPriceWithoutDiscount}
          </p>
          <p className="text-gray-600">
            Total Price: Rs. {totalPriceWithDiscount}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddedCarts;
