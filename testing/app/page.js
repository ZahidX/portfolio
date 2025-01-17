import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to My Next.js Website
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Building modern, fast, and scalable web applications with ease.
          </p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          About This Project
        </h2>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-center">
          This website is built using Next.js, a powerful React framework for
          creating dynamic and optimized web applications. Explore the projects
          and features included!
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
          <Image
            src="/images/fast.png" // Replace with your actual image
            alt="Fast"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">Fast</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center mt-2">
            Optimized for speed and performance, delivering seamless user
            experiences.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
          <Image
            src="/images/scalable.png" // Replace with your actual image
            alt="Scalable"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">Scalable</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center mt-2">
            Designed to grow with your needs, handling increasing traffic and
            complexity.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
          <Image
            src="/images/modern.png" // Replace with your actual image
            alt="Modern"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-semibold mt-4 text-center">Modern</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center mt-2">
            Built with the latest web technologies to ensure a cutting-edge
            design and functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
