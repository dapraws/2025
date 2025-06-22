import { useState, useEffect } from "react";
import profilePhoto from "/src/assets/fotodarrel2025.svg";

export const Home = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const titles = [
    "Darrel Prawira!",
    "a Programmer",
    "a Problem Solver",
    "a Tech Enthusiast",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-8 md:py-16 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Image Section - First on mobile, stays first on desktop */}
        <div className="flex justify-center lg:justify-end order-1 pt-8 md:pt-0">
          <div className="relative group">
            <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-400/20 shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
              <img
                src={profilePhoto}
                alt="Darrel Prawira"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  console.log("Image failed to load, using fallback");
                  // Fallback to placeholder
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />

              {/* Fallback placeholder (hidden by default) */}
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 items-center justify-center hidden">
                <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  DP
                </div>
              </div>

              {/* Fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Subtle border glow */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/20 pointer-events-none"></div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-400/20 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Text Content - Second on mobile, second on desktop */}
        <div className="text-center lg:text-left z-10 order-2">
          {/* Enhanced Rolling Title */}
          <div className="mb-1 lg:mb-2 min-h-[5rem] md:min-h-[6rem] lg:min-h-[6rem]">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent glow-text">
                Hi, I'm{" "}
              </span>
              <br className="block lg:hidden" />
              <span
                className={`inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent title-transition min-h-[1.2em] ${
                  isVisible ? "title-enter" : "title-exit"
                }`}
                key={currentTitleIndex}
                style={{
                  display: "inline-block",
                  minWidth: "250px",
                  textAlign: "center",
                }}
              >
                {titles[currentTitleIndex]}
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-base md:text-lg mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed intro-text">
            I'm a Computer Science Fresh Graduate who loves tech. <br />
            My goal is to build software that simplifies complexity, enhances
            user experiences, and pushes the boundaries of what technology can
            achieve.
          </p>

          {/* CTA Buttons with enhanced animations */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 lg:gap-4 intro-text">
            <a
              href="#projects"
              className="group bg-blue-500 text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59, 130, 246, 0.4)] transform hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="group border border-blue-500/50 text-blue-500 py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 hover:border-blue-400 transform hover:scale-105"
            >
              <span className="group-hover:text-blue-400 transition-colors duration-300">
                Contact Me
              </span>
            </a>
          </div>

          {/* Social Links with animation */}
          <div className="mt-6 lg:mt-8 flex justify-center lg:justify-start space-x-6 intro-text">
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
