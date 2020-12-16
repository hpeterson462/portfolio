import React, { useState } from 'react';
import { SiLinkedin } from 'react-icons/si';
import { ImFileText } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLiClick = () => {
    window.location.replace('https://www.linkedin.com/in/hpeterson462/')
  }

  const handleGitClick = () => {
    window.location.replace('https://github.com/hpeterson462')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('gmail', process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then(result => {
        alert('Message Sent. I\'ll get back to you shortly', result.text);
      },
        error => {
          alert('An error ocurred, please try again', error.text)
        })
  }

  return (
    <div className="mt-20">
      <h3 className="text-5xl italic" id="contact">Contact</h3>

      <br />

      <div className="min-h-screen pt-5">
        <p className="text-4xl text-lightBlue p-2">Get in touch!</p>

        <div className="flex flex-row flex-wrap items-center justify-center p-5">
          <div className="flex flex-col w-2/5 bg-dots2 bg-contain bg-no-repeat bg-left-bottom pb-80">
            <div className="flex items-center justify-center p-5 pt-20">
              <div className="hover:text-red-400 hover:shadow-md cursor-pointer pr-1">
                <FaGithubSquare size={45} onClick={handleGitClick} />
              </div>
              <div className="hover:text-red-400 hover:shadow-md cursor-pointer">
                <SiLinkedin size={40} onClick={handleLiClick} />
              </div>
              <span className="p-2 text-2xl">
                /hpeterson462
            </span>
            </div>
            <div className="flex items-center justify-center">
              <div className="hover:text-red-400 hover:shadow-md cursor-pointer">
                <ImFileText size={40} />
              </div>
              <span className="pl-2 text-2xl">Resume</span>
            </div>
            <div className=""></div>
          </div>

          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <section className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label className="block text-darkGray mb-2 italic" htmlFor="email">
                  E-mail
              </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </section>
            <section className="flex flex-wrap mb-6">
              <div className="w-full px-3">
                <label className="block tracking-wide text-darkGray mb-2 italic">
                  Message
              </label>
                <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" type="text" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
              </div>
            </section>
            <button className="text-darkGray shadow hover:bg-lightBlue cursor-pointer focus:shadow-outline py-2 px-4 rounded" type="button">
              Send
          </button>
          </form>

        </div>
      </div>
    </div >
  )
}

