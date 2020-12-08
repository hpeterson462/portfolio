import React from 'react';

export default function Home() {
  return (
    <div className="flex text-center items-center">
      <div>
        <header className="bg-dots bg-contain bg-no-repeat p-20">
          <h1 className="text-5xl font-bold">Heather Peterson</h1>
          <br />
          <h3 className="text-3xl italic">Fullstack Software Developer</h3>
        </header>

        <br />

        <main>
          <div>
            <h3 className="text-2xl text-blue">Projects</h3>
          </div>

          <br />

          <div>
            <h3 className="text-2xl italic">About Me</h3>
            <p>
              I’m a full-stack software developer with a passion for solving human-based problems, collaborating with a great team, and the great outdoors. On previous projects, I’ve used test-driven development to create PostgreSQL databases using RESTful APIs that distill information down into JavaScript and React user interfaces with CSS and Sass designs. I’m excited to continue discovering, learning, and working with amazing people.
            </p>
          </div>
        </main>

        <br />

        <section>
          <h3 className="text-2xl text-blue">Tech Stack</h3>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </section>

        <br />

        <footer className="bg-dots2 bg-contain bg-no-repeat p-20">
          <h3 className="text-2xl italic">Contact</h3>
          <br />
          <p>Get in touch!</p>
          <img src="" alt="" />
          <img src="" alt="" />
          <p>/hpeterson462</p>
          <img src="" alt="" />
          <p>Resume</p>
        </footer>
      </div>
    </div >
  )
}
