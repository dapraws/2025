import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dapraws",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      gradient: "from-gray-400 to-gray-600",
      hoverColor: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/dapraws",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      gradient: "from-blue-400 to-blue-600",
      hoverColor: "hover:text-blue-400",
    },
    // {
    //   name: "Twitter",
    //   url: "https://twitter.com/",
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    //     </svg>
    //   ),
    //   gradient: "from-cyan-400 to-blue-500",
    //   hoverColor: "hover:text-cyan-400",
    // },
    {
      name: "Instagram",
      url: "https://instagram.com/dapraws",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.021.088 5.347.222 4.73.42a5.493 5.493 0 00-1.988 1.293c-.619.62-.972 1.3-1.293 1.989C1.222 5.347.087 6.021.048 7.041.013 7.989 0 8.396 0 12.017c0 3.624.013 4.09.048 5.106.04 1.017.174 1.638.372 2.276a5.493 5.493 0 001.293 1.988c.62.619 1.3.972 1.989 1.293.638.198 1.259.332 2.276.372C7.989 23.987 8.396 24 12.017 24c3.624 0 4.09-.013 5.106-.048 1.017-.04 1.638-.174 2.276-.372a5.493 5.493 0 001.988-1.293c.619-.62.972-1.3 1.293-1.989.198-.638.332-1.259.372-2.276C23.987 16.09 24 15.624 24 12.017c0-3.624-.013-4.09-.048-5.106-.04-1.017-.174-1.638-.372-2.276a5.493 5.493 0 00-1.293-1.988c-.62-.619-1.3-.972-1.989-1.293C16.638.222 16.017.087 15.106.048 14.09.013 13.624 0 12.017 0zm0 2.16c3.552 0 3.974.013 5.38.048.766.035 1.204.166 1.486.275.374.145.64.318.92.598.28.28.453.546.598.92.109.282.24.72.275 1.486.035 1.406.048 1.828.048 5.38 0 3.552-.013 3.974-.048 5.38-.035.766-.166 1.204-.275 1.486-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.109-.72.24-1.486.275-1.406.035-1.828.048-5.38.048-3.552 0-3.974-.013-5.38-.048-.766-.035-1.204-.166-1.486-.275a2.478 2.478 0 01-.92-.598 2.478 2.478 0 01-.598-.92c-.109-.282-.24-.72-.275-1.486-.035-1.406-.048-1.828-.048-5.38 0-3.552.013-3.974.048-5.38.035-.766.166-1.204.275-1.486.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.109.72-.24 1.486-.275 1.406-.035 1.828-.048 5.38-.048z" />
          <path d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zm0 10.18a4.001 4.001 0 110-8.003 4.001 4.001 0 010 8.003zm7.846-10.405a1.441 1.441 0 11-2.883 0 1.441 1.441 0 012.883 0z" />
        </svg>
      ),
      gradient: "from-pink-400 to-purple-600",
      hoverColor: "hover:text-pink-400",
    },
    {
      name: "Email",
      url: "mailto:darrelprawira26@gmail.com",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-green-400 to-emerald-600",
      hoverColor: "hover:text-green-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Consulting",
    "API Development",
    "Cloud Solutions",
  ];

  return (
    <section id="contact">
      <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="cursor-hover text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent hover:from-cyan-400 hover:via-blue-500 hover:to-pink-500 transition-all duration-500 hover:scale-105 transform">
                  Darrel Prawira
                </h3>
                <p className="text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
                  Full-stack developer passionate about creating innovative
                  digital solutions. I specialize in building scalable web
                  applications with exceptional user experiences using modern
                  technologies and best practices.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="cursor-card p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10">
                <h4 className="text-lg font-semibold mb-3 text-white/90 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Stay Updated
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Get notified about new projects and tech insights.
                </p>

                {!isSubmitted ? (
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-400"
                      required
                    />
                    <button
                      onClick={handleNewsletterSubmit}
                      className="cursor-hover px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      Subscribe
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-green-400">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Thanks for subscribing!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white/90 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="cursor-hover text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                    >
                      <svg
                        className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white/90 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="cursor-hover text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mr-3 animate-pulse"></div>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold mb-4 text-white/90">
                Let's Connect
              </h4>
              <p className="text-gray-400 text-sm">
                Follow me on social media for updates and insights
              </p>
            </div>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cursor-hover group p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg ${social.hoverColor} hover:bg-white/10`}
                  title={social.name}
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                <p>
                  &copy; {new Date().getFullYear()} Darrel Prawira. All rights
                  reserved.
                </p>
              </div>

              {/* Additional Links */}
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="cursor-hover text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="cursor-hover text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="cursor-hover text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Sitemap
                </a>
              </div>
            </div>

            {/* Made with love */}
            <div className="text-center mt-6 pt-6 border-t border-white/5">
              <p className="text-gray-500 text-xs flex items-center justify-center">
                Made with
                <svg
                  className="w-4 h-4 mx-1 text-red-500 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                and lots of ☕ by Darrel Prawira
              </p>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-hover fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50"
          title="Scroll to top"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </footer>
    </section>
  );
};
