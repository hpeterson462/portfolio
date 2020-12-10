import React from 'react';

export default function AboutMe() {
  return (
    <div>
      <h3 className="text-5xl italic">About Me</h3>

      <br />
      <div className="flex bg-gray-50 justify-evenly items-center min-h-screen">
        <p className="p-20 rounded-sm text-xl leading-10 lg:p-40">
          I am a <span className="text-lightBlue italic bg-darkGray p-1 rounded">full-stack</span> software developer with a passion for <span className="text-lightBlue italic bg-darkGray p-1 rounded">solving human-based problems</span>, collaborating with a great team and the great outdoors. On previous projects, I’ve used <span className="text-lightBlue italic bg-darkGray p-1 rounded">test-driven development</span> to create <span className="text-lightBlue italic bg-darkGray p-1 rounded">PostgreSQL</span> databases using <span className="text-lightBlue italic bg-darkGray p-1 rounded">RESTful APIs</span> that distill information down into <span className="text-lightBlue italic bg-darkGray p-1 rounded">JavaScript</span> and <span className="text-lightBlue italic bg-darkGray p-1 rounded">React</span> user interfaces with <span className="text-lightBlue italic bg-darkGray p-1 rounded">CSS</span> and <span className="text-lightBlue italic bg-darkGray p-1 rounded">Sass</span> designs. I’m always <span className="text-lightBlue italic bg-darkGray p-1 rounded">curious to learn, discover, grow</span> and continue to work with amazing people.
          </p>
      </div>
    </div>
  )
}
