import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import babyMe from './assets/babyMe.png';
import heatTransfer from './assets/heatTransfer.png';
import pageTrade from './assets/pageTrade.png';
import sherlockStocks from './assets/sherlockStocks.png';
import cumulus from './assets/cumulus.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { IoIosArrowDown } from "react-icons/io";

export default function Projects() {

  const project = [
    {
      title: 'BabyMe',
      image: babyMe,
      websiteLink: 'https://babyme.netlify.app/',
      gitHubLink: 'https://github.com/hpeterson462/BabyMe',
    },
    {
      title: 'Heat Transfer Systems',
      image: heatTransfer,
      websiteLink: 'https://heattransfersystems.netlify.app/',
      gitHubLink: 'https://github.com/hpeterson462/heattransfersystemsinc',
    },
    {
      title: 'PageTrade',
      image: pageTrade,
      websiteLink: 'https://page-trade.netlify.app/',
      gitHubLink: 'https://github.com/NoShelfControl',
    },
    {
      title: 'SherlockStocks',
      image: sherlockStocks,
      websiteLink: 'https://sherlockstocks.netlify.app/',
      gitHubLink: 'https://github.com/Sherlock-Stocks',
    },
    {
      title: 'Cumulus',
      image: cumulus,
      websiteLink: 'https://cumuli.netlify.app/',
      gitHubLink: 'https://github.com/CumulusWeatherApp',
    },
  ];

  const displayProjectCards = project.map(
    (project, index) =>
      <ScrollAnimation
        animateIn="fadeIn"
        delay="1"
        key={project.title + index}
      >
        <section className="p-10 flex items-center justify-around flex-col">
          <div className="mb-5 animate-bounce text-lightGray">
            <IoIosArrowDown size={30} />
          </div>
          <div className="h-52 w-52 relative cursor-pointer mb-5">
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
              {project.title}
            </div>
            <div className="absolute inset-0 transform hover:scale-75 transition duration-300">
              <a
                className="h-full w-full rounded-lg shadow-2xl bg-cover bg-center ext-link"
                target="_blank"
                rel="noreferrer"
                href={project.websiteLink}
              >
                <img
                  className="h-full w-full bg-white rounded-lg shadow-2xl bg-babyMe bg-cover"
                  src={project.image}
                  alt={`${project.title}`}
                />
              </a>
            </div>
          </div>
          <a
            className="ext-link"
            target="_blank"
            rel="noreferrer"
            href={project.gitHubLink}
          >
            <div className="text-lightGray hover:text-white transition duration-500 ease-in-out cursor-pointer opacity-50">

              <FaGithubSquare size={30} />
            </div>
          </a>
        </section>
      </ScrollAnimation>
  )

  return (
    <div>
      <div>
        <ScrollAnimation
          animateIn="fadeIn"
        >
          <h3
            className="text-5xl text-lightBlue mb-5 font-header"
            id="projects"
          >
            Projects
          </h3>
        </ScrollAnimation>
      </div>

      <br />

      <main className="flex flex-row flex-wrap bg-lightBlue justify-evenly items-center min-h-screen italic font-body">

        {displayProjectCards}

      </main>
    </div>
  )
}
