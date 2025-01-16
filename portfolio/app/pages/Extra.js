"use client";

import React, { useEffect, useRef } from "react";

export default function ExtraCurricularPage() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.8; // Trigger animation when 80% of the card is in view

      cardRefs.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();

          // Show animation
          if (rect.top < triggerPoint) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
          } else {
            // Hide animation (smooth)
            card.style.opacity = 0;
            card.style.transform = "translateY(40px)";
          }
        }
      });
    };

    // Attach scroll event
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      title: "Debating Society",
      description:
        "Participated in inter-school debates and won awards for public speaking and critical thinking.",
      cardGradient: "bg-gradient-to-r from-blue-600 to-cyan-600", // Gradient color for the card
    },
    {
      title: "Community Service",
      description:
        "Actively involved in volunteering at local charity organizations, contributing to social causes.",
      cardGradient: "bg-gradient-to-r from-green-600 to-teal-600",
    },
    {
      title: "Sports",
      description:
        "Played cricket and represented the school team in regional tournaments.",
      cardGradient: "bg-gradient-to-r from-yellow-500 to-yellow-400",
    },
    {
      title: "Gaming",
      description: "Played many esports tournaments and won awards.",
      cardGradient: "bg-gradient-to-r from-purple-600 to-pink-500",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-100 to-cyan-50 dark:bg-gradient-to-r dark:from-[#0E1628] dark:to-[#380643] overflow-x-hidden">
      {/* Page Heading */}
      <div className="relative z-10">
        <h1 className="text-5xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 mb-10 tracking-wide pt-10">
          Extra-Curricular Activities
        </h1>
      </div>

      {/* Scroll Cards */}
      <div className="pb-10 relative mx-auto max-w-4xl space-y-4">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`relative p-6 rounded-lg shadow-lg transition-all duration-[800ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${section.cardGradient}`}
            style={{
              opacity: 0, // Hidden by default
              transform: "translateY(40px)", // Initial position
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-50">{section.title}</h2>
            <p className="mt-2 text-base text-gray-50 font-medium ">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
