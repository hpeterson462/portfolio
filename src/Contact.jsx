import React from 'react';
import { SiLinkedin } from 'react-icons/si';
import { ImFileText } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <h3 className="text-5xl italic">Contact</h3>

      <br />

      <div className="min-h-screen pt-48">
        <p className="text-4xl italic text-lightBlue p-2">Get in touch!</p>
        <div className="flex flex-row items-center justify-center p-5">
          <div className="hover:text-red-400 hover:shadow-md cursor-pointer">
            <FaGithubSquare size={45} />
          </div>
          <div className="hover:text-red-400 hover:shadow-md cursor-pointer">
            <SiLinkedin size={40} />
          </div>
          <span className="p-2 text-xl">
            /hpeterson462
            </span>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="hover:text-red-400 hover:shadow-md cursor-pointer">
            <ImFileText size={40} />
          </div>
          <span className="pl-2 text-xl">Resume</span>
        </div>
        <footer className="bg-dots2 bg-contain bg-no-repeat bg-right pb-80 flex items-center"></footer>
      </div>
    </div>
  )
}
