import React from 'react';

function Home() {
  return (
    <section className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-black">Welcome to My Portfolio</h1>
      <p className="text-gray-700 mb-8">I'm a web developer passionate about creating web experiences.</p>
      <a href="/about" className="bg-pink-700 text-white py-2 px-4 rounded hover:to-pink-500 transition-colors duration-300">
        Learn More About Me
      </a>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-2 text-black">Project 1</h2>
          <p className="text-gray-600">Description of the project.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-2 text-black">Project 2</h2>
          <p className="text-gray-600">Description of the project.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-2 text-black">Project 3</h2>
          <p className="text-gray-600">Description of the project.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
