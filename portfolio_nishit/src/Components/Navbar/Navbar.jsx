import React, { useState } from 'react'
import { RiMenu2Line, RiCloseLine } from '@remixicon/react'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const navLinks = ["About", "Skills", "Projects", "Contact"]

  return (
    <header className="sticky top-0 z-30 px-3 py-3 md:px-6">
      <nav className="section-shell section-card animate-fade-up flex flex-wrap items-center justify-between px-5 py-4 md:px-8">
        <a href="#Home" className="flex items-center gap-3 transition duration-300 hover:scale-[1.02]">
          <span className="glow-pulse flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-400 to-teal-300 text-lg font-bold text-slate-950">
            NS
          </span>
          <div>
            <p className="font-['Space_Grotesk'] text-lg font-bold tracking-wide text-white md:text-xl">
              Nishit Singhal
            </p>
            
          </div>
        </a>

        <button
          type="button"
          className="rounded-2xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation menu"
        >
          {menu ? <RiCloseLine size={26} /> : <RiMenu2Line size={26} />}
        </button>

        <ul
          className={`${menu ? "flex" : "hidden"} mt-4 w-full flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm font-semibold backdrop-blur-xl md:mt-0 md:flex md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="block rounded-full px-4 py-2 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:bg-white/8 hover:text-cyan-200"
                onClick={() => setMenu(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
