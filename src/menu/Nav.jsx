import React from "react";
import { TiThMenu } from "react-icons/ti";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-200 mb-3 shadow-md z-10 w-screen">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-evenly">
          <div className="w-full relative flex justify-between">
            <button
              className="text-lightBlue cursor-pointer text-xl px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none hover:opacity-75 hover:text-red-400 hover:shadow-md focus:outline-none transition duration-500 ease-in-out"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <TiThMenu />
            </button>
          </div>
          <div
            className={
              "flex" +
              (navbarOpen ? "flex bg-gradient-to-r from-red-400 to-lightBlue rounded" : " hidden")
            }
          >
            <ul className="flex">
              <li>
                <a
                  className="flex items-center uppercase font-bold leading-snug text-white text-md p-5 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="flex items-center uppercase font-bold leading-snug text-white text-md p-5 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  href="#aboutme"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="flex items-center uppercase font-bold leading-snug text-white text-md p-5 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  href="#techstack"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  className="flex items-center uppercase font-bold leading-snug text-white text-md p-5 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
