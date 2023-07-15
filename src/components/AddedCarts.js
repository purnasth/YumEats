import React from "react";

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

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-md">
      {" "}
      {addedCarts.map((cart) => (
        <div
          key={cart.id}
          className="flex items-center justify-between py-1 mb-2 border-b border-gray-600"
        >
          <div className="flex items-center mr-4">
            <img
              src={cart.image}
              alt={cart.title}
              className="w-16 h-16 object-contain mr-2 rounded-md"
            />
            <div>
              <span className="font-semibold">{cart.title}</span>
              <p className="text-green-400">Rs. {cart.price}</p>
              <p className="text-red-500">Quantity: {cart.quantity}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleAddToCart(cart.id)}
              className="text-blue-500 font-semibold border-blue-500 px-4 py-1 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out mr-2"
            >
              Add
            </button>
            <button
              onClick={() => handleRemoveFromCart(cart.id)}
              className="text-red-500 font-semibold border-red-500 px-4 py-1 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {addedCarts.length > 0 && (
        <div className="mt-4 text-right">
          <p className="text-gray-600">
            Total Price: Rs. {calculateTotalPrice()}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddedCarts;
