import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#101727] font-sans'>
      {/* Upper Section */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between gap-10 max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto pt-16 md:pt-24 pb-12 md:pb-16'>
        
        {/* Logo and Description */}
        <div className='space-y-4 col-span-2 md:col-span-3 lg:col-span-1'>
          <h1 className='text-4xl font-extrabold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent inline-block'>
            DigiTools
          </h1>
          <p className='text-[16px] leading-relaxed text-white/70 max-w-sm'>
            Unlock your creative potential with our premium digital tools. Built for creators, developers, and businesses to work smarter and faster.
          </p>
        </div>

        {/*Product */}
        <div className='space-y-4 text-white/70 flex flex-col'>
          <h6 className="text-[18px] font-bold text-white">Product</h6>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Features</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Pricing</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Templates</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Integrations</a>
        </div>

        {/* Company*/}
        <div className='space-y-4 text-white/70 flex flex-col'>
          <h6 className="text-[18px] font-bold text-white">Company</h6>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">About Us</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Blog</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Careers</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Press</a>
        </div>

        {/* Links */}
        <div className='space-y-4 text-white/70 flex flex-col'>
          <h6 className="text-[18px] font-bold text-white">Resources</h6>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Documentation</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Help Center</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Community</a>
          <a href="#" className="hover:text-[#9514FA] transition-colors cursor-pointer">Contact</a>
        </div>

        {/* Social Section */}
        <div className='space-y-4 col-span-2 md:col-span-3 lg:col-span-1'>
          <h6 className="text-[18px] font-bold text-white">Follow Us</h6>
          <div className="flex gap-4">
            {/* Instagram */}
            <a className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#E4405F]">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Facebook */}
            <a className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#1877F2]">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
            {/*Twitter */}
            <a className="bg-white/10 p-3 rounded-full hover:bg-white hover:scale-110 transition-all group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-black">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className='bg-white/10 h-px max-w-[90%] md:max-w-[80%] mx-auto'></div>

      {/* Bottom*/}
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 max-w-[90%] md:max-w-[80%] mx-auto mt-8 pb-10 text-center md:text-left'>
        <p className='text-sm text-white/50'>© 2026 DigiTools. All rights reserved.</p>
        <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
          <a href="#" className='text-sm text-white/50 hover:text-white transition-colors'>Privacy Policy</a>
          <a href="#" className='text-sm text-white/50 hover:text-white transition-colors'>Terms of Service</a>
          <a href="#" className='text-sm text-white/50 hover:text-white transition-colors'>Cookies Settings</a>
        </div>
      </div>
    </div>
  )
}

export default Footer