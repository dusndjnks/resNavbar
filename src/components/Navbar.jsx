import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


const Navbar = () => {
    const [extendNavbar,setExtendNavbar] = useState(false)
    console.log(extendNavbar);
    
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-3'>
        <div className='max-w-7xl mx-auto flex justify-between items-center h-24'>
            <h1 className='text-6xl'>MHD</h1>
           <div className='flex items-center gap-4'>
           <ul className={`flex flex-col lg:flex-row duration-500 lg:static gap-4 text-2xl absolute  lg:text-white top-24 text-black ${extendNavbar ? "left-10" : "left-[-100px]"} `}>
                <li>Home</li>
                <li>About</li>
                <li>Career</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
            <div className='lg:hidden' onClick={() => {setExtendNavbar(open => !open)}}>
               {
                extendNavbar ? <CloseIcon/> : <MenuIcon/>
               }
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar