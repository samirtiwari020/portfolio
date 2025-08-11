import React from "react";
import netflix from "../assets/netflix.png";
import portfolio from "../assets/portfolio.png";
import weather from "../assets/weather.png";
import tictactoe from "../assets/tic-tac-toe.png";
import rps from "../assets/r-p-s.png";
import bmi from "../assets/bmi-calculator.png";

const projects = [

  {
    name: "Portfolio Website",
    img: portfolio,
    desc: "My personal portfolio built with React and Tailwind CSS showcasing about me,skills and projects.",
    link: "https://github.com/samirtiwari020/portfolio",
  },
  {
    name: "Weather App",
    img: weather,
    desc: "Real-time weather updates with OpenWeather API and geolocation support.",
    link: "https://github.com/samirtiwari020/weather-app",
  },
  {
    name: "Tic Tac Toe",
    img: tictactoe,
    desc: "A simple tic-tac-toe game built with React, Javascript and Tailwind CSS",
    link: "https://github.com/samirtiwari020/tic-tac-toe-react",
  },
  {
    name: "Rock Paper Scissors",
    img: rps,
    desc: "A Rock Paper Scissors game built with HTML, Tailwind CSS and Javascript",
    link: "https://github.com/samirtiwari020/rock-paper-scissor",
  },
  {
    name: "Netflix-clone",
    img: netflix,
    desc: "A clone of the popular Netflix platform built with HTML and CSS.",
    link: "https://github.com/samirtiwari020/netflix-clone",
    
  },
  {
    name: "BMI Calculator",
    img: bmi,
    desc: "Calculate and track your Body Mass Index (BMI) with this simple tool.",
    link: "https://github.com/samirtiwari020/bmi-calculator",
  },
];

const Projects = () => {
  return (
    <section className="py-20  text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6  bg-gray-800 rounded-2xl shadow-lg p-8 w-full border border-gray-700">

        <h2 className="text-4xl font-bold text-center mb-8">🚀 My Projects</h2>


        <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pb-4">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="relative min-w-[300px] group rounded-lg overflow-hidden shadow-lg"
            >

              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover"
              />

              <div className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </div>


              <div className="bg-gray-900 py-3 text-center">
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
