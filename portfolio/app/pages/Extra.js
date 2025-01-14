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
      color: "bg-blue-600 text-white",
    },
    {
      title: "Community Service",
      description:
        "Actively involved in volunteering at local charity organizations, contributing to social causes.",
      color: "bg-green-600 text-white",
    },
    {
      title: "Sports",
      description:
        "Played cricket and represented the school team in regional tournaments.",
      color: "bg-yellow-500 text-white",
    },
    {
      title: "Gaming",
      description: "Played many esports tournaments and won awards.",
      color: "bg-purple-600 text-white",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-300 overflow-x-hidden">
      {/* Page Heading */}
      <div className="relative z-10">
        <h1 className="pt-12 pb-4 font-bold text-3xl text-center underline underline-offset-4 decoration-blue-600">
          Extra-Curricular Activities
        </h1>
      </div>

      {/* Scroll Cards */}
      <div className="pb-10 relative mx-auto max-w-4xl space-y-4"> {/* Adjusted spacing */}
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`relative p-6 rounded-lg shadow-lg transition-all duration-[800ms] ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${section.color}`}
            style={{
              opacity: 0, // Hidden by default
              transform: "translateY(40px)", // Initial position
            }}
          >
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-2 text-base">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
