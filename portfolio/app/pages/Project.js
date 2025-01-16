import React from "react";
import Image from "next/image";
import Robot from "../images/robot.png";
import Shoping from "../images/shoping.png";
import Task from "../images/task.png";

export default function ProjectsResearchPage() {
  return (
<div className=" pl-14 pr-14 bg-gray-100 dark:bg-gradient-to-r dark:from-[#0E1628] dark:to-[#380643] min-h-screen" id="projects">
      <h1 className="text-5xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 pt-16 tracking-wide">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8" >
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg text-center">
          <Image
            src={Robot} // Replace with your actual image path
            alt="Student Performance Monitoring System"
            width={400}
            height={200}
            className="rounded-t-lg"
            objectFit="cover"
            priority={true} // Improves image loading for the first visible project
          />
          <div className="pt-4">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
  Social Interactive Robot
</h3>
<p className="mt-2 text-gray-700 dark:text-gray-300">
  A cutting-edge project designed to facilitate human-robot interaction, 
  incorporating advanced AI and natural language processing. 
</p>

            <a
              href="https://github.com/your-repo-link" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 dark:text-blue- hover:text-blue-700 dark:hover:text-blue-300"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg text-center">
          <Image
            src={Task} // Replace with your actual image path
            alt="To-Do List App"
            width={390}
            height={200}
            className="rounded-t-lg ml-3 mt-4"
            objectFit="cover"
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              To-Do List App
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A simple and intuitive to-do list application with features like
              adding tasks, marking completed tasks, and more. Developed using
              React and Firebase.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 dark:text-blue-400  hover:text-blue-700 dark:hover:text-blue-300"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg text-center">
          <Image
            src={Shoping} // Replace with your actual image path
            alt="Simple Shopping Cart"
            width={350}
            height={200}
            className="rounded-t-lg pl-12 pt-8"
            objectFit="cover"
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Simple Shopping Cart
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              An e-commerce website with basic shopping cart functionality.
              Developed using React, Node.js, and MongoDB.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
