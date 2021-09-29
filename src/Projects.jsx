import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
//import babyMe from './assets/babyMe.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { IoIosArrowDown } from "react-icons/io";

export default function Projects() {

  const projects = [
    {
      title: 'BabyMe',
      image: 'babyMe',
      websiteLink: 'https://babyme.netlify.app/',
      gitHubLink: 'https://github.com/hpeterson462/BabyMe',
    },
    {
      title: 'PageTrade',
      image: 'bg-pageTrade',
      websiteLink: 'https://page-trade.netlify.app/',
      gitHubLink: 'https://github.com/NoShelfControl',
    },
    {
      title: 'SherlockStocks',
      image: 'bg-sherlockStocks',
      websiteLink: 'https://sherlockstocks.netlify.app/',
      gitHubLink: 'https://github.com/Sherlock-Stocks',
    },
    {
      title: 'Cumulus',
      image: 'bg-cumulus',
      websiteLink: 'https://cumuli.netlify.app/',
      gitHubLink: 'https://github.com/CumulusWeatherApp',
    },
  ]

  const displayProjectCards = projects.map(
    (projects, index) =>
      <ScrollAnimation
        animateIn="fadeIn"
        delay="1"
        key={projects.title + index}
      >
        <section className="p-10 flex items-center justify-around flex-col">
          <div className="mb-5 animate-bounce text-lightGray">
            <IoIosArrowDown size={30} />
          </div>
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              {projects.title}
            </div>
            <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
              <a className="h-full w-full rounded-lg shadow-2xl bg-cover bg-center">
                <img src={projects.image} alt={`${projects.title}`} />
              </a>
              <a
                className="ext-link"
                target="_blank"
                rel="noreferrer"
                href={projects.websiteLink}
              >
              </a>
            </div>
          </div>
          <a
            className="ext-link"
            target="_blank"
            rel="noreferrer"
            href={projects.gitHubLink}
          >
            <div className="text-lightGray hover:text-white transition duration-500 ease-in-out cursor-pointer opacity-50">

              <FaGithubSquare size={30} />
            </div>
          </a>
        </section>
      </ScrollAnimation>
  )

  // const handlePageTClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://page-trade.netlify.app/')
  // }

  // const handlePageTGithubClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://github.com/NoShelfControl')
  // }

  // const handleSherlockClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://sherlockstocks.netlify.app/')
  // }

  // const handleSherlockGithubClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://github.com/Sherlock-Stocks')
  // }

  // const handleBabyMeGithubClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://github.com/hpeterson462/BabyMe')
  // }

  // const handleBabyMeClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://babyme.netlify.app/')
  // }

  // const handleCumulusGithubClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://github.com/CumulusWeatherApp')
  // }

  // const handleCumulusClick = (e) => {
  //   e.preventDefault();
  //   window.open('https://cumuli.netlify.app/')
  // }

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
        <ScrollAnimation
          animateIn="fadeIn"
        >
          <h3 className="text-5xl text-lightBlue mb-5 font-header" id="projects">
            Projects
          </h3>
        </ScrollAnimation>
      </div>

      <br />

      <main className="flex flex-row flex-wrap bg-lightBlue justify-evenly items-center min-h-screen italic font-body">

        {displayProjectCards}

        {/* <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
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
        </ScrollAnimation> */}

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

        {/* <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
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
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
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
        </ScrollAnimation> */}

        {/* <ScrollAnimation
          animateIn="fadeIn"
          delay="1"
        >
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
        </ScrollAnimation> */}

      </main>
    </div>
  )
}
