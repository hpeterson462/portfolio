import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";

export default function Projects() {
  const handlePageTClick = (e) => {
    e.preventDefault();
    window.open('https://page-trade.netlify.app/')
  }

  const handlePageTGithubClick = (e) => {
    e.preventDefault();
    window.open('https://github.com/NoShelfControl')
  }

  const handleSherlockClick = (e) => {
    e.preventDefault();
    window.open('https://sherlockstocks.netlify.app/')
  }

  const handleSherlockGithubClick = (e) => {
    e.preventDefault();
    window.open('https://github.com/Sherlock-Stocks')
  }

  const handleBabyMeGithubClick = (e) => {
    e.preventDefault();
    window.open('https://github.com/hpeterson462/BabyMe')
  }

  const handleBabyMeClick = (e) => {
    e.preventDefault();
    window.open('https://babyme.netlify.app/')
  }

  const handleCumulusGithubClick = (e) => {
    e.preventDefault();
    window.open('https://github.com/CumulusWeatherApp')
  }

  const handleCumulusClick = (e) => {
    e.preventDefault();
    window.open('https://cumuli.netlify.app/')
  }

  // const handleHeatTransGithubClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://github.com/hpeterson462/heattransfersystemsinc')
  // }

  // const handleHeatTransClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://heattransfersystems.netlify.app/')
  // }

  return (
    <div>
      <div>
        <h3 className="text-5xl text-lightBlue mb-5" id="projects">Projects</h3>
      </div>

      <br />

      <main className="flex flex-row flex-wrap bg-lightBlue justify-evenly items-center min-h-screen">

        <section className="p-10 flex items-center justify-around flex-col">
          <div className="mb-5 animate-bounce text-lightGray">
            <IoIosArrowDown size={30} />
          </div>
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              BabyMe
            </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-babyMe bg-cover" onClick={handleBabyMeClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white transition duration-500 ease-in-out cursor-pointer opacity-50" onClick={handleBabyMeGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section>

        {/* <section className="p-10 flex items-center justify-around flex-col">
          <div className="mb-5 animate-bounce text-lightGray">
            <IoIosArrowDown size={30} />
          </div>
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Heat Transfer Systems
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-heatTransfer bg-cover" onClick={handleHeatTransClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white transition duration-500 ease-in-out cursor-pointer opacity-50" onClick={handleHeatTransGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section> */}

        <section className="p-10 flex items-center justify-around flex-col">
          <div className="mb-5 animate-bounce text-lightGray">
            <IoIosArrowDown size={30} />
          </div>
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              PageTrade
            </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full rounded-lg shadow-2xl bg-pageTrade bg-cover bg-center" onClick={handlePageTClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white transition duration-500 ease-in-out cursor-pointer opacity-50" onClick={handlePageTGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section>

        <section className="p-10 flex items-center justify-around flex-col">
          <div className="mb-5 animate-bounce text-lightGray">
            <IoIosArrowDown size={30} />
          </div>
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Sherlock Stocks
            </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-sherlockStocks bg-cover" onClick={handleSherlockClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white transition duration-500 ease-in-out cursor-pointer opacity-50" onClick={handleSherlockGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section>

        <section className="p-10 flex items-center justify-around flex-col">
          <div className="mb-5 animate-bounce text-lightGray">
            <IoIosArrowDown size={30} />
          </div>
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Cumulus
            </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-cumulus bg-cover" onClick={handleCumulusClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white transition duration-500 ease-in-out cursor-pointer opacity-50" onClick={handleCumulusGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section>

      </main>
    </div>
  )
}
