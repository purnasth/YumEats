import React from "react";

const AddedCarts = ({ addedCarts, setAddedCarts }) => {
  const handleRemoveFromCart = (cartId) => {
    setAddedCarts((prevCarts) =>
      prevCarts.filter((cart) => cart.id !== cartId)
    );
  };

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg">
      {addedCarts.map((cart) => (
        <div
          key={cart.id}
          className="flex items-center justify-between py-1 mb-2 border-b border-gray-600"
        >
          <span>{cart.title}</span>
          <button
            onClick={() => handleRemoveFromCart(cart.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default AddedCarts;
