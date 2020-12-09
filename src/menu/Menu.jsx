import React from 'react';

export default function Menu({ open }) {
  return (
    <div open={open} className="flex justify-evenly">
      <a href="/">
        Home
    </a>
      <a href="/projects">
        Projects
    </a>
      <a href="/aboutme">
        About Me
    </a>
      <a href="/contact">
        Contact
    </a>
    </div>
  );
};
