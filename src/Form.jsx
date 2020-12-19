import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Form() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then(result => {
        alert('Message Sent. I\'ll get back to you shortly', result.text);
      },
        error => {
          alert('An error ocurred, please try again', error.text)
        });
  }

  return (
    <div className="w-4/12">
      <form>
        < section className="flex flex-wrap mb-2" >
          < div className="w-full px-3" >
            <label className="block text-darkGray mb-3 italic text-lg" htmlFor="email">
              E-mail
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </div >
        </section >
        <section className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label className="block tracking-wide text-darkGray mb-3 italic text-lg">
              Message
            </label>
            <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" type="text" value={message} onChange={e => setMessage(e.target.value)} ></textarea>
          </div>
        </section>
        <button className="text-darkGray shadow italic hover:bg-lightBlue cursor-pointer focus:shadow-outline focus:outline-none py-1 px-4 rounded transition duration-500 ease-in-out" onClick={handleClick}>
          Send
        </button>
      </form >
    </div >
  )
}
