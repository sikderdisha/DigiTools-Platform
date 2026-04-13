import React from 'react'

const Statistics = () => {
  return (
    <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl max-w-[90%] md:max-w-[80%] mx-auto overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-around items-center py-12 md:py-16 gap-10 md:gap-0 px-6'>
        
        {/* Active Users */}
        <div className='text-center'>
            <h1 className='text-[44px] md:text-[64px] font-black text-white leading-none mb-2'>50K+</h1>
            <p className='text-[18px] md:text-[22px] font-medium text-white/80'>Active Users</p>
        </div>

       
        <div className='h-px w-32 md:h-24 md:w-px bg-white/20'></div>

        {/* Premium Tools */}
        <div className='text-center'>
            <h1 className='text-[44px] md:text-[64px] font-black text-white leading-none mb-2'>
                200+
            </h1>
            <p className='text-[18px] md:text-[22px] font-medium text-white/80'>Premium Tools</p>
        </div>

        {/* Separator Line */}
        <div className='h-px w-32 md:h-24 md:w-px bg-white/20'></div>

        {/* Rating */}
        <div className='text-center'>
            <h1 className='text-[44px] md:text-[64px] font-black text-white leading-none mb-2'>4.9/5</h1>
            <p className='text-[18px] md:text-[22px] font-medium text-white/80'>User Rating</p>
        </div>

      </div>
    </div>
  )
}

export default Statistics