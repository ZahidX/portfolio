import React from "react";

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="pt-12 pb-12 font-bold text-2xl text-center underline underline-offset-4 bg-gray-100 decoration-black">
        Experience
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8">
        {/* Experience Card 1 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Student Research Assistant</h3>
          <p className="text-gray-700">Independent University, Bangladesh</p>
          <p className="text-gray-500">Jan 2023 - Present</p>
          <p className="mt-4 text-gray-700">
            Collaborated with professors on research projects related to computer vision and machine learning. Assisted in data collection, analysis, and model implementation.
          </p>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Freelance Web Designer & Developer</h3>
          <p className="text-gray-700">Various Clients</p>
          <p className="text-gray-500">May 2022 - Present</p>
          <p className="mt-4 text-gray-700">
            Works as a freelance web designer and developer for multiple clients. Designed and developed responsive websites using HTML, CSS, JavaScript, React, Node.js, and MySQL.
          </p>
        </div>

        {/* Experience Card 3 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Tutor</h3>
          <p className="text-gray-700">Self-Employed</p>
          <p className="text-gray-500">Sep 2020 - Present</p>
          <p className="mt-4 text-gray-700">
            Offered private tutoring services to high school students in subjects like Mathematics, Physics, and ICT. Helped students improve their understanding and performance in their academics.
          </p>
        </div>

        {/* Experience Card 4 */}
        <div className="bg-gray-50 shadow-md p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Photo Editing & Logo Design</h3>
          <p className="text-gray-700">Freelance Projects</p>
          <p className="text-gray-500">Jan 2020 - Dec 2021</p>
          <p className="mt-4 text-gray-700">
            Provided photo editing and logo design services for clients from various industries. Utilized Adobe Photoshop and Illustrator to create visually appealing and professional designs that met clients' requirements.
          </p>
        </div>
      </div>
    </div>
  );
}
