import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function Layout() {
    return (
        <div className='w-[100%] h-[100%] relative'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout