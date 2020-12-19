import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {

  return (
    <>
      <nav className="flex flex-wrap fixed items-center justify-between z-10 w-screen">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-evenly">
          <ul className="flex">
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-red text-md px-10 p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#home"
              >
                Home
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase  tracking-wide leading-snug text-red text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#projects"
              >
                Projects
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-red text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#aboutme"
              >
                About Me
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-red text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
                to="#techstack"
              >
                Tech Stack
                </Link>
            </li>
            <li>
              <Link
                className="flex items-center uppercase tracking-wide leading-snug text-red text-md p-8 hover:text-red-400 hover:w-20 transition duration-500 ease-in-out"
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
