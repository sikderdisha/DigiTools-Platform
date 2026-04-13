import React from 'react'

const Started = () => {
  return (
    <div className='my-30 bg-[#F9FAFC] py-30'>
        <div className='text-center space-y-4 mb-10 px-4'>
            <h2 className='text-3xl md:text-5xl font-extrabold text-[#101727] leading-tight'>
                Get Started in 3 Steps
            </h2>
            <p className='text-[16px] leading-5 text-[#627382]'>
                Start using premium digital tools in minutes, not hours.
            </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[90%] lg:max-w-[80%] mx-auto gap-10 md:gap-12 lg:gap-16'>
            
            {/* Card 1*/}
            <div className='relative p-8 md:p-10 bg-white border border-gray-100 rounded-[32px] shadow-sm text-center w-full mx-auto hover:shadow-md transition-shadow'>
                <div className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold rounded-full'>
                    <p>01</p>
                </div>

                <div className='w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mt-10 mb-6'>
                  
                    <img src="/Images/user.png" alt="User Icon" className="w-12 h-12 object-contain" />
                </div>

                <div>
                    <h4 className='text-2xl font-bold text-[#0F172A]'>
                        Create Account
                    </h4>
                    <p className="text-[16px] text-[#64748B] leading-6 mt-4 mb-6">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>
            </div>

            {/* Card 2*/}
            <div className='relative p-8 md:p-10 bg-white border border-gray-100 rounded-[32px] shadow-sm text-center w-full mx-auto hover:shadow-md transition-shadow'>
                <div className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold rounded-full'>
                    <p>02</p>
                </div>

                <div className='w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mt-10 mb-6'>
                    <img src="/Images/package.png" alt="Package Icon" className="w-12 h-12 object-contain" />
                </div>

                <div>
                    <h4 className='text-2xl font-bold text-[#0F172A]'>
                        Choose Products
                    </h4>
                    <p className="text-[16px] text-[#64748B] leading-6 mt-4 mb-6">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>
            </div>

            {/* Card 3*/}
            <div className='relative p-8 md:p-10 bg-white border border-gray-100 rounded-[32px] shadow-sm text-center w-full mx-auto hover:shadow-md transition-shadow'>
                <div className='absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold rounded-full'>
                    <p>03</p>
                </div>

                <div className='w-24 h-24 bg-[#F5F3FF] rounded-full flex items-center justify-center mx-auto mt-10 mb-6'>
                    <img src="/Images/rocket.png" alt="Rocket Icon" className="w-12 h-12 object-contain" />
                </div>

                <div>
                    <h4 className='text-2xl font-bold text-[#0F172A]'>
                        Start Creating
                    </h4>
                    <p className="text-[16px] text-[#64748B] leading-6 mt-4 mb-6">
                        Download and start using your premium tools immediately.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Started