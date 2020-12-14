import React from 'react';
import heather from './assets/heather.png';

export default function AboutMe() {
  return (
    <div>
      <h3 className="text-5xl italic">About Me</h3>

      <br />
      <div className="flex flex-row">
        <div className="flex justify-center items-center bg-gray-50 leading-10 w-3/5 p-5 m-5 min-h-screen">
          <p>
            I am a <span className="text-lightBlue bg-darkGray italic p-2 rounded">full-stack</span> software developer with a passion for <span className="text-lightBlue bg-darkGray italic p-2 rounded">solving human-based problems</span>, collaborating with a great team, and the great outdoors. On previous projects, I’ve used <span className="text-lightBlue bg-darkGray italic p-2 rounded">test-driven development</span> to create <span className="text-lightBlue bg-darkGray italic p-2 rounded">PostgreSQL</span> databases using <span className="text-lightBlue bg-darkGray italic p-2 rounded">RESTful APIs</span> that distill information down into <span className="text-lightBlue bg-darkGray italic p-2 rounded">JavaScript</span> and  <span className="text-lightBlue bg-darkGray italic p-2 rounded">React</span> user interfaces with <span className="text-lightBlue bg-darkGray italic p-2 rounded">CSS</span> and <span className="text-lightBlue bg-darkGray italic p-2 rounded">Sass</span> designs. I am always <span className="text-lightBlue bg-darkGray italic p-2 rounded">curious</span> to continue to <span className="text-lightBlue bg-darkGray italic p-2 rounded">discover, learn, and grow</span> with amazing people.
        </p>
        </div>
        <div className="flex h-80 w-80 m-auto rounded">
          <img src={heather} alt="Heather" />
        </div>
      </div>
    </div >
  )
}
