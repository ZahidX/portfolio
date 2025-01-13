import React from "react";
import Image from "next/image";

export default function ProjectsResearchPage() {
  return (
    <div>
      <h1 className="pt-12 pb-12 font-bold text-2xl text-center underline underline-offset-4 bg-gray-100 decoration-black">
        Projects & Research
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
        {/* Project Card 1 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <Image
            src="/images/student-performance.png" // Replace with your actual image path
            alt="Student Performance Monitoring System"
            width={400}
            height={200}
            className="rounded-t-lg"
            objectFit="cover"
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-blue-600">
              Student Performance Monitoring System
            </h3>
            <p className="mt-2 text-gray-700">
              A web-based application for monitoring and managing student
              performance. Built using React, Node.js, and MySQL.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <Image
            src="/images/todo-list.png" // Replace with your actual image path
            alt="To-Do List App"
            width={400}
            height={200}
            className="rounded-t-lg"
            objectFit="cover"
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-blue-600">To-Do List App</h3>
            <p className="mt-2 text-gray-700">
              A simple and intuitive to-do list application with features like
              adding tasks, marking completed tasks, and more. Developed using
              React and Firebase.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub Link
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <Image
            src="/images/shopping-cart.png" // Replace with your actual image path
            alt="Simple Shopping Cart"
            width={400}
            height={200}
            className="rounded-t-lg"
            objectFit="cover"
          />
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-blue-600">
              Simple Shopping Cart
            </h3>
            <p className="mt-2 text-gray-700">
              An e-commerce website with basic shopping cart functionality.
              Developed using React, Node.js, and MongoDB.
            </p>
            <a
              href="https://github.com/your-repo-link" // Replace with actual GitHub link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
