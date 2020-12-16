import React from 'react';
import Nav from './Nav';
import Projects from './Projects';
import AboutMe from './AboutMe';
import TechStack from './TechStack';
import Contact from './Contact';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex text-center items-center" id="home">
        <div>
          <header className="bg-dots bg-contain bg-no-repeat bg-left-top p-20 pr-10 mt-10 min-h-screen">
            <h1 className="flex justify-center text-8xl font-bold mt-32">Heather Peterson</h1>
            <br />
            <h3 className="text-3xl italic">Fullstack Software Developer</h3>
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
