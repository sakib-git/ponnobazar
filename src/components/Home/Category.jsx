import React from 'react';

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Vegetables",
      items: "150+ Items",
      image: "https://cdn-icons-png.flaticon.com/512/2329/2329865.png",
      bgColor: "bg-green-50",
      hoverColor: "group-hover:bg-green-100",
    },
    {
      id: 2,
      name: "Fresh Fruits",
      items: "80+ Items",
      image: "https://cdn-icons-png.flaticon.com/512/3194/3194591.png", 
      bgColor: "bg-red-50",
      hoverColor: "group-hover:bg-red-100",
    },
    {
      id: 3,
      name: "Dairy & Eggs",
      items: "40+ Items",
      image: "https://cdn-icons-png.flaticon.com/512/2674/2674486.png", 
      bgColor: "bg-blue-50",
      hoverColor: "group-hover:bg-blue-100",
    },
    {
      id: 4,
      name: "Beverages",
      items: "60+ Items",
      image: "https://cdn-icons-png.flaticon.com/512/3121/3121784.png", 
      bgColor: "bg-purple-50",
      hoverColor: "group-hover:bg-purple-100",
    },
    {
      id: 5,
      name: "Snacks",
      items: "120+ Items",
      image: "https://cdn-icons-png.flaticon.com/512/2553/2553691.png", 
      bgColor: "bg-yellow-50",
      hoverColor: "group-hover:bg-yellow-100",
    },
    {
      id: 6,
      name: "Meat & Fish",
      items: "30+ Items",
      image: "https://cdn-icons-png.flaticon.com/512/1041/1041328.png", 
      bgColor: "bg-orange-50",
      hoverColor: "group-hover:bg-orange-100",
    },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Shop by Category
            </h2>
            <p className="text-gray-600 mt-2 text-lg">
              Explore our wide range of product categories
            </p>
          </div>
          <button className="mt-4 md:mt-0 text-orange-600 font-semibold hover:underline flex items-center gap-1">
            View All Categories 
            <span>→</span>
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Circle */}
              <div className={`w-32 h-32 md:w-40 md:h-40 ${cat.bgColor} ${cat.hoverColor} rounded-full flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:scale-110 shadow-sm group-hover:shadow-md`}>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-16 h-16 md:w-20 md:h-20 object-contain group-hover:rotate-6 transition-transform"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                {cat.name}
              </h3>
              <p className="text-sm text-gray-500">
                {cat.items}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Category;