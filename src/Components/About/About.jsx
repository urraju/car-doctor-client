
import React from 'react'
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='mt-24 max-w-7xl mx-auto'>
            <div className='flex flex-col-reverse md:flex-row  justify-center gap-20'>
                <div className='relative '>
                    <img className='md:h-[460px] rounded-lg' src={person} alt="" />
                    <img className='absolute rounded-lg md:w-[350px] w-60 md:-right-20 -bottom-20 border-8
                     border-white' src={parts} alt="" />
                </div>
                <div className='md:w-[600px] pl-6 space-y-5 font-hebo'>
                    <h1 className='text-lg font-semibold text-[#FF3811]'>About Us</h1>
                    <p className='text-4xl font-semibold'>We are qualified <br /> & of experience in this field</p>
                    <p className='text-gray-500 leading-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-gray-500 leading-8 '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='px-5 py-2 bg-[#FF3811] text-white rounded'>Get More Ingo</button>
                </div>
            </div>
        </div>
    )
}

export default About