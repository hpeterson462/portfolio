import React from 'react';
import { Link } from 'react-router-dom';
import { SiLinkedin } from 'react-icons/si';
import { ImFileText } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import ScrollAnimation from 'react-animate-on-scroll';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Contact() {

  const handleLiClick = (e) => {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/hpeterson462/')
  }

  const handleGitClick = (e) => {
    e.preventDefault();
    window.open('https://github.com/hpeterson462')
  }

  return (
    <div className="mt-20">
      <ScrollAnimation
        animateIn="fadeIn"
      >
        <h3 className="text-5xl font-header" id="contact">
          Contact
        </h3>
      </ScrollAnimation>

      <br />

      <ScrollAnimation
        animateIn="fadeIn"
        delay="1"
      >
        <div className="min-h-screen pt-5">
          <p className="w-2/6 m-auto rounded text-4xl text-lightBlue font-body">
            Get in touch!
          </p>

          <div className="flex flex-row flex-wrap items-center justify-center p-3">
            <div className="flex flex-col w-2/5 bg-dots2 bg-contain bg-no-repeat bg-left-bottom pb-80">
              <section className="flex justify-center animate-bounce text-lightGray pt-8">
                <IoIosArrowDown size={30} />
              </section>
              <div className="flex items-center justify-center p-5 pt-1">
                <div className="p-1 rounded hover:text-red-400 hover:shadow-md cursor-pointer transition duration-500 ease-in-out text-lightGray pr-1">
                  <FaGithubSquare size={45} onClick={handleGitClick} />
                </div>
                <div className="p-1 rounded hover:text-red-400 hover:bg-lightGray hover:shadow-md cursor-pointer transition duration-500 ease-in-out text-lightGray">
                  <SiLinkedin size={40} onClick={handleLiClick} />
                </div>
                <span className="p-2 text-2xl font-body">
                  /hpeterson462
                </span>
              </div>
              {/*<div className="flex items-center justify-center">
                <div className="p-1 rounded hover:text-red-400 hover:shadow-md cursor-pointer transition duration-500 ease-in-out text-lightGray">
                  <Link to="/resume">
                    <ImFileText size={40} />
                  </Link>
                </div>
                <span className="pl-2 text-2xl font-body">Resume</span>
              </div>*/}
              <div className="flex items-center justify-center">
                <a href="mailto:hpeterson462@gmail.com" className="p-1 rounded hover:text-red-400 hover:shadow-md cursor-pointer transition duration-500 ease-in-out text-lightGray">
                  <HiOutlineMail size={45} />
                </a>
                <span className="pl-2 text-2xl font-body">hpeterson462@gmail.com</span>
              </div>
            </div>

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
      </ScrollAnimation>

    </div>
  )
}

