import Link from "next/link";


const PopularItems = () => {
  const products = [
    {
      id: 1,
      name: "Organic Red Tomato",
      category: "Vegetables",
      price: 2.50,
      oldPrice: 3.20,
      image: "https://cdn-icons-png.flaticon.com/512/1202/1202125.png",
      rating: 4.8,
      isHot: true,
    },
    {
      id: 2,
      name: "Fresh Cavendish Banana",
      category: "Fruits",
      price: 1.80,
      oldPrice: 2.10,
      image: "https://cdn-icons-png.flaticon.com/512/2909/2909761.png",
      rating: 4.5,
      isHot: false,
    },
    {
      id: 3,
      name: "Farm Fresh Eggs (12pcs)",
      category: "Dairy",
      price: 4.50,
      oldPrice: 5.00,
      image: "https://cdn-icons-png.flaticon.com/512/2713/2713474.png",
      rating: 4.9,
      isHot: true,
    },
    {
      id: 4,
      name: "Whole Grain Bread",
      category: "Bakery",
      price: 3.00,
      oldPrice: 3.50,
      image: "https://cdn-icons-png.flaticon.com/512/2821/2821803.png",
      rating: 4.2,
      isHot: false,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Items
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Check out some of our most loved products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Hot Badge */}
              {product.isHot && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  HOT
                </span>
              )}

              {/* Product Image */}
              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  <span>★</span>
                  <span className="text-gray-600 font-medium">{product.rating}</span>
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    <span className="ml-2 text-sm text-gray-400 line-through">${product.oldPrice}</span>
                  </div>
                  
                  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors shadow-md shadow-orange-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href={'/allproduct'} className="px-8 py-3 border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PopularItems;