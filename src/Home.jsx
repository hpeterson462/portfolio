import React from 'react';
import Nav from './Nav';
import Projects from './Projects';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import Contact from './Contact';
import ScrollAnimation from 'react-animate-on-scroll';
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {

  return (
    <div>
      <Nav />
      <div className="flex text-center items-center w-full" id="home">
        <div>
          <header className="bg-dots bg-contain bg-no-repeat bg-left-top p-20 mt-10 min-h-screen">
            <ScrollAnimation
              animateIn="fadeIn"
              delay="1"
            >
              <h1 className="flex justify-center text-8xl mt-32 z-10 font-header">
                Heather Wild
              </h1>
            </ScrollAnimation>
            <br />
            <h3 className="text-3xl text-lightBlue font-body">Fullstack Software Developer</h3>
            <div className="flex flex-col mt-10 animate-pulse">
              <IoIosArrowDown size={30} />
              <IoIosArrowDown size={30} />
              <IoIosArrowDown size={30} />
            </div>
          </header>

          <br />

          <Projects />

          <br />

          <AboutMe />

          <br />

          <TechStack />

          <br />

          <Contact />
        </div>
      </div >
    </div>
  )
}
