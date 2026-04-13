import React from 'react'

const Subscription = () => {
  return (
    <div className='pb-16 md:pb-30 px-4 md:px-0'>
      <div className='max-w-[90%] lg:max-w-[80%] mx-auto'>
        <div className='text-center space-y-4 mb-16'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-[#101727]'>
                Simple, Transparent Pricing
            </h2>
            <p className='text-[16px] leading-5 text-[#627382]'>
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>
        </div>

        {/* card container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch'>
          
          {/* card 1: Starter */}
          <div className='p-8 bg-[#F8F9FB] border border-gray-100 rounded-[32px] shadow-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-[#1A202C]'>Starter</h2>
              <p className='mt-2 text-[#627382] text-[15px]'>Perfect for individuals starting out</p>

              <div className='my-8'>
                <p className='text-[40px] font-black text-[#101727]'>$0 <span className='text-[18px] text-[#627382] font-medium'>/Month</span></p>
              </div>

              <ul className='space-y-4'>
                <li className='flex items-center text-[#475569] text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to 10 free tools
                </li>
                <li className='flex items-center text-[#475569] text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic templates
                </li>
                <li className='flex items-center text-[#475569] text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Community support
                </li>
              </ul>
            </div>

            <button className="w-full py-4 mt-12 text-white font-bold rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity">
              Get Started Free
            </button>
          </div>

          {/* card 2: Pro (Most Popular) */}
          <div className='relative p-8 bg-gradient-to-br from-[#4F39F6] to-[#9514FA] border border-white/20 rounded-[32px] shadow-xl w-full md:scale-105 z-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between'>
            <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] px-4 py-1 rounded-full shadow-md'>
              <p className='text-[#BB4D00] text-[12px] font-bold uppercase tracking-wider'>Most Popular</p>
            </div>

            <div>
              <h2 className='text-2xl font-bold text-white'>Pro</h2>
              <p className='mt-2 text-white/80 text-[15px]'>For teams and growing businesses</p>

              <div className='my-8'>
                <p className='text-[40px] font-black text-white'>$99 <span className='text-[18px] font-medium'>/Month</span></p>
              </div>

              <ul className='space-y-4'>
                <li className='flex items-center text-white text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#FEF3C6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Access to all premium tools
                </li>
                <li className='flex items-center text-white text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#FEF3C6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Unlimited projects & sync
                </li>
                <li className='flex items-center text-white text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#FEF3C6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Priority 24/7 support
                </li>
              </ul>
            </div>

            <button className="w-full py-4 mt-12 bg-white text-[#4F39F6] font-extrabold rounded-2xl hover:bg-gray-50 transition-colors">
              Start Pro Trial
            </button>
          </div>

          {/* card 3: Enterprise */}
          <div className='p-8 bg-[#F8F9FB] border border-gray-100 rounded-[32px] shadow-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer flex flex-col justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-[#1A202C]'>Enterprise</h2>
              <p className='mt-2 text-[#627382] text-[15px]'>Custom solutions for large scale</p>

              <div className='my-8'>
                <p className='text-[40px] font-black text-[#101727]'>$199 <span className='text-[18px] text-[#627382] font-medium'>/Month</span></p>
              </div>

              <ul className='space-y-4'>
                <li className='flex items-center text-[#475569] text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Everything in Pro
                </li>
                <li className='flex items-center text-[#475569] text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Dedicated account manager
                </li>
                <li className='flex items-center text-[#475569] text-[15px]'>
                  <svg className="w-5 h-5 mr-3 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom API access
                </li>
              </ul>
            </div>

            <button className="w-full py-4 mt-12 text-white font-bold rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Subscription