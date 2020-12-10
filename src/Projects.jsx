import React from 'react';

export default function Projects() {
  return (
    <div>
      <div>
        <h3 className="text-2xl text-lightBlue">Projects</h3>
      </div>

      <br />

      <section className="p-10 min-h-screen flex items-center justify-around bg-lightBlue flex-wrap sm:flex-col">

        <div className="h-48 w-48 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
            PageTrade
          </div>
          <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
            <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div>
          </div>
        </div>



      </section>
    </div>
  )
}
