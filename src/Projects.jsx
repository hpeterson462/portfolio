import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';

export default function Projects() {
  const handlePageTClick = () => {
    window.location.replace('https://page-trade.netlify.app/')
  }

  const handlePageTGithubClick = () => {
    window.location.replace('https://github.com/NoShelfControl')
  }

  const handleSherlockClick = () => {
    window.location.replace('https://sherlockstocks.netlify.app/')
  }

  const handleSherlockGithubClick = () => {
    window.location.replace('https://github.com/Sherlock-Stocks')
  }

  const handleCumulusClick = () => {
    window.location.replace('https://cumuli.netlify.app/')
  }

  const handleCumulusGithubClick = () => {
    window.location.replace('https://github.com/CumulusWeatherApp')
  }

  return (
    <div>
      <div>
        <h3 className="text-5xl text-lightBlue mb-5" id="projects">Projects</h3>
      </div>

      <br />

      <main className="flex flex-row flex-wrap bg-lightBlue justify-evenly items-center min-h-screen">

        <section className="p-5 flex items-center justify-around flex-col">
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              PageTrade
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full rounded-lg shadow-2xl bg-pageTrade bg-cover bg-center" onClick={handlePageTClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white cursor-pointer opacity-50" onClick={handlePageTGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section>

        <section className="p-5 flex items-center justify-around flex-col">
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Sherlock Stocks
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-sherlockStocks bg-cover" onClick={handleSherlockClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white cursor-pointer opacity-50" onClick={handleSherlockGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section>

        <section className="p-5 flex items-center justify-around flex-col">
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              Cumulus
          </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl bg-cumulus bg-cover" onClick={handleCumulusClick}></div>
            </div>
          </div>
          <div className="text-lightGray hover:text-white cursor-pointer opacity-50" onClick={handleCumulusGithubClick}>
            <FaGithubSquare size={30} />
          </div>
        </section>
      </main>
    </div>
  )
}
