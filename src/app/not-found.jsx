import Link from 'next/link';
import React from 'react';

const notFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-extrabold text-gray-800">404</h1>

      <p className="mt-4 text-xl text-gray-600">Oops! Page not found</p>

      <Link href="/" className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
        Go back home
      </Link>
    </div>
  );
};

export default notFound;
