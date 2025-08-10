import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-7xl w-full border border-gray-700">
        {/* About Me Heading */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">
          About Me
        </h1>

        {/* About Me Text */}
        <p className="text-lg text-gray-300 leading-relaxed text-center mb-10">
          I’m <span className="text-blue-400 font-semibold">Samir Tiwari</span>, 
          a 2nd-year Electrical Engineering student at{" "}
          <span className="text-green-400 font-medium">NIT Raipur</span> from 
          Prayagraj, Uttar Pradesh.
          <br />
          I’m passionate about{" "}
          <span className="text-yellow-400 font-medium">
            Competitive Programming
          </span>, DSA, and Web Development — building modern, responsive apps 
          with <span className="text-cyan-400">React</span>,{" "}
          <span className="text-teal-400">Tailwind CSS</span>, and backend 
          technologies.
          <br />
          I love solving challenging problems, exploring AI/LLM integration, 
          and creating impactful digital solutions. I enjoy collaborating on 
          innovative projects, participating in hackathons, and contributing 
          to open-source initiatives.
        </p>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            🎓 Education
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-700">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-3 border border-gray-600">Qualification</th>
                  <th className="p-3 border border-gray-600">Institution</th>
                  <th className="p-3 border border-gray-600">Percentage/CGPA</th>
                  <th className="p-3 border border-gray-600">Year</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="p-3 border border-gray-700">Class 10</td>
                  <td className="p-3 border border-gray-700">Maharishi Vidya Mandir</td>
                  <td className="p-3 border border-gray-700">97%</td>
                  <td className="p-3 border border-gray-700">2021-2022</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="p-3 border border-gray-700">Class 12</td>
                  <td className="p-3 border border-gray-700">Maharishi Ved Vyas Academy</td>
                  <td className="p-3 border border-gray-700">91%</td>
                  <td className="p-3 border border-gray-700">20223-2024</td>
                </tr>
                <tr className="hover:bg-gray-700 transition-colors">
                  <td className="p-3 border border-gray-700">B.Tech (Electrical Engineering)</td>
                  <td className="p-3 border border-gray-700">NIT Raipur</td>
                  <td className="p-3 border border-gray-700">8.7</td>
                  <td className="p-3 border border-gray-700">2023–2028</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


