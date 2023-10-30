
import React from 'react'
import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
import { BsFacebook , BsTwitter, BsLinkedin, BsInstagram, BsGoogle } from "react-icons/bs";
const Team = () => {
    return (
        <div className='mt-24 max-w-7xl mx-auto'>
            <div className='text-center font-hebo space-y-5'>
                <h1 className='text-[#FF3811] font-semibold text-lg'>Team</h1>
                <h2 className='text-5xl font-bold'>Meet Our Team</h2>
                <p className='text-gray-500 capitalize leading-8'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

           <div className='mt-20  gap-6 grid grid-cols-1 md:grid-cols-3'>

           <div className=' border text-center rounded-t-lg '>
                <img className='h-64 rounded-lg mx-auto w-full' src={team1} alt="" />
                <h1 className='text-xl  mt-4 font-bold'>Car ENgine Plug</h1>
                <p className='text-lg font-semibold text-gray-500 mb-3'>Engine Expert</p>
                <div className='flex items-center justify-center gap-2 mt-4 mb-3'>
                    <BsFacebook className='h-8 w-8 p-2 bg-gray-200 text-blue-700 rounded-full'/>
                    <BsLinkedin  className='h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full'/>
                    <BsTwitter  className='h-8 w-8 p-2 bg-gray-200 text-blue-400 rounded-full'/>
                    <BsGoogle  className='h-8 w-8 p-2 bg-gray-200 text-orange-600 rounded-full'/>
                </div>
            </div>
           <div className='text-center border rounded-t-lg border-[#FF3811] '>
                <img className='h-64 rounded-lg mx-auto w-full' src={team2} alt="" />
                <h1 className='text-xl mt-4 font-bold'>Car ENgine Plug</h1>
                <p className='text-lg font-semibold text-gray-500 mb-3'>Engine Expert</p>
                <div className='flex items-center justify-center gap-2 mt-4 mb-3'>
                    <BsFacebook className='h-8 w-8 p-2 bg-gray-200 text-blue-700 rounded-full'/>
                    <BsLinkedin  className='h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full'/>
                    <BsTwitter  className='h-8 w-8 p-2 bg-gray-200 text-blue-400 rounded-full'/>
                    <BsGoogle  className='h-8 w-8 p-2 bg-gray-200 text-orange-600 rounded-full'/>
                </div>
            </div>
           <div className='  text-center border rounded-t-lg '>
                <img className='h-64 rounded-lg mx-auto w-full' src={team3} alt="" />
                <h1 className='text-xl mt-4 font-bold'>Car ENgine Plug</h1>
                <p className='text-lg font-semibold text-gray-500 mb-3'>Engine Expert</p>
                <div className='flex items-center justify-center gap-2 mt-4 mb-3'>
                    <BsFacebook className='h-8 w-8 p-2 bg-gray-200 text-blue-700 rounded-full'/>
                    <BsLinkedin  className='h-8 w-8 p-2 bg-gray-200 text-blue-600 rounded-full'/>
                    <BsTwitter  className='h-8 w-8 p-2 bg-gray-200 text-blue-400 rounded-full'/>
                    <BsGoogle  className='h-8 w-8 p-2 bg-gray-200 text-orange-600 rounded-full'/>
                </div>
            </div>

           </div>

        </div>
    )
}

export default Team;