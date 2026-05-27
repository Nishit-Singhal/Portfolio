import React from 'react'
import avatarImage from "./image.png"
import Reveal from "../Reveal/Reveal"

const Home = () => {
  return (
    <section id="Home" className="section-shell px-4 pb-10 pt-8 md:px-0 md:pb-18 md:pt-12">
      <div className="section-card relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-300/15 blur-3xl" />
          <div>
            <Reveal as="span" className="section-label">
              Available for internships and freelance work
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                Building fast, thoughtful products with code and design.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                I&apos;m Nishit Singhal, a B.Tech CSE student at Delhi Technological University focused on
                frontend engineering, machine learning, and shipping polished user experiences that feel
                clear, modern, and reliable.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#Projects"
                  className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 px-6 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(103,232,249,0.25)]"
                >
                  View Projects
                </a>
                <a
                  href="#Contact"
                  className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={420} className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute inset-8 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="float-animation tilt-drift shimmer-shell relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(103,232,249,0.16),rgba(15,23,42,0.5))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)]">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-300/18 to-transparent" />
              <img
                className="relative mx-auto w-full rounded-[28px] object-contain"
                src={avatarImage}
                alt="Nishit Singhal portrait"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Home
