import React from "react";
import Image from "next/image";

export default function Hobbies() {
  const hobbies = [
    {
      title: "Listening to Music",
      description:
        "I enjoy listening to various genres of music, especially while working or relaxing. Music helps me stay focused and enhances my creativity.",
      image: "/images/music.jpg", // Replace with the actual image path
    },
    {
      title: "Photography",
      description:
        "Photography is one of my passions. I love capturing beautiful moments and scenes, especially during my travels and outdoor activities.",
      image: "/images/photography.jpg", // Replace with the actual image path
    },
    {
      title: "Watching Movies",
      description:
        "Watching movies is one of my favorite pastimes. I enjoy films from various genres, and it allows me to unwind and be entertained.",
      image: "/images/movies.jpg", // Replace with the actual image path
    },
    {
      title: "Gaming",
      description:
        "Gaming is another hobby that I indulge in during my free time. Playing video games helps me relax and challenge my strategic thinking.",
      image: "/images/gaming.jpg", // Replace with the actual image path
    },
    {
      title: "Reading Books",
      description:
        "Reading books is one of my favorite hobbies. I enjoy reading books from various genres, especially fiction and self-help.",
      image: "/images/reading.jpg", // Replace with the actual image path
    },
    {
      title: "Travelling",
      description:
        "Travelling is one of my passions. I love exploring new places and experiencing different cultures. It helps me broaden my perspective and learn new things.",
      image: "/images/travelling.jpg", // Replace with the actual image path
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-8 pl-28 pr-28">
      <h1 className="text-3xl font-bold text-center mb-10 underline underline-offset-4 decoration-blue-600">
        Hobbies
      </h1>
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
