import React, { useState } from 'react'
import {RiMenu2Line,RiCloseLine} from '@remixicon/react'
const Navbar = () => {
    const [menu,openMenu]=useState(false);
    const [showMenu,setShowMenu]=useState(true);
  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 bg-[#465697] pb-4'>
        <a href="/"><span className='md:text-4xl text-xl font-bold tracking-wide'>Portfolio</span></a>
        <ul className={`${
            menu ? "block": "hidden"
            }   mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 
        md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
            <a href="#About"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-3xl md:text-xl'>About</li></a>
            <a href="#Skills"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-3xl md:text-xl'>Skills</li></a>
            <a href="#Projects"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-3xl md:text-xl'>Projects</li></a>
            <a href="#Contact"><li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-3xl md:text-xl'>Contact</li></a>
        </ul>
        {showMenu ? (
            <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 " 
            onClick={() => {openMenu(!menu); setShowMenu(!showMenu);}}/>
        ) : (
            <RiCloseLine  size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300 " 
            onClick={() => {openMenu(!menu); setShowMenu(!showMenu);}}/>
        )}
    </nav>
  )
}

export default Navbar