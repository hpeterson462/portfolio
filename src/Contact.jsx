import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
import { SiLinkedin } from 'react-icons/si';
import { ImFileText } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Contact() {

  const handleLiClick = () => {
    window.location.replace('https://www.linkedin.com/in/hpeterson462/')
  }

  const handleGitClick = () => {
    window.location.replace('https://github.com/hpeterson462')
  }

  return (
    <div className="mt-20">
      <h3 className="text-5xl italic" id="contact">Contact</h3>

      <br />

      <div className="min-h-screen pt-5">
        <p className="text-4xl text-lightBlue p-2">Get in touch!</p>

        <div className="flex flex-row flex-wrap items-center justify-center p-5">
          <div className="flex flex-col w-2/5 bg-dots2 bg-contain bg-no-repeat bg-left-bottom pb-80">
            <div className="flex justify-center animate-bounce text-lightGray">
              <IoIosArrowDown size={30} />
            </div>
            <div className="flex items-center justify-center p-5 pt-10">
              <div className="hover:text-red-400 cursor-pointer transition duration-500 ease-in-out text-lightGray pr-1">
                <FaGithubSquare size={45} onClick={handleGitClick} />
              </div>
              <div className="hover:text-red-400 cursor-pointer transition duration-500 ease-in-out text-lightGray">
                <SiLinkedin size={40} onClick={handleLiClick} />
              </div>
              <span className="p-2 text-2xl">
                /hpeterson462
            </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="hover:text-red-400 cursor-pointer transition duration-500 ease-in-out text-lightGray">
                <Link to="/resume">
                  <ImFileText size={40} />
                </Link>
              </div>
              <span className="pl-2 text-2xl">Resume</span>
            </div>
          </div>

          <Form />

          <section className="flex flex-col">
            <div className="flex animate-pulse text-lightGray">
              <IoIosArrowUp size={30} />
            </div>
            <div className="flex animate-pulse text-lightGray">
              <IoIosArrowUp size={30} />
            </div>
          </section>

        </div>
      </div>
    </div >
  )
}

