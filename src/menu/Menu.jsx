import React from 'react';

export default function Menu({ open }) {
  return (
    <div open={open} className="flex flex-col bg-gray-500 bg-opacity-5 p-20 w-3/6 rounded-sm absolute">
      <a href="/" className="p-5 rounded-sm hover:text-white hover:bg-gray-900 hover:bg-opacity-20">
        Home
    </a>
      <a href="/projects" className="p-5 rounded-sm hover:text-white hover:bg-gray-900 hover:bg-opacity-20">
        Projects
    </a>
      <a href="/aboutme" className="p-5 rounded-sm hover:text-white hover:bg-gray-900 hover:bg-opacity-20">
        About Me
    </a>
      <a href="/contact" className="p-5 rounded-sm hover:text-white hover:bg-gray-900 hover:bg-opacity-20">
        Contact
    </a>
    </div>
  );
};
