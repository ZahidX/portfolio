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
      lightColor: "bg-blue-600 text-white",
      darkColor: "bg-blue-800 text-gray-200",
    },
    {
      title: "Community Service",
      description:
        "Actively involved in volunteering at local charity organizations, contributing to social causes.",
      lightColor: "bg-green-600 text-white",
      darkColor: "bg-green-800 text-gray-200",
    },
    {
      title: "Sports",
      description:
        "Played cricket and represented the school team in regional tournaments.",
      lightColor: "bg-yellow-500 text-white",
      darkColor: "bg-yellow-700 text-gray-200",
    },
    {
      title: "Gaming",
      description: "Played many esports tournaments and won awards.",
      lightColor: "bg-purple-600 text-white",
      darkColor: "bg-purple-800 text-gray-200",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-200 dark:bg-gray-900 overflow-x-hidden">
      {/* Page Heading */}
      <div className="relative z-10">
        <h1 className="pt-12 pb-4 font-bold text-3xl text-center decoration-blue-600 dark:decoration-blue-400 text-gray-200 dark:text-gray-200">
          Extra-Curricular Activities
        </h1>
      </div>

      {/* Scroll Cards */}
      <div className="pb-10 relative mx-auto max-w-4xl space-y-4"> {/* Adjusted spacing */}
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`relative p-6 rounded-lg shadow-lg transition-all duration-[800ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${section.lightColor} dark:${section.darkColor}`}
            style={{
              opacity: 0, // Hidden by default
              transform: "translateY(40px)", // Initial position
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-50 dark:text-gray-50">{section.title}</h2>
            <p className="mt-2 text-base text-gray-200 dark:text-gray-50">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
