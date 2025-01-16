"use client";
import React from "react";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", color: "bg-yellow-300" },
    { name: "CSS", color: "bg-blue-300" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-blue-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "MongoDB", color: "bg-green-300" },
    { name: "Git", color: "bg-red-400" },
    { name: "GitHub", color: "bg-gray-800" },
    { name: "VS Code", color: "bg-blue-800" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 py-20 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          75% {
            transform: translate(-10px, -10px);
          }
        }
        .floating {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex items-center justify-center p-4 rounded-lg shadow-md ${skill.color} floating`}
            style={{
              width: "100px",
              height: "100px",
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <p className="text-center text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
