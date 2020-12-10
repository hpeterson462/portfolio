import React from 'react';
import Nav from './Nav';
import Projects from './Projects';
import {
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiCss3
} from 'react-icons/di';
import {
  SiLinkedin,
  SiPostgresql
} from 'react-icons/si';
import { ImFileText } from "react-icons/im";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex text-center items-center sm:bg-opacity-30">
        <div>
          <header className="bg-dots bg-contain bg-no-repeat bg-left p-20">
            <h1 className="text-5xl font-bold">Heather Peterson</h1>
            <br />
            <h3 className="text-3xl italic">Fullstack Software Developer</h3>
          </header>

          <br />

          <main>
            <Projects />

            <br />

            <div>
              <h3 className="text-2xl italic">About Me</h3>
              <p className="bg-gray-50 p-5 m-5 rounded-sm">
                I’m a full-stack software developer with a passion for solving human-based problems, collaborating with a great team, and the great outdoors. On previous projects, I’ve used test-driven development to create PostgreSQL databases using RESTful APIs that distill information down into JavaScript and React user interfaces with CSS and Sass designs. I’m excited to continue discovering, learning, and working with amazing people.
            </p>
            </div>
          </main>

          <br />

          <section>
            <h3 className="text-2xl text-lightBlue">Tech Stack</h3>
            <div className="bg-gray-50 p-5 m-5 rounded-sm flex flex-row flex-wrap items-center justify-center">
              <div className="p-5">
                <DiHtml5 size={90} />
              </div>
              <div className="p-5">
                <DiJsBadge size={90} />
              </div>
              <div className="p-5">
                <DiReact size={90} />
              </div>
              <div className="p-5">
                <DiCss3 size={90} />
              </div>
              <div className="p-5">
                <DiSass size={90} />
              </div>
              <div className="p-5">
                <DiNodejsSmall size={90} />
              </div>
              <div className="p-5">
                <SiPostgresql size={90} />
              </div>
            </div>
          </section>

          <br />

          <section>
            <h3 className="text-2xl italic">Contact</h3>
            <br />
            <div className="bg-gray-50 p-5 m-5 rounded-sm">
              <p className="text-2xl italic text-lightBlue">Get in touch!</p>
              <div className="flex flex-row items-center justify-center p-5">
                <DiGithubBadge size={40} />
                <SiLinkedin size={25} />
                <span className="p-2">
                  /hpeterson462
            </span>
              </div>
              <div className="flex flex-row items-center justify-center">
                <ImFileText size={25} />
                <span className="pl-2">Resume</span>
              </div>
            </div>
          </section>
          <footer className="bg-dots2 bg-contain bg-no-repeat bg-right p-40"></footer>
        </div>
      </div >
    </div>
  )
}
