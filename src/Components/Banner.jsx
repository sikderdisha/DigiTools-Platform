import React from 'react'

const Banner = () => {
  return (
    <div className='py-10 md:py-15 bg-white'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-between max-w-[90%] md:max-w-[85%] mx-auto gap-10'>
        
        {/* content Section */}
        <div className='py-10 text-center md:text-left'>
          
          {/* Tooltip*/}
          <div className='flex justify-center md:justify-start gap-1.5 bg-[#E1E7FF] py-2 px-4 max-w-fit rounded-full mx-auto md:mx-0'>
          
            <img className='w-4 h-4 my-auto' src="/Images/Rectangle 4.png" alt="icon" />
            <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm md:text-base font-semibold'>
              New: AI-Powered Tools Available
            </p>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-[64px] lg:text-[72px] font-extrabold mt-4 mb-8 leading-tight'>
            Supercharge Your <br /> Digital Workflow
          </h1>
          
          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            
            {/* Explore Products Button */}
            <button className='btn border-none h-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white py-3 px-8 hover:opacity-90 transition-all'>
              Explore Products
            </button>

            {/*Button */}
            <button className="btn btn-outline border-[#9514FA] h-auto flex items-center justify-center gap-2.5 rounded-full py-3 px-8 bg-white group hover:bg-slate-50 transition-all">
              <img className='w-5 h-5' src="/Images/Play.png" alt="play" />
              <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold'>
                Watch Demo
              </span>
            </button>

          </div>
        </div>

        {/*Image*/}
        <div className='w-full md:w-1/2'>
         
          <img className='w-full max-w-md md:max-w-full mx-auto drop-shadow-xl' src="/Images/banner.png" alt="AI banner" />
        </div>

      </div>
    </div>
  )
}

export default Banner