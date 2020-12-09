import React from "react";
import { TiThMenu } from "react-icons/ti";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-evenly">
          <div className="w-full relative flex justify-between">
            <button
              className="text-white cursor-pointer text-xl px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <TiThMenu />
            </button>
          </div>
          <div
            className={
              "flex" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex">
              <li>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#aboutme"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#techstack"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
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
