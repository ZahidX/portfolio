import React from "react";
import Image from "next/image";

export default function ProjectsResearchPage() {
  return (
<div className="-mt-10 bg-gray-100 dark:bg-gradient-to-r dark:from-[#0E1628] dark:to-[#380643] min-h-screen" id="projects">
      <h1 className="text-5xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 mb-10 tracking-wide">
        Projects & Research
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8" >
        {/* Project Card 1 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg">
          <Image
            src="/images/student-performance.png" // Replace with your actual image path
            alt="Student Performance Monitoring System"
            width={400}
            height={200}
            className="rounded-t-lg"
            objectFit="cover"
            priority={true} // Improves image loading for the first visible project
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Student Performance Monitoring System
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              A web-based application for monitoring and managing student
              performance. Built using React, Node.js, and MySQL.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg">
          <Image
            src="/images/todo-list.png" // Replace with your actual image path
            alt="To-Do List App"
            width={400}
            height={200}
            className="rounded-t-lg"
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
              className="block mt-4 text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg">
          <Image
            src="/images/shopping-cart.png" // Replace with your actual image path
            alt="Simple Shopping Cart"
            width={400}
            height={200}
            className="rounded-t-lg"
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
              className="block mt-4 text-blue-500 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
