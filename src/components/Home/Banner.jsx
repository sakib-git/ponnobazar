import React from 'react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-full">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            Fresh Groceries <br /> Delivered to Your Door
          </h1>

          <p className="mt-4 text-lg text-gray-800 font-medium max-w-lg mx-auto md:mx-0">Buy fresh vegetables, fruits, and daily needs at the best price, delivered straight to your home.</p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">Shop Now</button>

            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-md border border-gray-200">Learn More</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white opacity-20 blur-2xl rounded-full -z-10"></div>

          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fresh Grocery Basket" className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl  object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
