import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 px-8 md:px-28" id="contact">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
        Contact Me
      </h1>
      <div className="w-full h-[2px] bg-blue-500 dark:bg-blue-400 mx-auto mb-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Feel free to reach out to me for any inquiries or collaborations.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-xl mr-4">
                <i className="fas fa-envelope"></i>
              </span>
              <p className="text-gray-700 dark:text-gray-300">your-email@example.com</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-xl mr-4">
                <i className="fas fa-phone"></i>
              </span>
              <p className="text-gray-700 dark:text-gray-300">+123 456 7890</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-500 dark:text-blue-400 text-xl mr-4">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p className="text-gray-700 dark:text-gray-300">123 Main Street, City, Country</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your Message"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
