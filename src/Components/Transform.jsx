import React from 'react'

const Transform = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30'>
      <div className='max-w-[90%] md:max-w-[80%] mx-auto text-center'>
        {/* content */}
        <div className='space-y-4 mb-10'>
            <h1 className='text-[36px] md:text-[48px] font-extrabold text-white leading-tight'>
              Ready to Transform Your Workflow?
            </h1>
            <p className='text-[16px] md:text-[18px] leading-relaxed text-white/80'>
              Join thousands of professionals who are already using Digitools to work smarter.
              <br className="hidden md:block" /> Start your free trial today.
            </p>
        </div>

        {/* button area */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-8'>
            <button className='w-full sm:w-auto rounded-full py-4 px-10 bg-white border border-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer'>
                <p className='text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                  Explore Products
                </p>
            </button>
            <button className='w-full sm:w-auto bg-transparent border border-white/40 text-white rounded-full py-4 px-10 font-bold hover:bg-white/10 transition-colors cursor-pointer'>
                <p>View Pricing</p>
            </button>
        </div>

        <p className='text-[14px] md:text-[16px] leading-5 text-white/60 font-medium'>
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  )
}

export default Transform