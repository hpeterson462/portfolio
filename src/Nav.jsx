import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {

  return (
    <>
      <nav className="flex flex-wrap absolute items-center justify-between z-10 w-screen h-5">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-evenly">
          <ul className="flex">
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug cursor-pointer text-md p-8 mr-5 hover:text-red-400 w-20 transition duration-500 ease-in-out"
                to="#home"
              >
                Home
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#projects"
              >
                Projects
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#aboutme"
              >
                About Me
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#techstack"
              >
                Tech Stack
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#contact"
              >
                Contact
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
