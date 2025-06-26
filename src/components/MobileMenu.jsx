import { useEffect, useState } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      href: "#home",
      label: "Home",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      href: "#about",
      label: "About",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      href: "#projects",
      label: "Projects",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      href: "#contact",
      label: "Contact",
      gradient: "from-blue-500 to-cyan-400",
    },
  ];

  return (
    <div
      className={`md:hidden fixed inset-0 z-30 transition-all duration-500 ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Enhanced Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={() => setMenuOpen(false)}
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Menu Content */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Enhanced Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-lg border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 group z-50"
          aria-label="Close Menu"
        >
          <div className="relative w-5 h-5">
            <span className="absolute block w-5 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rotate-45 top-2 transition-all duration-300"></span>
            <span className="absolute block w-5 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 -rotate-45 top-2 transition-all duration-300"></span>
          </div>
        </button>

        {/* Navigation Items */}
        <div className="flex flex-col items-center space-y-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-center transition-all duration-300 hover:scale-105 ${
                activeSection === item.href.slice(1)
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: menuOpen ? 1 : 0,
                transition: `all 0.5s ease ${index * 100}ms`,
              }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="text-2xl font-light tracking-wide">
                {item.label}
              </span>

              {/* Active indicator */}
              {activeSection === item.href.slice(1) && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full "></div>
              )}

              {/* Hover line effect */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
