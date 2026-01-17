'use client';
import ProductCard from '@/components/ProductCard';
import React from 'react';

const ProductCardGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Fresh Organic Tomato',
      price: 2.5,
      rating: 4.8,
      category: 'Vegetables',
      stock: 120,
      unit: '1 kg',
      description: 'Freshly harvested organic tomatoes. Rich in antioxidants and perfect for salads, sauces, and daily cooking.',
      img: 'https://source.washu.edu/app/uploads/2015/11/Tomato250.jpg',
    },
    {
      id: 2,
      name: 'Green Crunchy Broccoli',
      price: 3.2,
      rating: 4.7,
      category: 'Vegetables',
      stock: 80,
      unit: '500 g',
      description: 'Nutritious and crunchy broccoli, packed with vitamins and minerals. Ideal for steaming and stir-fry dishes.',
      img: 'https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg',
    },
    {
      id: 3,
      name: 'Sweet Cavendish Mango',
      price: 1.8,
      rating: 4.5,
      category: 'Fruits',
      stock: 200,
      unit: 'each',
      description: 'Juicy and sweet Cavendish mangoes with a rich tropical flavor. Perfect for desserts, juices, and smoothies.',
      img: 'https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt4a0b5963d4770ead/6618894b4243c0c32a5e4949/Mango.jpg?q=70&width=3840&auto=webp',
    },
    {
      id: 4,
      name: 'Red Fuji Apple',
      price: 4.0,
      rating: 4.9,
      category: 'Fruits',
      stock: 150,
      unit: '1 kg',
      description: 'Crisp, sweet, and juicy Fuji apples. A healthy snack choice, rich in fiber and natural sweetness.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KQsnJkHMLJSOyOuJPOApGm6dMh2AfFSRLA&s',
    },
    {
      id: 5,
      name: 'Farm Fresh Eggs (12pk)',
      price: 5.5,
      rating: 4.8,
      category: 'Dairy',
      stock: 60,
      unit: '12 pcs',
      description: 'Farm fresh brown eggs, rich in protein and essential nutrients. Perfect for breakfast and baking.',
      img: 'https://coachellaproduce.com/cdn/shop/files/BrownEggs.webp?v=1732479214',
    },
    {
      id: 6,
      name: 'Whole Milk 1L',
      price: 2.2,
      rating: 4.6,
      category: 'Dairy',
      stock: 90,
      unit: '1 liter',
      description: 'Pure whole milk with a creamy texture and natural taste. Great for tea, coffee, and daily nutrition.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PiVQOH7L6_yzc4--6QOKGsmzyjoeA-RZ_Q&s',
    },
    {
      id: 7,
      name: 'Fresh Salmon Fillet',
      price: 15.0,
      rating: 4.9,
      category: 'Meat & Fish',
      stock: 40,
      unit: '500 g',
      description: 'Premium quality salmon fillet, rich in omega-3 fatty acids. Ideal for grilling, baking, or pan-fry.',
      img: 'https://m.media-amazon.com/images/I/817y+lN3ohL._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 8,
      name: 'Organic Honey 500g',
      price: 8.5,
      rating: 4.7,
      category: 'Pantry',
      stock: 70,
      unit: '500 g',
      description: '100% natural organic honey with no additives. A healthy sweetener for tea, desserts, and immunity boost.',
      img: 'https://bagrrys.com/cdn/shop/files/1_1233d648-585a-40aa-a225-7e0937e768a1.jpg?v=1747813230&width=1500',
    },
    {
      id: 9,
      name: 'Avocado Hass (Each)',
      price: 1.5,
      rating: 4.4,
      category: 'Fruits',
      stock: 110,
      unit: 'each',
      description: 'Creamy Hass avocados, rich in healthy fats and nutrients. Perfect for salads, toast, and guacamole.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHCn8N9V0jCkHoywDcQ_wbvqMq-aFyPip3A&s',
    },
    {
      id: 10,
      name: 'Bell Peppers Mix',
      price: 3.0,
      rating: 4.5,
      category: 'Vegetables',
      stock: 95,
      unit: '500 g',
      description: 'Colorful mix of fresh bell peppers. Crunchy, sweet, and perfect for salads, stir-fries, and cooking.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUQM0VpHfl90zrXGQw6bV2zb3GVslvWPtsw&s',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900"> All Products</h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCardGrid;
