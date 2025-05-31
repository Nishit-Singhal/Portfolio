import React from 'react'
import js from "./js.png"
import tailwind from "./tailwind.png"
import react from "./react.png"
import python from "./python.png"
import c from "./c.png"
import cpp from "./cpp.png"
import java from "./java.png"
import sql from "./sql.png"
import html from "./html.png"
import css from "./css.png"

const Skills = () => {
  const skills = [
    { src: css, alt: 'CSS' },
    { src: html, alt: 'HTML' },
    { src: js, alt: 'JavaScript' },
    { src: tailwind, alt: 'Tailwind CSS' },
    { src: react, alt: 'React' },
    { src: python, alt: 'Python' },
    { src: c, alt: 'C' },
    { src: cpp, alt: 'C++' },
    { src: java, alt: 'Java' },
    { src: sql, alt: 'SQL' }
  ]

  return (
    <div id="Skills" className='text-white shadow-lg mx-auto w-full max-w-5xl rounded-2xl p-4 sm:p-8 md:p-10 font-sans  flex flex-col items-center'>
      <h1 className='text-3xl md:text-4xl font-extrabold border-b-4 border-white pb-3 mb-8 text-left tracking-wide w-full'>
        Skills
      </h1>
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-8 gap-y-10 justify-items-center w-full max-w-4xl'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-black/80 hover:bg-gradient-to-tr hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-3xl p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 flex items-center justify-center shadow-md hover:shadow-xl hover:scale-110'>
              <img src={skill.src} alt={skill.alt} className='w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 object-contain' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills;
