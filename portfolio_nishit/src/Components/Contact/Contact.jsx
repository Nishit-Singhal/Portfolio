import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#465697] text-white p-3 md:p-5 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:singhal_nishit2005@outlook.com"
            className="underline hover:text-gray-200"
          >
            singhal.nishit2005@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a
            href="https://www.linkedin.com/in/nishit-singhal-b49512287"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            linkedin.com/in/nishit-singhal-b49512287
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a
            href="https://github.com/Nishit-Singhal"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-200"
          >
            github.com/Nishit-Singhal
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;