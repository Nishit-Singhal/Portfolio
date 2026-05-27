import React from 'react'
import card_img from './card_img.jpg'
import Reveal from "../Reveal/Reveal"

function Projects() {
  const projects = [
    {
      title: "Real-Time Sign Language Recognition Chrome Extension",
      description:
        "Built an Indian Sign Language recognition system using MediaPipe hand landmarks and a dual-stream BiLSTM with attention. It delivers 30-60 FPS on-device inference and converts signs into text and speech inside a Chrome extension.",
      tags: ["MediaPipe", "BiLSTM", "Chrome Extension", "Accessibility"],
      source: "https://github.com/Nishit-Singhal/Sign-Language-Detection-Extension",
    },
    {
      title: "QFlow - Workflow Automation Tool",
      description:
        "Designed a workflow automation platform to simplify business process execution with intuitive UI and operational efficiency improvements across multiple workflows.",
      tags: ["Automation", "Web App", "Process Design", "Team Project"],
      source: "https://github.com/Anas255-exe/QFlow",
      demo: "https://autonomous-qa-testing-agent.onrender.com//",
    },
    {
      title: "Credit Risk Analyser",
      description:
        "Created a credit default prediction pipeline with data cleaning, exploratory analysis, visualizations, and model evaluation on 1,000+ customer records, reaching 92% classification accuracy.",
      tags: ["Python", "EDA", "ML Models", "Risk Prediction"],
      source: "https://github.com/Nishit-Singhal/Credit-Risk-Analysis",
    },
  ]

  return (
    <section id="Projects" className="section-shell px-4 py-8 md:px-0 md:py-12">
      <Reveal className="section-card p-6 md:p-10">
        <span className="section-label">Projects</span>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="section-heading max-w-2xl">Selected work that combines usability, engineering, and problem solving.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            These projects reflect the kind of work I enjoy most: practical systems with a clear user
            benefit, solid technical execution, and room for iteration.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              as="li"
              delay={index * 140}
              className="group hover-lift overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/55 transition duration-300 hover:border-cyan-300/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={card_img}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Project 0{index + 1}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.source}
                    className="rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 px-5 py-2.5 text-sm font-bold text-slate-950 transition duration-300 hover:scale-[1.02]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="rounded-full border border-white/12 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}

export default Projects
