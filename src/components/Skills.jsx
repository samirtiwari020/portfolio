import React from "react";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-20  text-white"
        >
            <div className=" mx-auto px-6 bg-gray-800 rounded-2xl shadow-lg p-8 max-w-7xl w-full border border-gray-700">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-center mb-12">
                    ⚡ Skills & Competitive Programming
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">💻 Tech Stack</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {["C++", "JavaScript", "HTML", "CSS", "React.js", "MERN Stack", "APIs", "Git & GitHub"].map(
                                (skill, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-900 rounded-lg p-4 text-center hover:scale-105 transition-transform"
                                    >
                                        <span className="block text-lg font-semibold">{skill}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Competitive Programming */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">🏆 Competitive Programming</h3>
                        <div className="flex flex-wrap gap-4">
                            {/* Codeforces */}
                            <a
                                href="https://codeforces.com/profile/samir020"
                                target="_blank"
                                className="flex items-center gap-3 bg-gray-900 px-4 py-3 rounded-lg hover:scale-105 transition-transform"
                            >
                                <img
                                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png"
                                    alt="Codeforces"
                                    className="w-8 h-8"
                                />
                                <span className="text-lg font-medium">Codeforces</span>
                            </a>

                            {/* LeetCode */}
                            <a
                                href="https://leetcode.com/u/samirtiwari1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gray-900 px-4 py-3 rounded-lg hover:scale-105 transition-transform"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                                    alt="LeetCode"
                                    className="w-8 h-8"
                                />
                                <span className="text-lg font-medium">LeetCode</span>
                            </a>

                            {/* Codechef */}
                            <a
                                href="https://www.codechef.com/users/samir_020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gray-900 px-4 py-3 rounded-lg hover:scale-105 transition-transform"
                            >
                                <img
                                    src="https://codolio.com/icons/codechef_dark.png"
                                    alt="CodeChef"
                                    className="w-8 h-8"
                                />
                                <span className="text-lg font-medium">CodeChef</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
