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

export default function TechStack() {
  return (
    <div>
      <h3 className="text-5xl text-lightBlue">Tech Stack</h3>

      <br />

      <div className="flex flex-row flex-wrap items-center justify-center bg-gray-50 min-h-screen">

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

        <section className="p-5 flex items-center justify-around">
          <div className="inset-0 mb-28">
            JavaScript
          </div>
          <div className="absolute p-20 transform hover:translate-y-10 transition duration-300">
            <DiJsBadge size={150} />
          </div>
        </section>

        <div className="p-10">
          <DiReact size={150} />
        </div>
        <div className="p-10">
          <DiCss3 size={150} />
        </div>
        <div className="p-10">
          <DiSass size={150} />
        </div>
        <div className="p-10">
          <DiNodejsSmall size={150} />
        </div>
        <div className="p-10">
          <SiPostgresql size={150} />
        </div>
      </div>
    </div>
  )
}
