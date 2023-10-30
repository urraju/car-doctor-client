import React from "react";
import logo from '../../assets/logo.svg'
import { BsFacebook , BsTwitter, BsLinkedin, BsInstagram, BsGoogle } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full mt-20   bg-black">
      <footer className="footer justify-center md:justify-normal text-white font-hebo p-10 max-w-7xl mx-auto ">
        <aside>
          <img src={logo} alt="" />
          <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life coach trainer <br /> who is also a serial .
          </p>
          <div className='flex items-center justify-center gap-3 mt-4'>
                    <BsFacebook className='h-8 w-8 p-2 bg-gray-700 text-base-600 rounded-full'/>
                    <BsLinkedin  className='h-8 w-8 p-2 bg-gray-700 text-base-600 rounded-full'/>
                    <BsTwitter  className='h-8 w-8 p-2 bg-gray-700 text-base-600 rounded-full'/>
                    <BsGoogle  className='h-8 w-8 p-2 bg-gray-700 text-base-600 rounded-full'/>
                </div>
        </aside>
       <div className="grid grid-cols-2  gap-10  md:grid-cols-4">
       <nav className="flex flex-col  ">
          <header className="footer-title">About</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col">
          <header className="footer-title">Company</header>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <header className="footer-title">Support</header>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
       </div>
      </footer>
    </div>
  );
};

export default Footer;
