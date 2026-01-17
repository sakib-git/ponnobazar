'use client';

import { useCart } from "./CartProvider";

const ProductDetails = ({ product }) => {
  const { cart , setCart} = useCart()
const handle = (product) => {

  const isExist = cart.some(c => c.id === product.id) 
  if(isExist) return
  setCart([...cart, product])
  // setCount(c)
 
}
  return (
    <div className="mx-2 md:mx-3">
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex gap-9 max-md:flex-col">
          <div className="flex-1">
            <img src={product.img} alt={product.name} className=" w-full rounded" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>

            <p className="text-yellow-600 mb-2">⭐ {product.rating}</p>

            <p className="text-xl font-semibold mb-2">
              Price: ${product.price} / {product.unit}
            </p>

            <p className="text-sm text-gray-500 mb-4">Stock Available: {product.stock}</p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Add to Cart Button */}
            <button onClick={() => handle(product)}  className="bg-orange-500 text-white px-6 font-semibold py-3 rounded-lg hover:bg-orange-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
