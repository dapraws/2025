import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const followerRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Check if we're in the browser and GSAP is available
    if (typeof window === "undefined" || !followerRef.current) return;

    const follower = followerRef.current;
    const gradient = gradientRef.current;

    // Initialize position
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
      } else if (target.closest(".skill-tag")) {
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
        gsap.to(follower, {
          scale: 1.3,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (target.closest(".cursor-card")) {
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
        // target.closest(".skill-tag") ||
        target.closest(".cursor-card") ||
        target.closest(".frontend-card") ||
        target.closest(".backend-card") ||
        target.closest(".education-card") ||
        target.closest(".experience-card") ||
        target.closest(".main-card") ||
        target.closest(".frontend-skill") ||
        target.closest(".backend-skill")
      ) {
      }
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    // Hide default cursor
    // document.body.style.cursor = "none";

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.body.style.cursor = "auto";
    };
  }, []);

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
