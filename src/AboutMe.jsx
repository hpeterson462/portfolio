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
            <p className="text-left">
              I am a <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">frontend</span> software developer with a passion for <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">user experiences</span>, solving human-based <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">pain points</span>, <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">collaborating</span> on diverse teams, and <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">creative</span> problem-solving. I rely on <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">test-driven development</span> to create <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">JavaScript</span> and <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">React</span> user interfaces with <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">CSS</span> and <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">Sass</span> designs. I consistently bring <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">positive energy</span>, a <span className="text-lightBlue bg-darkGray italic p-0.5 rounded">hard work</span> ethic, and an endless <span className="text-lightBlue bg-darkGray italic p-0.5 rounded"> curiosity</span> for knowledge! I’m excited to continue to discover, learn, and grow with amazing people.
            </p>
            <div className="flex mt-7 justify-center animate-pulse text-lightGray">
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
