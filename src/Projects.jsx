import React from 'react';

export default function Projects() {
  return (
    <div>
      <div>
        <h3 className="text-2xl text-lightBlue">Projects</h3>
      </div>

      <br />

      <main className="flex flex-row bg-lightBlue justify-evenly items-center">
        <section className="p-10 min-h-screen flex items-center justify-around bg-lightBlue flex-wrap">
          <div className="h-48 w-48 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              PageTrade
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-dots bg-center"></div>
            </div>
          </div>
        </section>

        <section className="p-10 min-h-screen flex items-center justify-around bg-lightBlue flex-wrap">
          <div className="h-48 w-48 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Sherlock Stocks
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-dots bg-center"></div>
            </div>
          </div>
        </section>

        <section className="p-10 min-h-screen flex items-center justify-around bg-lightBlue flex-wrap">
          <div className="h-48 w-48 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Cumulus
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-dots bg-center"></div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
