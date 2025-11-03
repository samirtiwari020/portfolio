import React, { useEffect, useState } from "react";

const Skills = () => {
  const [cfStats, setCfStats] = useState({ rating: "-", maxRating: "-", contests: "-" });
  const [lcStats, setLcStats] = useState({ rating: "-", contests: "-" });
  const [ccStats, setCcStats] = useState({ rating: "-", maxRating: "-", contests: "-" });

  // Fetch Codeforces stats
  useEffect(() => {
    const fetchCodeforces = async () => {
      try {
        const res = await fetch("https://codeforces.com/api/user.rating?handle=samir020");
        const data = await res.json();
        const contests = data.result.length;
        const latest = data.result[data.result.length - 1]?.newRating || "-";

        const res2 = await fetch("https://codeforces.com/api/user.info?handles=samir020");
        const data2 = await res2.json();
        const maxRating = data2.result[0]?.maxRating || "-";

        setCfStats({ rating: latest, maxRating, contests });
      } catch (err) {
        console.error("Error fetching Codeforces:", err);
      }
    };
    fetchCodeforces();
  }, []);

  // Fetch LeetCode stats
  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        const res = await fetch("https://leetcode.com/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query {
                userContestRanking(username: "samirtiwari1") {
                  rating
                  attendedContestsCount
                }
              }
            `,
          }),
        });
        const { data } = await res.json();
        setLcStats({
          rating: data?.userContestRanking?.rating?.toFixed(2) || "-",
          contests: data?.userContestRanking?.attendedContestsCount || "-",
        });
      } catch (err) {
        console.error("Error fetching LeetCode:", err);
      }
    };
    fetchLeetCode();
  }, []);

  // Placeholder CodeChef stats (API not official)
  useEffect(() => {
    setCcStats({ rating: "1468", maxRating: "1492", contests: "13" });
  }, []);

  return (
    <section id="skills" className="py-20 text-white">
      <div className="mx-auto px-6 bg-gray-800 rounded-2xl shadow-lg p-8 max-w-7xl w-full border border-gray-700">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          ⚡ Skills & Competitive Programming
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">💻 Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "C++",
                "JavaScript",
                "HTML",
                "CSS",
                "React.js",
                "MERN Stack",
                "APIs",
                "Git & GitHub",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg p-4 text-center hover:scale-105 transition-transform"
                >
                  <span className="block text-lg font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Programming */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">🏆 Competitive Programming</h3>
            <div className="flex flex-col gap-4">
              {/* Codeforces */}
              <a
                href="https://codeforces.com/profile/samir020"
                target="_blank"
                className="flex items-center justify-between bg-gray-900 px-5 py-4 rounded-lg hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo.png"
                    alt="Codeforces"
                    className="w-10 h-10"
                  />
                  <span className="text-xl font-medium">Codeforces</span>
                </div>
                <div className="text-right text-sm">
                  <p>⭐ Rating: {cfStats.rating}</p>
                  <p>📈 Max: {cfStats.maxRating}</p>
                  <p>🏁 Contests: {cfStats.contests}</p>
                </div>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/samirtiwari1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-900 px-5 py-4 rounded-lg hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    className="w-10 h-10 bg-white rounded-full p-1"
                  />
                  <span className="text-xl font-medium">LeetCode</span>
                </div>
                <div className="text-right text-sm">
                  <p>⭐ Rating: {lcStats.rating}</p>
                  <p>🏁 Contests: {lcStats.contests}</p>
                </div>
              </a>

              {/* CodeChef */}
              <a
                href="https://www.codechhef.com/users/samir_20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-900 px-5 py-4 rounded-lg hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <img
                    src="https://codolio.com/icons/codechef_dark.png"
                    alt="CodeChef"
                    className="w-10 h-10"
                  />
                  <span className="text-xl font-medium">CodeChef</span>
                </div>
                <div className="text-right text-sm">
                  <p>⭐ Rating: {ccStats.rating}</p>
                  <p>📈 Max: {ccStats.maxRating}</p>
                  <p>🏁 Contests: {ccStats.contests}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
