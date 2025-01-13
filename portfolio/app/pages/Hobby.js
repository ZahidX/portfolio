import React from "react";
import Image from "next/image";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Listening to Music",
      description:
        "I enjoy listening to various genres of music, especially while working or relaxing. Music helps me stay focused and enhances my creativity.",
      image: "/images/music.jpg",
    },
    {
      title: "Photography",
      description:
        "Photography is one of my passions. I love capturing beautiful moments and scenes, especially during my travels and outdoor activities.",
      image: "/images/photography.jpg",
    },
    {
      title: "Watching Movies",
      description:
        "Watching movies is one of my favorite pastimes. I enjoy films from various genres, and it allows me to unwind and be entertained.",
      image: "/images/movies.jpg",
    },
    {
      title: "Gaming",
      description:
        "Gaming is another hobby that I indulge in during my free time. Playing video games helps me relax and challenge my strategic thinking.",
      image: "/images/gaming.jpg",
    },
    {
      title: "Reading Books",
      description:
        "Reading books is one of my favorite hobbies. I enjoy reading books from various genres, especially fiction and self-help.",
      image: "/images/reading.jpg",
    },
    {
      title: "Travelling",
      description:
        "Travelling is one of my passions. I love exploring new places and experiencing different cultures. It helps me broaden my perspective and learn new things.",
      image: "/images/travelling.jpg",
    },
  ];

  return (
    <div className="relative bg-purple-900 text-gray-50 pt-28 pb-12 px-8 pl-28 pr-28 overflow-x-hidden">
      {/* Preserve your padding values */}
      <h1 className="text-3xl font-bold text-center mb-10 ">
        Hobbies
      </h1>
      <div className="w-full h-[2px] bg-gray-100 mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-100 transition duration-300 p-6"
          >
            <div className="w-full h-24 relative">
              <Image
                src={hobby.image}
                alt={hobby.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                {hobby.title}
              </h2>
              <p className="mt-2 text-gray-600">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
