import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl sm:text-4xl text-center py-8">
        Cart
      </h2>
      <div className="max-w-[1520px] m-auto px-4 py-2">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="border-none hover:scale-105 duration-300 relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-3xl"
                />
                <div className="flex justify-between py-2 px-4">
                  <p className="font-bold drop-shadow-2xl">{item.title}</p>
                  <p className="bg-orange-700 h-24 w-24 rounded-full py-6 px-2 -mt-16 text-white border-white border-8 text-center">
                    {item.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
