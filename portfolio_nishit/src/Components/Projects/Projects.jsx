import React from 'react'
import card_img from './card_img.jpg'
function Projects() {
  return (
    <div id="Projects"className='text-white bg-black bg-opacity-80 shadow-2xl mx-4 md:mx-12 lg:mx-24 rounded-xl p-6 md:p-12 font-sans'>
      <h2 className='text-3xl md:text-4xl font-extrabold mb-6 tracking-wide border-b-4 border-indigo-600 pb-3'>
        Projects
      </h2>
        <ul className='flex flex-wrap gap-6 justify-center'>
            <li className='flex flex-col max-w-70 bg-gray-900/80 rounded-xl p-2 shadow-md'>
                <img src={card_img} className='rounded-xl'></img>
                <br></br>
                <h3 className='text-lg font-semibold text-indigo-300 mb-2'>
                    Project 1: Personal Portfolio Website
                </h3>
                <p className='text-sm  leading-relaxed text-gray-300 whitespace-pre-line'>
                    A personal portfolio website showcasing my skills, projects, and experiences. Built using React and Tailwind CSS.
                </p>
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>Source Code</button>
            </li>
            <li className='flex flex-col max-w-70 bg-gray-900/80 rounded-xl p-2 shadow-md'>
                <img src={card_img} className='rounded-xl'></img>
                <br/>
                <h3 className='text-lg font-semibold text-indigo-300 mb-2'>
                    Project 2: Lilypad-Opencart
                </h3>
                <p className='text-sm leading-relaxed text-gray-300 whitespace-pre-line'>
                    A dynamic eCommerce platform front-end development project using React, that allows individuals and businesses to create and manage online stores.
                </p>
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>Source Code</button>
            </li>
            <li className='flex flex-col max-w-70 bg-gray-900/80 rounded-xl p-2 shadow-md'>
                <img src={card_img} className='rounded-xl'></img>
                <br/>
                <h3 className='text-lg  font-semibold text-indigo-300 mb-2'>
                    Project 3: Gaman AI-Powered Travel Assistant
                </h3>
                <p className='text-sm leading-relaxed text-gray-300 whitespace-pre-line'>
                    An AI-powered travel assistant project focused on user journey planning and personalized travel recommendations.
                </p>
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>Source Code</button>
            </li>
        </ul>
    </div>
  )
}

export default Projects