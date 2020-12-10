import React from 'react';

export default function Projects() {
  return (
    <div>
      <div>
        <h3 className="text-2xl text-lightBlue">Projects</h3>
      </div>

      <br />

      <main className="flex flex-row flex-wrap bg-lightBlue justify-evenly items-center min-h-screen">
        <section className="p-5 flex items-center justify-around">
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              PageTrade
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-pageTrade bg-cover bg-center"></div>
            </div>
          </div>
        </section>

        <section className="p-5 flex items-center justify-around">
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Sherlock Stocks
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-sherlockStocks bg-cover"></div>
            </div>
          </div>
        </section>

        <section className="p-5 flex items-center justify-around">
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Cumulus
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-cumulus bg-cover"></div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
