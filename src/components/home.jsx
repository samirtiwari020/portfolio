import React from 'react'
import { ReactTyped } from 'react-typed'
import profile from '../assets/samir.png'

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white"
    >
      {/* left Image Section */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={profile}
          alt="Samir Tiwari"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-gray-700"
        />
      </div>
      {/* right Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-400">Samir Tiwari</span>
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4">
          <ReactTyped
            strings={[
              "Web Developer 💻",
              "Tech Enthusiast 🚀",
              "Problem Solver 🧩",
              "Future Software Engineer 🏆"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>

        <p className="mt-6 text-lg max-w-xl">
          I build modern, responsive, and interactive web experiences using React,
          Tailwind CSS, and backend technologies. Alongside web development,
          I actively do competitive programming and love solving challenging problems.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>


    </section>
  )
}

export default Home
