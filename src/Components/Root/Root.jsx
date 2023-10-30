
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import toast, { Toaster } from 'react-hot-toast';
const Root = () => {
    return (
       <div>
        <Toaster/>
         <div>
            <Navbar/>
            <Outlet/>
        </div>
        <Footer/>
       </div>
    )
}

export default Root