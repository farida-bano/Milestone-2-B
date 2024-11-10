
import React from 'react';

function Contact() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-black">Contact Me</h1>
      <p className="text-gray-700 mb-8">Feel free to reach out using the form below.</p>
      
      <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:border-pink-800 focus:ring-pink-800" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded focus:border-pink-800 focus:ring-pink-800" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded focus:border-pink-800 focus:ring-pink-800"></textarea>
        </label>
        <button type="submit" className="bg-pink-800 text-white py-2 px-4 rounded hover:bg-pink-600 transition-colors duration-300">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
