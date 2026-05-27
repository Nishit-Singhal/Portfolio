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
                    Project 1: Real-Time Sign Language Recognition Chrome Extension 
                </h3>
                <p className='text-sm  leading-relaxed text-gray-300 whitespace-pre-line'>
                    Built a real-time Indian Sign Language (ISL) recognition system using MediaPipe hand landmarks and a dual-stream BiLSTM with attention (85% accuracy, 262 classes), achieving 30–60 FPS on-device inference and enabling seamless sign-to-text and speech output through a Chrome Extension (MV3).
                </p>
                <div className='flex flex-row items-center'>
                <a href="https://github.com/Nishit-Singhal/Sign-Language-Detection-Extension" className='flex justify-center w-full' target="_blank">
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>
                    
                    Source Code</button></a>
                {/* <a href="https://stock-predictor-eight.vercel.app/" className='flex justify-center w-full' target="_blank">
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>
                    
                    Website Link</button></a> */}
                </div>
            </li>
            <li className='flex flex-col max-w-70 bg-gray-900/80 rounded-xl p-2 shadow-md'>
                <img src={card_img} className='rounded-xl'></img>
                <br/>
                <h3 className='text-lg font-semibold text-indigo-300 mb-2'>
                    Project 2: Qflow- Workflow Automation Tool
                </h3>
                <p className='text-sm leading-relaxed text-gray-300 whitespace-pre-line'>
                    QFlow is a workflow automation tool designed to streamline and optimize business processes through efficient automation and intuitive user interfaces. Automated 5+ business processes to improve operational efficiency.
                </p>
                <a href="https://github.com/Anas255-exe/QFlow" className='flex justify-center w-full' target='_blank'>
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>
                
                    Source Code</button></a>
                <a href="https://autonomous-qa-testing-agent.onrender.com//" className='flex justify-center w-full' target="_blank">
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>
                    
                    Website Link</button></a>
            </li>
            <li className='flex flex-col max-w-70 bg-gray-900/80 rounded-xl p-2 shadow-md'>
                <img src={card_img} className='rounded-xl'></img>
                <br/>
                <h3 className='text-lg  font-semibold text-indigo-300 mb-2'>
                    Project 3: Credit Risk Analyser
                </h3>
                <p className='text-sm leading-relaxed text-gray-300 whitespace-pre-line'>
                    Developed a credit risk prediction system by performing data cleaning, exploratory data analysis, and visualization on 1,000+ customer records, and evaluated multiple machine learning algorithms to identify the best-performing model, achieving 92% accuracy in credit default risk classification.
                </p>
                <a href="https://github.com/Nishit-Singhal/Credit-Risk-Analysis" className='flex justify-center w-full' target='_blank'>
                <button className='bg-[#465697] border-solid border-white rounded-2xl p-2 mt-5 text-sm md:text-lg hover:opacity-85
                duration:300 hover:scale-105 font-semibold'>
                
                    Source Code</button></a>
            </li>
        </ul>
    </div>
  )
}

export default Projects
