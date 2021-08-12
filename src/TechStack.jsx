import React from 'react';
import {
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiCss3
} from 'react-icons/di';
import { SiPostgresql } from 'react-icons/si';
import ScrollAnimation from 'react-animate-on-scroll';
import { IoIosArrowDown } from "react-icons/io";

export default function TechStack() {

  return (
    <div className="mt-20">
      <ScrollAnimation
        animateIn="fadeIn"
      >
        <h3 className="text-5xl text-lightBlue mb-5 font-header" id="techstack">
          Tech Stack
        </h3>
      </ScrollAnimation>

      <br />

      <div className="flex flex-row flex-wrap items-center justify-center bg-lightBlue min-h-screen italic font-body">
        <div className="flex justify-center animate-bounce text-lightGray">
          <IoIosArrowDown size={30} />
        </div>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
          <section className="p-5 flex items-center justify-around">
            <div className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
                HTML
              </div>
              <div className="absolute inset-0 transform hover:translate-y-10 transition duration-300">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl">
                  <DiHtml5 size={160} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
          <section className="p-5 flex items-center justify-around">
            <div className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
                JavaScript
              </div>
              <div className="absolute inset-0 transform hover:translate-y-10 transition duration-300">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl">
                  <DiJsBadge size={150} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
          <section className="p-5 flex items-center justify-around">
            <div className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
                React
              </div>
              <div className="absolute inset-0 transform hover:translate-y-10 transition duration-300">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl">
                  <DiReact size={150} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
          <section className="p-5 flex items-center justify-around">
            <div className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
                CSS
              </div>
              <div className="absolute inset-0 transform hover:translate-y-10 transition duration-300">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl">
                  <DiCss3 size={150} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
          <section className="p-5 flex items-center justify-around">
            <div className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
                Sass
              </div>
              <div className="absolute inset-0 transform hover:translate-y-10 transition duration-300">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl">
                  <DiSass size={150} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
          <section className="p-5 flex items-center justify-around">
            <div className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
                Node.js
              </div>
              <div className="absolute inset-0 transform hover:translate-y-10 transition duration-300">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl">
                  <DiNodejsSmall size={150} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
          <section className="p-5 flex items-center justify-around">
            <div className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
                PostgreSQL
              </div>
              <div className="absolute inset-0 transform hover:translate-y-10 transition duration-300">
                <div className="flex justify-center items-center h-full w-full bg-white rounded-lg shadow-2xl">
                  <SiPostgresql size={150} />
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <div className="flex justify-center animate-bounce text-lightGray">
          <IoIosArrowDown size={30} />
        </div>
      </div>
    </div>
  )
}
