import Link from 'next/link';
import React from 'react';

const ProductCard = ({product}) => {
  const {img, name, category,rating, price} = product
  return (
   <div 
              // key={product.id} 
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-orange-200 transition-all duration-300 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative h-50 flex items-center justify-center  overflow-hidden">
                <img 
                  src={img} 
                  alt={name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
                  {category}
                </span>
                <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-1">
                  {name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400 text-sm">
                    {"★".repeat(Math.floor(rating))}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">({rating})</span>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-gray-900">${price.toFixed(2)}</span>
                    
                  </div>

                  {/* View Details Button */}
                  <Link href={`/allproduct/${product.id}`} className="w-full py-3 px-4 bg-gray-50 text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 flex items-center justify-center gap-2">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
  );
};

export default ProductCard;