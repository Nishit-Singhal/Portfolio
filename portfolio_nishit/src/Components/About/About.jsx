import React from 'react'
import { IoArrowForward } from "react-icons/io5"
import aboutImage from "./About.png"
import Reveal from "../Reveal/Reveal"

const About = () => {
  const sections = [
    {
      title: "Frontend Developer",
      icon: <IoArrowForward size={24} className="shrink-0 text-cyan-200" />,
      content:
        "I build responsive interfaces with a strong sense of structure, motion, and usability. My goal is always to make products feel intuitive while keeping the code maintainable and scalable.",
      tags: ["React.js", "JavaScript", "Tailwind CSS", "UI systems"]
    },
    {
      title: "Event Management",
      icon: <IoArrowForward size={24} className="shrink-0 text-cyan-200" />,
      content:
        "Beyond tech, I have coordinated campus events that required planning, sponsorship outreach, publicity, and cross-team execution. That experience sharpened my communication and leadership under pressure.",
      tags: ["Planning", "PR", "Logistics", "Team coordination"]
    },
    {
      title: "Machine Learning",
      icon: <IoArrowForward size={24} className="shrink-0 text-cyan-200" />,
      content:
        "I enjoy working with data, training models, and translating results into practical outputs. I care about experimentation, insight quality, and using ML where it genuinely improves the user experience.",
      tags: ["Python", "Pandas", "Scikit-learn", "Visualization"]
    }
  ]

  return (
    <section id="About" className="section-shell px-4 py-8 md:px-0 md:py-12">
      <Reveal className="section-card p-6 md:p-10">
        <span className="section-label">About</span>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={120}>
            <h2 className="section-heading">A builder who enjoys design, systems, and momentum.</h2>
            <p className="soft-text mt-5 max-w-xl">
              I like working at the intersection of technical depth and user-facing polish. Whether
              I&apos;m crafting a React interface, experimenting with ML models, or coordinating teams,
              I focus on clarity, execution quality, and meaningful outcomes.
            </p>
            <div className="hover-lift mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40 p-3">
              <img
                src={aboutImage}
                alt="About Nishit"
                className="w-full rounded-[22px] object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sections.map(({ title, icon, content, tags }, index) => (
              <Reveal key={title} as="li" delay={180 + index * 120} className="hover-lift rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{content}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export default About
