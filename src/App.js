import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-400 font-sans">
        <nav className="bg-pink-800 p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
            <div>
              <Link to="/" className="text-white mr-4 hover:text-black">Home</Link>
              <Link to="/about" className="text-white mr-4 hover:text-black">About</Link>
              <Link to="/contact" className="text-white hover:text-black">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-pink-800 p-4 text-center text-white">
          &copy; 2024 My Portfolio. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;

