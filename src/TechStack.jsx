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
        <div className="p-10">
          <DiHtml5 size={150} />
        </div>
        <div className="p-10">
          <DiJsBadge size={150} />
        </div>
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
