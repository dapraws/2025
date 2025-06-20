import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Leading development of scalable web applications and mentoring junior developers. Architected microservices infrastructure that improved system performance by 40%.",
      achievements: [
        "Led a team of 5 developers in building a customer portal serving 50K+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Optimized database queries resulting in 35% faster page load times",
        "Mentored 3 junior developers, 2 of whom received promotions",
      ],
      technologies: [
        "React",
        "Node.js",
        "AWS",
        "PostgreSQL",
        "Docker",
        "TypeScript",
      ],
      gradient: "from-blue-500 to-cyan-400",
      hoverGradient: "hover:from-blue-600 hover:to-cyan-500",
      shadowColor: "rgba(59,130,246,0.3)",
      borderColor: "hover:border-blue-400/50",
      iconColor: "text-blue-400",
    },
    {
      company: "InnovateX Startup",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      type: "Full-time",
      description:
        "Developed responsive web applications and collaborated with UX designers to create intuitive user interfaces. Contributed to the company's growth from 10 to 100+ employees.",
      achievements: [
        "Built 15+ responsive components used across multiple products",
        "Improved mobile user experience leading to 25% increase in engagement",
        "Implemented accessibility standards achieving WCAG 2.1 AA compliance",
        "Reduced bundle size by 30% through code optimization",
      ],
      technologies: [
        "Vue.js",
        "JavaScript",
        "SASS",
        "Firebase",
        "Figma",
        "Jest",
      ],
      gradient: "from-purple-500 to-pink-400",
      hoverGradient: "hover:from-purple-600 hover:to-pink-500",
      shadowColor: "rgba(168,85,247,0.3)",
      borderColor: "hover:border-purple-400/50",
      iconColor: "text-purple-400",
    },
    {
      company: "Digital Agency Pro",
      position: "Junior Web Developer",
      duration: "2019 - 2020",
      location: "Remote",
      type: "Full-time",
      description:
        "Developed client websites and maintained existing web applications. Gained experience working with diverse clients across various industries.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Improved website performance scores to 90+ on PageSpeed Insights",
        "Integrated third-party APIs for payment processing and analytics",
        "Maintained 99.5% client satisfaction rating",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "WordPress",
        "MySQL",
      ],
      gradient: "from-green-500 to-emerald-400",
      hoverGradient: "hover:from-green-600 hover:to-emerald-500",
      shadowColor: "rgba(34,197,94,0.3)",
      borderColor: "hover:border-green-400/50",
      iconColor: "text-green-400",
    },
    {
      company: "FreelanceHub",
      position: "Freelance Developer",
      duration: "2018 - 2019",
      location: "Remote",
      type: "Contract",
      description:
        "Worked on various freelance projects ranging from simple landing pages to complex web applications. Built strong client relationships and project management skills.",
      achievements: [
        "Completed 30+ freelance projects with 5-star ratings",
        "Developed e-commerce solutions generating $500K+ in sales",
        "Created automated workflows saving clients 20+ hours per week",
        "Built long-term partnerships with 5 recurring clients",
      ],
      technologies: ["React", "Express", "MongoDB", "Stripe", "Heroku", "Git"],
      gradient: "from-orange-500 to-red-400",
      hoverGradient: "hover:from-orange-600 hover:to-red-500",
      shadowColor: "rgba(249,115,22,0.3)",
      borderColor: "hover:border-orange-400/50",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Enhanced Experience Header */}
          <div className="text-center mb-16 cursor-hover">
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-orange-500 hover:to-red-500 transition-all duration-500 hover:scale-105 transform">
              Professional Experience
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500 hover:w-40 group-hover:w-40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-red-500/20 to-pink-500/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </h2>
            <p className="text-gray-400 text-lg hover:text-gray-300 transition-colors duration-300 max-w-2xl mx-auto">
              A journey through my professional growth and key contributions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 opacity-30 hidden md:block"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`experience-card cursor-card group relative overflow-hidden rounded-2xl border border-white/10 p-8 md:ml-20
                            hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:backdrop-blur-sm
                            hover:bg-gradient-to-br hover:from-white/5 hover:to-white/10 ${exp.borderColor}
                            hover:shadow-[0_20px_50px_${exp.shadowColor}]`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[4.5rem] top-8 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} 
                                  border-4 border-black shadow-lg hidden md:block animate-pulse`}
                  ></div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-full"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.gradient} animate-pulse mr-3`}
                          ></div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.gradient} bg-opacity-10 text-white/80 border border-white/20`}
                          >
                            {exp.type.toUpperCase()}
                          </span>
                        </div>

                        <h3
                          className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent 
                                        ${exp.hoverGradient} transition-all duration-500 hover:scale-105 cursor-hover group-hover:drop-shadow-lg`}
                        >
                          {exp.position}
                        </h3>

                        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-gray-400 mb-4">
                          <div className="flex items-center space-x-2 mb-2 md:mb-0">
                            <svg
                              className={`w-5 h-5 ${exp.iconColor}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                              />
                            </svg>
                            <span className="font-semibold text-white/90">
                              {exp.company}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mb-2 md:mb-0">
                            <svg
                              className={`w-4 h-4 ${exp.iconColor}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-gray-400">
                        <svg
                          className={`w-4 h-4 ${exp.iconColor}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-medium text-white/90">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed hover:text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-4 text-white/90 flex items-center">
                        <svg
                          className={`w-5 h-5 mr-2 ${exp.iconColor}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start space-x-3 group/achievement"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mt-2 flex-shrink-0 animate-pulse`}
                            ></div>
                            <p className="text-gray-300 text-sm hover:text-gray-200 transition-colors duration-300 group-hover/achievement:text-white">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`skill-tag px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.gradient} bg-opacity-10 
                                    text-white/90 border border-white/20 hover:border-white/40 hover:bg-opacity-20 hover:scale-110 
                                    hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1
                                    hover:shadow-[0_8px_25px_${exp.shadowColor}]`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Animation Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${exp.gradient} 
                                  group-hover:w-full transition-all duration-500 rounded-full`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="cursor-hover group inline-flex items-center space-x-3 px-8 py-4 rounded-full border-2 border-white/20 
                       hover:border-white/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-1
                       hover:shadow-[0_10px_30px_rgba(255,255,255,0.1)] backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 transform group-hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-lg font-medium">Download Resume</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
