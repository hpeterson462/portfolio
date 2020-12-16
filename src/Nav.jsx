import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { TiThMenu } from "react-icons/ti";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-200 mb-3 shadow-md z-10 w-screen">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-evenly">
          <div className="w-full relative flex justify-between">
            <button
              className="text-lightBlue cursor-pointer text-xl px-3 py-1 mb-3 border border-solid border-transparent rounded bg-transparent block outline-none hover:opacity-75 hover:text-red-400 hover:shadow-md focus:outline-none transition duration-500 ease-in-out"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <TiThMenu />
            </button>
          </div>
          <div
            className={
              "flex" +
              (navbarOpen ? "flex bg-gradient-to-r from-red-400 to-lightBlue rounded shadow-md w-screen" : " hidden")
            }
          >
            <ul className="flex">
              <li>
                <Link
                  className="flex items-center uppercase tracking-wide leading-snug text-white text-md p-8 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  to="#home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center uppercase  tracking-wide leading-snug text-white text-md p-8 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  to="#projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center uppercase tracking-wide leading-snug text-white text-md p-8 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  to="#aboutme"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center uppercase tracking-wide leading-snug text-white text-md p-8 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  to="#techstack"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center uppercase tracking-wide leading-snug text-white text-md p-8 hover:opacity-75 rounded hover:shadow-md transition duration-500 ease-in-out"
                  to="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
