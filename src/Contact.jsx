import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { SiLinkedin } from 'react-icons/si';
import { ImFileText } from "react-icons/im";

export default function Contact() {
  return (
    <div>
      <h3 className="text-5xl italic">Contact</h3>

      <br />

      <div className="min-h-screen pt-48">
        <p className="text-4xl italic text-lightBlue p-2">Get in touch!</p>
        <div className="flex flex-row items-center justify-center p-5">
          <DiGithubBadge size={70} />
          <SiLinkedin size={40} />
          <span className="p-2 text-xl">
            /hpeterson462
            </span>
        </div>
        <div className="flex flex-row items-center justify-center">
          <ImFileText size={40} />
          <span className="pl-2 text-xl">Resume</span>
        </div>
        <footer className="bg-dots2 bg-contain bg-no-repeat bg-right pb-80 flex items-center"></footer>
      </div>
    </div>
  )
}
