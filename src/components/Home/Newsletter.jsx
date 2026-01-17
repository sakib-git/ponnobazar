'use client';
import React from 'react';

const Newsletter = () => {



  return (
      <div className="space-y-3 py-10">
      <h3 className="text-center text-4xl font-bold">Stay Updated</h3>
      <p className="text-center">
        Subscribe to our newsletter to get updates on new features
      </p>
      <div
      
        className="mx-auto flex max-w-[700px] items-center gap-2 max-md:mx-3"
      >
        <input
          type="email"
       
          placeholder="Email"
          className="max-w-[600px] flex-1 rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-[#ff6900] text-white"
        >
          Subscribe
        </button>
      </div>

  
    </div>
  );
};

export default Newsletter;
