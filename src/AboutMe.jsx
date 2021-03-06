import React from 'react';
import heather from './assets/heather.png';
import { IoIosArrowDown } from "react-icons/io";

export default function AboutMe() {
  return (
    <div className="mt-20">
      <h3 className="text-5xl italic" id="aboutme">About Me</h3>

      <br />

      <div className="flex flex-row">
        <div className="flex justify-center items-center leading-10 w-3/5 px-5 m-5 text-2xl">
          <div className="bg-gray-50 p-5 m-5 rounded">
            <p>
              I am a <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">full-stack</span> software developer with a passion for <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">solving human-based problems</span>, collaborating with a great team, and the great outdoors. On previous projects, I’ve used <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">test-driven development</span> to create <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">PostgreSQL</span> databases using <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">RESTful APIs</span> that distill information down into <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">JavaScript</span> and  <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">React</span> user interfaces with <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">CSS</span> and <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">Sass</span> designs. I am always <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">curious</span> to continue to <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">discover, learn, and grow</span> with amazing people.
          </p>
            <div className="flex mt-10 justify-center animate-pulse text-lightGray">
              <IoIosArrowDown size={30} />
            </div>
            <div className="flex justify-center animate-pulse text-lightGray">
              <IoIosArrowDown size={30} />
            </div>
            <div className="flex justify-center animate-pulse text-lightGray">
              <IoIosArrowDown size={30} />
            </div>
          </div>
        </div>
        <div className="flex h-1/2 w-80 m-auto">
          <img src={heather} alt="Heather" />
        </div>
      </div>
    </div >
  )
}
