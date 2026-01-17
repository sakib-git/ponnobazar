import React from 'react';

const loading = () => {
  return (
   <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-orange-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default loading;