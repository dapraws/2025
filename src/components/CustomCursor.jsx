import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const followerRef = useRef(null);
  const gradientRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      const isMobileUserAgent =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      return isTouchDevice || isSmallScreen || isMobileUserAgent;
    };

    setIsMobile(checkMobile());

    // Listen for window resize to handle orientation changes
    const handleResize = () => {
      setIsMobile(checkMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Don't initialize cursor on mobile devices
    if (typeof window === "undefined" || !followerRef.current || isMobile)
      return;

    const follower = followerRef.current;
    const gradient = gradientRef.current;

    gsap.set(follower, { x: 0, y: 0 });

    const xTo = gsap.quickTo(follower, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(follower, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const changeGradient = (fromColor, toColor) => {
      if (gradient) {
        gradient.style.background = `linear-gradient(to right, ${fromColor}, ${toColor})`;
      }
    };

    const handleMouseEnter = (e) => {
      const target = e.target;

      // Check for specific card types and change colors accordingly
      if (
        target.closest(".frontend-card") ||
        target.closest(".frontend-skill")
      ) {
        changeGradient("#3b82f6", "#8b5cf6"); // Blue to Purple
        gsap.to(follower, {
          scale: 1.4,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (
        target.closest(".backend-card") ||
        target.closest(".backend-skill")
      ) {
        changeGradient("#10b981", "#059669"); // Green to Emerald
        gsap.to(follower, {
          scale: 1.4,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (target.closest(".education-card")) {
        changeGradient("#8b5cf6", "#ec4899"); // Purple to Pink
        gsap.to(follower, {
          scale: 1.4,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (target.closest(".experience-card")) {
        changeGradient("#f97316", "#ef4444"); // Orange to Red
        gsap.to(follower, {
          scale: 1.4,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (target.closest(".main-card")) {
        changeGradient("#06b6d4", "#3b82f6"); // Cyan to Blue
        gsap.to(follower, {
          scale: 1.4,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (target.closest(".project-card")) {
        // Determine project card color based on content
        const projectCard = target.closest(".project-card");
        const projectIndex = Array.from(
          projectCard.parentNode.children
        ).indexOf(projectCard);

        switch (projectIndex) {
          case 0: // Cloud Platform - Blue to Cyan
            changeGradient("#3b82f6", "#06b6d4");
            break;
          case 1: // AI Analytics - Purple to Pink
            changeGradient("#8b5cf6", "#ec4899");
            break;
          case 2: // E-Commerce - Green to Emerald
            changeGradient("#10b981", "#059669");
            break;
          case 3: // Chat App - Orange to Red
            changeGradient("#f97316", "#ef4444");
            break;
          default:
            changeGradient("#06b6d4", "#3b82f6");
        }
        gsap.to(follower, {
          scale: 1.4,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (target.closest(".skill-tag")) {
        // Get the parent project card to match colors
        const projectCard = target.closest(".project-card");
        if (projectCard) {
          const projectIndex = Array.from(
            projectCard.parentNode.children
          ).indexOf(projectCard);
          switch (projectIndex) {
            case 0:
              changeGradient("#3b82f6", "#06b6d4");
              break;
            case 1:
              changeGradient("#8b5cf6", "#ec4899");
              break;
            case 2:
              changeGradient("#10b981", "#059669");
              break;
            case 3:
              changeGradient("#f97316", "#ef4444");
              break;
            default:
              changeGradient("#06b6d4", "#8b5cf6");
          }
        } else {
          changeGradient("#06b6d4", "#8b5cf6");
        }
        gsap.to(follower, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (
        target.closest(".cursor-hover") ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-hover")
      ) {
        changeGradient("#06b6d4", "#8b5cf6");
        gsap.to(follower, {
          scale: 1.3,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (target.closest(".cursor-card")) {
        changeGradient("#06b6d4", "#3b82f6");
        gsap.to(follower, {
          scale: 1.4,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;

      if (
        target.closest(".cursor-hover") ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-hover") ||
        target.closest(".cursor-card") ||
        target.closest(".frontend-card") ||
        target.closest(".backend-card") ||
        target.closest(".education-card") ||
        target.closest(".experience-card") ||
        target.closest(".main-card") ||
        target.closest(".frontend-skill") ||
        target.closest(".backend-skill")
      ) {
        // // Reset cursor
        // changeGradient("#ffffff", "#d1d5db");
        // gsap.to(follower, {
        //   scale: 1,
        //   duration: 0.3,
        //   ease: "power2.out",
        // });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={followerRef}
      className="pointer-events-none fixed left-0 top-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform z-[9999] blur-lg"
      style={{ mixBlendMode: "difference" }}
    >
      <div
        ref={gradientRef}
        className="h-full w-full opacity-80 transition-colors duration-300"
        style={{
          background: "linear-gradient(to right, #ffffff, #d1d5db)",
          animation: "slowSpin 4s linear infinite",
        }}
      ></div>

      <style jsx>{`
        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
