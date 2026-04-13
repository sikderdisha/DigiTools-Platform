import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleCartUpdate = (event) => {
      setCount(event.detail);
    };
    window.addEventListener('cartUpdate', handleCartUpdate);
    return () => {
      window.removeEventListener('cartUpdate', handleCartUpdate);
    };
  }, []);

  return (
    <div className='shadow-sm shadow-[#00000025] bg-white sticky top-0 z-50'>
      <div className='max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto flex justify-between items-center py-4 lg:py-6'>

        {/* Logo */}
        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
            DigiTools
          </h1>
        </div>

        {/* Nav item hide on small device */}
        <div className='hidden lg:block'>
          <ul className='flex justify-between items-center gap-8 text-[#101727] font-medium'>
            <li><a href="#" className="hover:text-[#4F39F6] transition">Products</a></li>
            <li><a href="#" className="hover:text-[#4F39F6] transition">Features</a></li>
            <li><a href="#" className="hover:text-[#4F39F6] transition">Pricing</a></li>
            <li><a href="#" className="hover:text-[#4F39F6] transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-[#4F39F6] transition">FAQ</a></li>
          </ul>
        </div>

        {/* Right Side */}
        <div className='flex items-center gap-4 lg:gap-6'>
          
          <div className='relative cursor-pointer'>
           
            <img src="/Images/products/shopping-cart.png" alt="Cart" className='w-6 md:w-7' />
            
            <p className='absolute -top-1.5 -right-1.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white flex items-center justify-center min-w-[18px]'>
              <span id='cartCount'>{count}</span>
            </p>
          </div>

          {/* Pc view and hide on small device */}
          <div className='hidden lg:flex items-center gap-4'>
            <a href="#" className="hover:text-[#4F39F6] transition">Login</a>
            <button className='btn min-h-0 h-auto px-6 py-2.5 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-medium border-none hover:opacity-90'>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className='lg:hidden flex flex-col gap-1 cursor-pointer p-1'>
            <span className='w-6 h-[3px] bg-[#9514FA] rounded-full'></span>
            <span className='w-6 h-[3px] bg-[#9514FA] rounded-full'></span>
            <span className='w-6 h-[3px] bg-[#9514FA] rounded-full'></span>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Navbar;