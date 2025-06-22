import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "Vite",
    "TailwindCSS",
    "TypeScript",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Python",
    "MongoDB",
    "Postman",
  ];

  const mobileSkills = [
    "Flutter",
    "Kotlin",
    "Firebase",
    "GetX",
    "Android Studio",
  ];

  const aiMlSkills = [
    "Google Colab",
    "PyTorch",
    "LLMs",
    "Transformers",
    "QLoRA",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12 cursor-hover">
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-500 hover:to-pink-500 transition-all duration-500 hover:scale-105 transform glow-text">
              About Me
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 hover:w-24 group-hover:w-24"></div>
            </h2>
            <p className="text-gray-400 text-lg hover:text-gray-300 transition-colors duration-300 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with modern
              technologies{" "}
            </p>
          </div>

          <div className="main-card cursor-card rounded-xl p-8 border-white/10 border hover:-translate-y-2 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/20 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-blue-500/5 hover:backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="relative text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 bg-clip-text text-transparent hover:from-blue-400 hover:via-cyan-500 hover:to-pink-400 transition-all duration-500 hover:scale-105 transform cursor-hover">
                🛠️ Skills & Technologies
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 hover:w-20 group-hover:w-20"></div>
              </h3>

              <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Development */}
              <div className="frontend-card cursor-card rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 hover:border-blue-400/50 border border-white/5 hover:shadow-xl hover:shadow-blue-500/25 hover:backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                  <h4 className="text-xl font-bold cursor-hover hover:text-blue-300 transition-colors">
                    Frontend Development
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="frontend-skill skill-tag bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 
                                    hover:shadow-[0_4px_16px_rgba(59,130,246,0.4)] hover:text-blue-200 transition-all duration-200 hover:scale-110 cursor-pointer hover:border hover:border-blue-400/50
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Development */}
              <div className="backend-card cursor-card rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 hover:border-green-400/50 border border-white/5 hover:shadow-xl hover:shadow-green-500/25 hover:backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse delay-75"></div>
                  <h4 className="text-xl font-bold cursor-hover hover:text-green-300 transition-colors">
                    Backend Development
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="backend-skill skill-tag bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/30 
                                    hover:shadow-[0_4px_16px_rgba(34,197,94,0.4)] hover:text-green-200 transition-all duration-200 hover:scale-110 cursor-pointer hover:border hover:border-green-400/50
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile Development */}
              <div className="mobile-card cursor-card rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-yellow-500/10 hover:to-orange-500/10 hover:border-yellow-400/50 border border-white/5 hover:shadow-xl hover:shadow-yellow-500/25 hover:backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse delay-150"></div>
                  <h4 className="text-xl font-bold cursor-hover hover:text-yellow-300 transition-colors">
                    Mobile Development
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mobileSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="mobile-skill skill-tag bg-yellow-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/30 
                                    hover:shadow-[0_4px_16px_rgba(99,102,241,0.4)] hover:text-yellow-200 transition-all duration-200 hover:scale-110 cursor-pointer hover:border hover:border-yellow-400/50
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI/ML Development */}
              <div className="aiml-card cursor-card rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-rose-500/10 hover:border-pink-400/50 border border-white/5 hover:shadow-xl hover:shadow-pink-500/25 hover:backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-pulse delay-200"></div>
                  <h4 className="text-xl font-bold cursor-hover hover:text-pink-300 transition-colors">
                    AI & Machine Learning
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aiMlSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="aiml-skill skill-tag bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/30 
                                    hover:shadow-[0_4px_16px_rgba(236,72,153,0.4)] hover:text-pink-200 transition-all duration-200 hover:scale-110 cursor-pointer hover:border hover:border-pink-400/50
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Enhanced Education Card */}
            <div className="education-card cursor-card p-6 rounded-xl border-white/10 border hover:-translate-y-2 transition-all duration-300 hover:border-purple-400/50 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10 hover:shadow-xl hover:shadow-purple-500/25 hover:backdrop-blur-sm">
              {/* Education Header */}
              <div className="text-center mb-6">
                <h3 className="relative text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-500 hover:to-indigo-400 transition-all duration-500 hover:scale-105 transform cursor-hover">
                  🎓 Education
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-500 hover:w-16 group-hover:w-16"></div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-purple-600/10 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </h3>

                {/* Education subtitle */}
                <p className="text-gray-400 text-xs hover:text-gray-300 transition-colors duration-300">
                  Academic foundation & learning journey
                </p>
              </div>

              {/* Education Content */}
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
                    <div className="flex-1">
                      <span className="education-item skill-tag bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm hover:bg-purple-500/30 hover:shadow-[0_4px_16px_rgba(168,85,247,0.4)] hover:text-purple-200 transition-all duration-200 hover:scale-105 cursor-pointer hover:border hover:border-purple-400/50 mb-2 inline-block">
                        Bachelor's Degree in Informatics
                      </span>
                      <p className="text-xs text-gray-400 mb-1">
                        Telkom University (2021-2025)
                      </p>
                      <p className="text-gray-300 text-sm hover:text-gray-200 transition-colors">
                        - Relevant Coursework: Data Structures, Object-oriented
                        Programming (OOP), Platform-based Application, Machine
                        Learning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 animate-pulse delay-75"></div>
                    <div className="flex-1">
                      <span className="education-item skill-tag bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-500/30 hover:shadow-[0_4px_16px_rgba(236,72,153,0.4)] hover:text-pink-200 transition-all duration-200 hover:scale-105 cursor-pointer hover:border hover:border-pink-400/50 mb-2 inline-block">
                        Bangkit Academy Graduate
                      </span>
                      <p className="text-xs text-gray-400 mb-1">(2024)</p>
                      <p className="text-gray-300 text-sm hover:text-gray-200 transition-colors">
                        - Top 10% Android Development Cohort (Distinction
                        Graduate)
                        <br />- Developed Tracky in Company Track Capstone with
                        Megalogic
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Work Experience Card */}
            <div className="experience-card cursor-card p-6 rounded-xl border-white/10 border hover:-translate-y-2 transition-all duration-300 hover:border-orange-400/50 hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-red-500/10 hover:shadow-xl hover:shadow-orange-500/25 hover:backdrop-blur-sm">
              {/* Work Experience Header */}
              <div className="text-center mb-6">
                <h3 className="relative text-xl md:text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent hover:from-red-400 hover:via-orange-500 hover:to-yellow-400 transition-all duration-500 hover:scale-105 transform cursor-hover">
                  💼 Work Experience
                  {/* Animated underline */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-500 hover:w-16 group-hover:w-16"></div>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-orange-600/10 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </h3>

                {/* Work experience subtitle */}
                <p className="text-gray-400 text-xs hover:text-gray-300 transition-colors duration-300">
                  Professional journey & achievements
                </p>
              </div>

              {/* Work Experience Content */}
              <div className="space-y-4">
                <div className="group">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
                    <div className="flex-1">
                      <span className="experience-item skill-tag bg-orange-500/10 text-orange-400 py-1 px-3 rounded-full text-sm hover:bg-orange-500/30 hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)] hover:text-orange-200 transition-all duration-200 hover:scale-105 cursor-pointer hover:border hover:border-orange-400/50 mb-2 inline-block">
                        ML/AI Engineer at Telkom Indonesia
                      </span>
                      <p className="text-xs text-gray-400 mb-2">
                        (2025 - Present)
                      </p>
                      <p className="text-gray-300 text-sm hover:text-gray-200 transition-colors">
                        Developed Robotic Process Automation (RPA) solutions to
                        streamline and automate repetitive manual tasks using
                        Power Automate, SAP, Office Scripts, and Python.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 animate-pulse delay-75"></div>
                    <div className="flex-1">
                      <span className="experience-item skill-tag bg-red-500/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-500/30 hover:shadow-[0_4px_16px_rgba(239,68,68,0.4)] hover:text-red-200 transition-all duration-200 hover:scale-105 cursor-pointer hover:border hover:border-red-400/50 mb-2 inline-block">
                        Mobile Developer at PLN Pusharlis UP2W IV
                      </span>
                      <p className="text-xs text-gray-400 mb-2">(2024)</p>
                      <p className="text-gray-300 text-sm hover:text-gray-200 transition-colors">
                        Developed Mobile App for warehouse inventory dashboard
                        using Flutter, GetX, and Firebase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
