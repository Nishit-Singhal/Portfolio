import React from "react"
import { MdOutlineEmail } from "react-icons/md"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import Reveal from "../Reveal/Reveal"

const Contact = () => {
  return (
    <section id="Contact" className="section-shell px-4 py-8 md:px-0 md:py-12">
      <Reveal className="section-card overflow-hidden">
        <div className="grid gap-8 px-6 py-8 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:py-10">
          <Reveal delay={120}>
            <span className="section-label">Contact</span>
            <h2 className="section-heading">Let&apos;s build something useful and well-crafted.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              I&apos;m open to internships, collaborations, and conversations around frontend development,
              ML-driven products, and impactful student-led projects.
            </p>
          </Reveal>

          <ul className="grid gap-4">
            <Reveal as="li" className="hover-lift rounded-[26px] border border-white/10 bg-slate-950/45 p-4 transition duration-300 hover:border-cyan-300/30">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <MdOutlineEmail size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:singhal.nishit2005@gmail.com"
                    className="text-sm font-semibold text-white hover:text-cyan-200 md:text-base"
                  >
                    singhal.nishit2005@gmail.com
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal as="li" delay={120} className="hover-lift rounded-[26px] border border-white/10 bg-slate-950/45 p-4 transition duration-300 hover:border-cyan-300/30">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <CiLinkedin size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/nishit-singhal-b49512287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-cyan-200 md:text-base"
                  >
                    linkedin.com/in/nishit-singhal-b49512287
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal as="li" delay={240} className="hover-lift rounded-[26px] border border-white/10 bg-slate-950/45 p-4 transition duration-300 hover:border-cyan-300/30">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <a
                    href="https://github.com/Nishit-Singhal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-cyan-200 md:text-base"
                  >
                    github.com/Nishit-Singhal
                  </a>
                </div>
              </div>
            </Reveal>
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
