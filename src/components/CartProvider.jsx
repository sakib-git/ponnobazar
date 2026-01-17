'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);
    useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return <CartContext.Provider value={{ cart, setCart,  }}>{children}</CartContext.Provider>;
};
export const useCart = () => useContext(CartContext);
export default CartProvider;
