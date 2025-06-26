import { useEffect, useState } from "react";
import logo from "/src/assets/logodarrel2025.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

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
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-xl border-b border-blue-500/20 shadow-2xl"
          : "bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-blue-500/10 shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <a
            href="#home"
            className="group flex items-center space-x-3 hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <img
                src={logo}
                className="h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                onError={(e) => {
                  console.log("Image failed to load, using fallback");
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 -z-10"></div>
            </div>
          </a>

          {/* Enhanced Mobile Menu Button */}
          <div
            className={`md:hidden relative w-8 h-8 cursor-pointer z-50 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 ${
              menuOpen ? "bg-white-500/10 rotate-90" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 top-2" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 top-2 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 top-2" : "top-3"
                }`}
              ></span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                  activeSection === item.href.slice(1)
                    ? "text-white bg-gradient-to-r from-blue-500/20 to-cyan-400/20 shadow-lg border border-blue-500/20"
                    : "text-gray-300 hover:text-white hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium">{item.label}</span>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/10 group-hover:to-cyan-400/10 transition-all duration-300 -z-10"></div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-lg transition-all duration-300 -z-20"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
