import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import aboutImage from "./About.png";

const About = () => {
  const sections = [
    {
      title: "Frontend Developer",
      icon: <IoArrowForward size={24} className="text-indigo-500 shrink-0" />,
      content: (
        <>
          I’m a passionate Frontend Developer with a keen eye for design and a strong foundation in web technologies. Proficient in React, JavaScript, HTML, CSS, and modern UI frameworks, I specialize in building interactive, responsive, and user-friendly web applications.

          <br /><br />
          🚀 <strong>Skills:</strong> React.js, JavaScript (ES6+), Tailwind CSS, UI/UX Design
          <br />
          ⚡ <strong>Passionate About:</strong> Clean code, pixel-perfect design, seamless user interactions, and continuous learning.
        </>
      )
    },
    {
      title: "Event Management",
      icon: <IoArrowForward size={24} className="text-indigo-500 shrink-0" />,
      content: (
        <>
          With hands-on experience in event planning, logistics, corporate collaborations, and publicity, I have played a key role in organizing large-scale events at DTU, including Engifest'24, Shukraan'24, and Aarambh'24.

          <br /><br />
          🔹 <strong>Key Skills:</strong> Event Planning, Sponsorship & Corporate Relations, Logistics Management, PR & Publicity, Team Coordination
          <br />
          🔹 <strong>Experience:</strong> Co-headed multiple departments, managed large-scale festivals, and successfully executed high-impact campus events

        </>
      )
    },
    {
      title: "Machine Learning",
      icon: <IoArrowForward size={24} className="text-indigo-500 shrink-0" />,
      content: (
        <>
          I’m an enthusiastic Machine Learning practitioner with a strong foundation in Python and data science libraries. I enjoy exploring patterns in data, building predictive models, and deriving actionable insights through well-crafted algorithms.

          <br /><br />
          📊 <strong>Skills:</strong> Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn
          <br />
          🤖 <strong>Passionate About:</strong> Data-driven decision making, model optimization, insightful visualizations, and continuous upskilling
        </>
      )
    }
  ];

  return (
    <div id="About"className='text-white bg-black bg-opacity-80 shadow-2xl mx-4 md:mx-12 lg:mx-24 rounded-xl p-6 md:p-12 font-sans'>
      <h2 className='text-3xl md:text-4xl font-extrabold mb-6 tracking-wide border-b-4 border-indigo-600 pb-3'>
        About
      </h2>

      <ul className='flex flex-wrap justify-start items-start gap-1.5'>
        {/* Image as first list item */}
        <li className='w-full md:w-[35%] flex justify-center md:justify-start'>
          <img
            src={aboutImage}
            alt="About"
            className='w-full max-w-[260px] rounded-lg shadow-lg object-contain md:h-100 transition-all duration-300 hover:scale-120 hover:shadow-2xl'
          />
        </li>

        {/* The three sections */}
        {sections.map(({ title, icon, content }) => (
          <li key={title} className='flex flex-col gap-3 w-full md:w-[20%]'>
            <div className='flex items-center gap-2'>
              {icon}
              <h3 className='text-lg md:text-xl font-semibold text-indigo-300'>
                {title}
              </h3>
            </div>
            <p className='text-sm md:text-base leading-relaxed text-gray-300 whitespace-pre-line'>
              {content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;


