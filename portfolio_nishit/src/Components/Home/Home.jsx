import React from 'react'
import avatarImage from "./image.png"
const Home = () => {
  return (
    <div className='text-white md:flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter animate-fade-in-down'>
          Hello! I am Nishit
        </h1>
        <p className='text-sm md:text-xl tracking-tight '>I am Nishit Singhal, a 2nd Year student pursuing B-Tech CSE 
            From Delhi Technological University. My Objective is to use my skills in Computer Science, which 
            include experience with Web Development, Python, Data Analysis, Machine Learning, and C/C++ in challenging environments
            where there is ample room to grow and innovate, making an impact with projects that lead to moving forward 
            with Web Development and advanced technologies.
        </p>
        <a href="#Contact"><button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
        duration:300 hover:scale-105 font-semibold'>Contact Me</button></a>
        </div>
        <div><img className='mx-auto h-50 md:h-100 transition-all duration-300 hover:h-110' src={avatarImage} ></img></div>
    </div>
  )
}

export default Home