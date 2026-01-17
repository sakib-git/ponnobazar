'use client';
import { useCart } from '@/components/Usecartcontext';
import React from 'react';

const addtocart = () => {
  const { cart, setCart } = useCart();
  if (cart.length === 0) return <p className="text-center mt-10 font-medium text-4xl">Your cart is empty</p>;
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const total = cart.reduce((acc, item) => acc + item.price, 0);


  return (
    <div className="max-w-7xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart ({cart.length})</h1>

      {cart.map((c) => (
        <div key={c.id} className="flex justify-between items-center border-b py-3">
          <div>
            <p className="font-semibold">{c.name}</p>
            <p className="text-gray-500 text-sm">{c.category}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-semibold">${c.price}</p>
            <button onClick={() => removeFromCart(c.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition">
              Delete
            </button>
          </div>
        </div>
      ))}
      <p className="text-right mt-2 font-semibold text-2xl">total: ${total}</p>
    </div>
  );
};

export default addtocart;
