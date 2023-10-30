import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu,AiOutlineSearch } from "react-icons/ai";
import logo from '../../assets/logo.svg'
import { HiOutlineShoppingBag } from "react-icons/hi";
import UseAuth from "../ManageAuth/UseAuth";
const Navbar = () => {
    const {user,logout} = UseAuth()
    const handleLogout = () => {
      logout()
      .then()
      .catch(error => console.log(error.message))
    }
  const navbar = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      {user?.email ? <>
        <Link className="bg-[#071224a4] border-l-4 border-[#FF3811] px-4 py-1  font-hebo  text-sm text-white rounded" to='/booking'>My Booking</Link>
        <Link><button onClick={handleLogout} className="bg-[#FF3811] px-4 py-1  font-hebo  text-sm text-white rounded">Log out</button></Link> 
      </> : <Link to='/login'><button className="bg-[#FF3811] px-4 py-1  font-hebo  text-sm text-white rounded">Login</button></Link>}
    </>
  );
  return (
    <div className=" w-full md:max-w-7xl mx-auto ">
      <div className="navbar mt-10 flex items-center justify-center">
        <div className="navbar-start p-2">
          <div className="dropdown"> 
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-xl">
                <AiOutlineMenu/>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-5 w-52 font-hebo "
            >
             {navbar}
            </ul>
          </div>
          <a className="normal-case">
            <img className="w-34" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-hebo text-  px-1 gap-7 text-lg">{navbar}</ul>
        </div>
        <div className="navbar-end gap-5">
           <HiOutlineShoppingBag className="text-2xl text-gray-500 "/>
           <AiOutlineSearch className="text-2xl text-gray-500" />
           <button className="px-5 py-2 text-lg border border-rose-500 text-rose-500 font-bold rounded">Appointment</button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
