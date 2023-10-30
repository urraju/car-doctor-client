
import React, { useEffect, useState } from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ServiceCard = () => {
    const [data , setData ] = useState([])
    useEffect(() => {
        fetch('https://car-server-site-rust.vercel.app/services')
        .then(res => res.json())
        .then(item => setData(item))
    },[])
    return (
        <div className='mt-40'>
                <div className='text-center space-y-5'>
                    <h1 className='text-lg font-semibold text-[#FF3811]'>Service</h1>
                    <h2 className='text-5xl font-bold'>Our Service Area</h2>
                    <p className='text-gray-500 capitalize leading-8  '>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                </div>
            <div className='grid max-w-7xl mx-auto mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {data?.map(datas => 
                <div key={datas._id}>
                    <div className=' shadow-lg font-hebo h- p-3 rounded-lg border'>
                         <img className='rounded-lg w-full h-60 mx-auto' src={datas.img} alt="" />
                         <p className='text-2xl font-semibold mt-4'>{datas.title}</p>
                        <div className='flex mb-2 mt-4 items-center justify-between'>
                        <p className=' text-xl text-[#FF3811] font-semibold'>Price : ${datas.price}</p>
                        <Link to={`/book/${datas._id}`}><button  className='text-[#FF3811] rounded-full text-3xl'><BsArrowRightShort/></button></Link>
                        </div>
                    </div>
                </div>)}
            </div>
           <div className='flex justify-center mt-5'>
           <button className='px-5 py-2 font-semibold font-hebo rounded text-[#FF3811] border-2 border-[#FF3811]'>More Service</button>
           </div>
        </div>
    )
}

export default ServiceCard;