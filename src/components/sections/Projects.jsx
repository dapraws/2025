import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Maenbal",
      description:
        "A platform delivering real-time UCL football updates, including live scores and highlights.",
      technologies: ["Flutter", "Dart", "GetX", "Firebase"],
      type: "Mobile App",
      gradient: "from-blue-500 to-cyan-400",
      hoverGradient: "hover:from-blue-600 hover:to-cyan-500",
      shadowColor: "rgba(59,130,246,0.3)",
      borderColor: "hover:border-blue-400/50",
      githubLink: "https://github.com/dapraws/Maenbal-Flutter",
      liveLink: "https://github.com/dapraws/Maenbal-Flutter",
    },
    {
      title: "OncoDetect",
      description:
        "A cancer detection app using advanced technology for early diagnosis.",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      type: "Mobile App",
      gradient: "from-purple-500 to-pink-400",
      hoverGradient: "hover:from-purple-600 hover:to-pink-500",
      shadowColor: "rgba(168,85,247,0.3)",
      borderColor: "hover:border-purple-400/50",
      githubLink: "https://github.com/dapraws/CancerDetectionApps-Kotlin",
      liveLink: "https://github.com/dapraws/CancerDetectionApps-Kotlin",
    },
    {
      title: "EcoMerch",
      description:
        "A marketplace to buy, sell, and donate recycled products, promoting sustainability.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      type: "Mobile App",
      gradient: "from-green-500 to-emerald-400",
      hoverGradient: "hover:from-green-600 hover:to-emerald-500",
      shadowColor: "rgba(34,197,94,0.3)",
      borderColor: "hover:border-green-400/50",
      githubLink: "https://github.com/dapraws/EcoMerch-Flutter",
      liveLink: "https://github.com/dapraws/EcoMerch-Flutter",
    },
    {
      title: "Tracky",
      description:
        "An IoT-powered app for tracking assets in real time, enhancing inventory management.",
      technologies: ["Android Studio", "Kotlin", "Firebase", "Retrofit"],
      type: "Mobile App",
      gradient: "from-orange-500 to-red-400",
      hoverGradient: "hover:from-orange-600 hover:to-red-500",
      shadowColor: "rgba(249,115,22,0.3)",
      borderColor: "hover:border-orange-400/50",
      githubLink: "https://github.com/C241-AM01/Tracky-Mobile",
      liveLink: "https://github.com/C241-AM01/Tracky-Mobile", // Replace with actual live demo if available
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Enhanced Projects Header */}
          <div className="text-center mb-16 cursor-hover">
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-500 hover:scale-105 transform glow-text">
              Featured Projects
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full transition-all duration-500 hover:w-32 group-hover:w-32"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </h2>
            <p className="text-gray-400 text-lg hover:text-gray-300 transition-colors duration-300 max-w-2xl mx-auto">
              Showcase of my technical expertise and creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-card cursor-card group relative overflow-hidden rounded-2xl border border-white/10 p-8 
                          hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:backdrop-blur-sm
                          hover:bg-gradient-to-br hover:from-white/5 hover:to-white/10 ${project.borderColor}
                          hover:shadow-[0_20px_50px_${project.shadowColor}]`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Project Icon/Type Indicator */}
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse mr-3`}
                    ></div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white/80 border border-white/20`}
                    >
                      {project.type.toUpperCase()}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent 
                                ${project.hoverGradient} transition-all duration-500 hover:scale-105 cursor-hover group-hover:drop-shadow-lg`}
                  >
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed hover:text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`skill-tag px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} bg-opacity-10 
                                  text-white/90 border border-white/20 hover:border-white/40 hover:bg-opacity-20 hover:scale-110 
                                  hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1
                                  hover:shadow-[0_8px_25px_${project.shadowColor}]`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`cursor-hover group/link flex items-center space-x-2 text-white/80 hover:text-white 
                                transition-all duration-300 hover:scale-105 hover:translate-x-2`}
                    >
                      <span className="font-medium">View Project</span>
                      <svg
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>

                    <div className="flex space-x-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-hover p-2 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        title="GitHub Repository"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-hover p-2 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                        title="Live Demo"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Animation Line */}
                <div
                  className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${project.gradient} 
                              group-hover:w-full transition-all duration-500 rounded-full`}
                ></div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <a
              href="https://github.com/dapraws" // Replace with your GitHub profile
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover group inline-flex items-center space-x-3 px-8 py-4 rounded-full border-2 border-white/20 
                       hover:border-white/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1
                       hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] backdrop-blur-sm"
            >
              <span className="text-lg font-medium">View All Projects</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
