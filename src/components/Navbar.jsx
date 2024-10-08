import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState , useContext } from 'react';
import AuthContext from '../context/AuthContext';


const Navbar = () => {
    const [extendNavbar , setExtendNavbar] = useState(false)
    console.log(extendNavbar);
    
    const {login , logout , isLoggedIn} = useContext(AuthContext)
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-3'>
        <div className='max-w-7xl mx-auto flex justify-between items-center h-24'>
            <h1 className='text-5xl font-sans'>Luna Latte</h1>
           <div className='flex items-center gap-4'>
           <ul className={`flex flex-col lg:flex-row duration-500 lg:static gap-4 text-2xl absolute  lg:text-white top-24 text-black ${extendNavbar ? "left-10" : "left-[-100px]"} `}>
                <li className='cursor-pointer hover:underline '>Home</li>
                {
                  isLoggedIn ? 
                  (
                    <div className='flex gap-4'>
                      <li className='cursor-pointer hover:underline '>About</li>
                      <li className='cursor-pointer hover:underline '>Career</li>
                      <li onClick={logout} className='cursor-pointer hover:underline '>Logout</li>
                    </div>
                  ) 
                  : 
                  (
                    <div className='flex gap-4'>
                      <li className='cursor-pointer hover:underline' onClick={login}>Login</li>
                      <li className='cursor-pointer hover:underline' >Signup</li>
                    </div>
                  )
                }
             
                
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