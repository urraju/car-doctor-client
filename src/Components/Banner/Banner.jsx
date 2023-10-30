import React from 'react'
import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
 
const Banner = () => {
   
    return (
       <div className='max-w-7xl mx-auto'>
         <div className="carousel w-full mt-14">
        <div id="slide1" className="carousel-item h-[250px] md:h-[600px] relative w-full">
          <img src={banner1} className="w-full rounded-xl" />

          <div className="absolute md:flex hidden  items-center left-0 rounded-xl transform h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  w-2/3  gap-6">
           <div className='md:pl-14 text-white w-2/3 font-hebo space-y-7'>
            <h1 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex items-center  gap-5'>
                <button className='bg-[#FF3811]   px-3 py-2 rounded'>Discover More</button>
                <button className='px-3 py-2 rounded border'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform right-8  bottom-6 gap-6">
            <a href="#slide4" className="btn btn-circle bg-[#FF3811]  border-none text-white">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>

        </div> 
        <div id="slide2" className="carousel-item relative h-[250px] md:h-[600px] w-full">
          <img src={banner2} className='w-full rounded-xl' />
          <div className="absolute md:flex hidden items-center left-0 rounded-xl transform h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] rounded-xl  w-2/3  gap-6">
           <div className='md:pl-14 text-white w-2/3 font-hebo space-y-7'>
            <h1 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex items-center gap-5'>
                <button className='bg-[#FF3811]  px-3 py-2 rounded'>Discover More</button>
                <button className='px-3 py-2 rounded border'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform right-8  bottom-6 gap-6">
            <a href="#slide1" className="btn btn-circle bg-[#FF3811]  border-none text-white">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>

        </div> 
        <div id="slide3" className="carousel-item relative h-[250px] md:h-[600px] w-full">
          <img src={banner3} className="w-full rounded-xl" />
          <div className="absolute md:flex hidden items-center left-0 rounded-xl transform h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  w-2/3  gap-6">
           <div className='md:pl-14 text-white w-2/3 font-hebo space-y-7'>
            <h1 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex items-center gap-5'>
                <button className='bg-[#FF3811]   px-3 py-2 rounded'>Discover More</button>
                <button className='px-3 py-2 rounded border'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform right-8  bottom-6 gap-6">
            <a href="#slide2" className="btn btn-circle bg-[#FF3811]  border-none text-white">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>

        </div> 
        <div id="slide4" className="carousel-item relative h-[250px] md:h-[600px] w-full">
          <img src={banner4} className="w-full rounded-xl" />
          <div className="absolute md:flex hidden items-center left-0 rounded-xl transform h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]  w-2/3  gap-6">
           <div className='md:pl-14 text-white w-2/3 font-hebo space-y-7'>
            <h1 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h1>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className='flex items-center gap-5'>
                <button className='bg-[#FF3811]   px-3 py-2 rounded'>Discover More</button>
                <button className='px-3 py-2 rounded border'>Latest Project</button>
            </div>
           </div>
          </div>
          <div className="absolute flex justify-end transform right-8  bottom-6 gap-6">
            <a href="#slide3" className="btn btn-circle bg-[#FF3811]  border-none text-white">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>

        </div>
      </div>
       </div>
    )
}

export default Banner