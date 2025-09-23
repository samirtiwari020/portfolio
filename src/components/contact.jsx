import React from "react";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";
import gmailIcon from "../assets/gmail.png";

const Contact = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Samir Tiwari</h2>
          <p className="text-sm">
            Passionate about building software solutions, exploring AI, and
            creating impactful projects. Always learning, always building. 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
          <ul className="space-y-2">
            <li>React & Next.js</li>
            <li>Node.js & Python</li>
            <li>PostgreSQL & MongoDB</li>
            <li>APIs & Cloud</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-5 mb-4">
            {/* Gmail */}
            <a
              href="mailto:samirtiwari020@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={gmailIcon} alt="Gmail" className="h-8 w-8" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/samir_tiwari1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/samir-tiwari-05933b336/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-8 w-8" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/samirtiwari020"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577
                     0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73
                     1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93
                     0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005
                     2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.913 1.235 3.222
                     0 4.61-2.805 5.628-5.476 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.877-.015 3.268 0 .32.192.693.8.576C20.565
                     22.295 24 17.795 24 12.5 24 5.87 18.627.5 12 .5z"
                />
              </svg>
            </a>
          </div>
          <p className="text-sm">
            Available for freelance projects and full-time opportunities.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Samir Tiwari.
        
        <div className="mt-3">
          <a href="#top" className="hover:text-white">
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
