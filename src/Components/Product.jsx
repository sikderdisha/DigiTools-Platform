import React, { useState, useEffect } from 'react';

const Products = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // public ফোল্ডারে থাকা Data.json থেকে ডাটা ফেচ করা
    fetch('/Data.json')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="bg-[#FFFFFF] min-h-screen p-6 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => {
          // চেক করা হচ্ছে আইটেমটি অলরেডি কার্টে আছে কি না
          const isInCart = cartItems.find(item => item.id === product.id);

          return (
            <div 
              key={product.id} 
              className="relative bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm transition-all hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Tag Section (Best Seller, New, etc.) */}
                <div className="absolute top-6 right-6">
                  <span className={`px-4 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest ${
                    product.tagType === 'best-seller' ? 'bg-[#FEF3C6] text-[#BB4D00]' : 
                    product.tagType === 'popular' ? 'bg-[#E1E7FF] text-[#6366F1]' : 
                    'bg-[#DBFCE7] text-[#0A883E]'
                  }`}>
                    {product.tag}
                  </span>
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl border border-gray-50 flex items-center justify-center mb-6 bg-[#FFFFFF] shadow-[0px_2px_10px_rgba(0,0,0,0.02)] overflow-hidden group-hover:scale-110 transition-transform">
                  <img 
                    src={product.icon} 
                    alt={product.name} 
                    className="w-8 h-8 object-contain" 
                  />
                </div>

                {/* Content */}
                <h2 className="text-[22px] font-bold text-[#0F172A] mb-3 leading-tight">
                  {product.name}
                </h2>
                <p className="text-[#64748B] text-[15px] leading-relaxed mb-6 h-12 line-clamp-2">
                  {product.description}
                </p>

                {/* Price Section */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-[32px] font-extrabold text-[#0F172A]">${product.price}</span>
                  <span className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wider">
                    /{product.period === 'monthly' ? 'Mo' : product.period === 'yearly' ? 'Yr' : 'One-Time'}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-10">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-[#475569]">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-4 h-4 flex-shrink-0 text-[#22C55E]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[14px] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => addToCart(product)}
                disabled={isInCart}
                className={`w-full py-4 rounded-2xl text-white font-bold transition-all shadow-md cursor-pointer ${
                  isInCart 
                    ? 'bg-[#0A883E] cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 active:scale-[0.97]'
                }`}
              >
                {isInCart ? 'Added to Cart' : 'Get Started'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;