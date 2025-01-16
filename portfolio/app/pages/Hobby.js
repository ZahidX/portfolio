"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Music from "../images/music.png";
import Photography from "../images/photography.png";
import Movie from "../images/movie.png";
import Game from "../images/game.png";
import Book from "../images/book.png";
import Travel from "../images/travel.png";

export default function Hobbies() {
  const lineRef = useRef(null);

  const hobbies = [
    {
      title: "Listening to Music",
      description:
        "I enjoy listening to various genres of music, especially while working or relaxing. Music helps me stay focused and enhances my creativity.",
      image: Music,
    },
    {
      title: "Photography",
      description:
        "Photography is one of my passions. I love capturing beautiful moments and scenes, especially during my travels and outdoor activities.",
      image: Photography,
    },
    {
      title: "Watching Movies",
      description:
        "Watching movies is one of my favorite pastimes. I enjoy films from various genres, and it allows me to unwind and be entertained.",
      image: Movie,
    },
    {
      title: "Gaming",
      description:
        "Gaming is another hobby that I indulge in during my free time. Playing video games helps me relax and challenge my strategic thinking.",
      image: Game,
    },
    {
      title: "Reading Books",
      description:
        "Reading books is one of my favorite hobbies. I enjoy reading books from various genres, especially fiction and self-help.",
      image: Book,
    },
    {
      title: "Travelling",
      description:
        "Travelling is one of my passions. I love exploring new places and experiencing different cultures. It helps me broaden my perspective and learn new things.",
      image: Travel,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lineRef.current.classList.add("animate-line");
          } else {
            lineRef.current.classList.remove("animate-line");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
<div className="bg-gradient-to-r from-blue-400 via-blue-300 to-off-white dark:bg-gradient-to-r dark:from-blue-800 dark:via-blue-700 dark:to-gray-800 text-gray-50 dark:text-gray-200 pt-28 pb-12 px-8 pl-28 pr-28 overflow-x-hidden">

      <h1 className="text-3xl font-bold text-center mb-10">Hobbies</h1>
      
      {/* Animated Horizontal Line */}
      <div
        ref={lineRef}
        className="w-full h-[2px] mx-auto mb-8"
      ></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-6"
          >
            <div className="w-24 h-24 relative text-center mx-auto">
              <Image
                src={hobby.image}
                alt={hobby.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="mt-4 text-center mx-auto">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600">
                {hobby.title}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
  @keyframes slide {
    0% {
      width: 0%;
      box-shadow: 0 0 0px 0px rgba(25, 255, 255, 0.9); /* Subtle White Shadow */
    }
    100% {
      width: 100%;
      box-shadow: 0 0 5px 2px rgba(255, 25, 25, 0.3); /* Subtle White Shadow */
    }
  }

  .animate-line {
    animation: slide 2s ease-in-out forwards;
    background-color: rgba(129, 140, 248, 0.4); /* White for normal mode */
  }

  .dark .animate-line {
    background-color: rgba(129, 140, 248, 0.8); /* Green for dark mode */
    box-shadow: 0 0 5px 2px rgba(129, 140, 248, 0.3); /* Green shadow for dark mode */
  }
`}</style>




    </div>
  );
}
