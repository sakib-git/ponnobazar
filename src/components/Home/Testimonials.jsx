import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "The vegetables are so fresh! It feels like they were just picked from the farm. Delivery was super fast too.",
      rating: 5
    },
    {
      id: 2,
      name: "Rakib Hossain",
      role: "Home Chef",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "I love the quality of their organic products. The prices are very reasonable compared to the local market.",
      rating: 5
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      role: "Working Mom",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      comment: "This app has made my life so much easier. No more grocery store lines, everything comes straight to my door!",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Testimonials
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Hear from our happy customers
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 bg-orange-500 text-white p-3 rounded-2xl shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.91241 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H3.01697C2.46468 8 2.01697 8.44772 2.01697 9V11C2.01697 11.5523 1.56925 12 1.01697 12H0.0169678V5H10.017V15C10.017 18.3137 7.3307 21 4.01697 21H2.01697Z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 italic leading-relaxed mb-8">
                "{review.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;