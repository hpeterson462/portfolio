import React from 'react';
import emailjs from 'emailjs-com';

export default function Form() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <div>
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
  )
}
