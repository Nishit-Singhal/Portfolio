import React from 'react'
import js from "./js.png"
import tailwind from "./tailwind.png"
import react from "./react.png"
import python from "./python.png"
import c from "./c.png"
import cpp from "./cpp.png"
import tensorflow from "./tensorflow.png"
import sql from "./sql.png"
import html from "./html.png"
import css from "./css.png"
import Reveal from "../Reveal/Reveal"

const Skills = () => {
  const skills = [
    { src: css, alt: 'CSS', tone: 'from-cyan-300/25 to-blue-400/10' },
    { src: html, alt: 'HTML', tone: 'from-orange-300/25 to-amber-400/10' },
    { src: js, alt: 'JavaScript', tone: 'from-yellow-300/25 to-amber-400/10' },
    { src: tailwind, alt: 'Tailwind CSS', tone: 'from-sky-300/25 to-cyan-400/10' },
    { src: react, alt: 'React', tone: 'from-cyan-300/25 to-slate-200/10' },
    { src: python, alt: 'Python', tone: 'from-blue-300/25 to-yellow-300/10' },
    { src: c, alt: 'C', tone: 'from-indigo-300/25 to-slate-200/10' },
    { src: cpp, alt: 'C++', tone: 'from-blue-300/25 to-cyan-300/10' },
    { src: tensorflow, alt: 'TensorFlow', tone: 'from-red-300/25 to-orange-300/10' },
    { src: sql, alt: 'SQL', tone: 'from-emerald-300/25 to-teal-300/10' }
  ]

  return (
    <section id="Skills" className="section-shell px-4 py-8 md:px-0 md:py-12">
      <Reveal className="section-card p-6 md:p-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-label">Skills</span>
            <h2 className="section-heading">Technologies I rely on to ship end-to-end work.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            My toolkit spans frontend development, programming fundamentals, data work, and practical
            problem solving for both product and ML projects.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <Reveal
              key={skill.alt}
              delay={index * 70}
              className={`group hover-lift rounded-[28px] border border-white/10 bg-gradient-to-br ${skill.tone} p-[1px] transition duration-300`}
            >
              <div className="flex h-full min-h-[150px] flex-col items-center justify-center rounded-[27px] bg-slate-950/85 px-4 py-6 text-center">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="h-14 w-14 object-contain transition duration-300 group-hover:scale-110"
                />
                <p className="mt-4 text-sm font-semibold text-slate-100">{skill.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Skills
