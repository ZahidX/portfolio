"use client";
import { useEffect } from "react";
import Skillcompo from "../components/Skillcompo";

export default function SkillPage() {
  useEffect(() => {
    // Smooth scroll functionality for navigating to the Skills section
    if (window.location.hash === "#skills") {
      const skillSection = document.getElementById("skills");
      if (skillSection) {
        skillSection.scrollIntoView({ behavior: "smooth" });
      }
    }

    const progressBars = document.querySelectorAll(".progress-bar");

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progressBar = entry.target;
          if (entry.isIntersecting) {
            // Animate progress bar when it comes into view
            const progress = progressBar.dataset.progress;
            progressBar.style.transition = "width 1s ease-in-out";
            progressBar.style.width = progress;
          } else {
            // Reset width when out of view
            progressBar.style.width = "0%";
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each progress bar
    progressBars.forEach((progressBar) => {
      observer.observe(progressBar);
    });

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="skills">
      <h1 className="pt-12 pb-12 font-bold text-2xl text-center underline underline-offset-4 bg-gray-100 decoration-black">
        Skills
      </h1>

      {/* Skills Sections */}
      <div className="flex justify-between px-6 py-8 space-x-4">
        <div className="flex-1 bg-gray-50 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            Programming Languages and Frameworks
          </h2>
          <div className="space-y-4">
            {/* Java */}
            <div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">Java</span>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
                <div
                  className="h-5 rounded-full progress-bar bg-java"
                  data-progress="80%"
                  style={{ width: "0%" }}
                ></div>
                <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
                  80%
                </span>
              </div>
            </div>

            {/* Python */}
            <div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">Python</span>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
                <div
                  className="h-5 rounded-full progress-bar bg-python"
                  data-progress="70%"
                  style={{ width: "0%" }}
                ></div>
                <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
                  70%
                </span>
              </div>
            </div>

            <div>
    <div className="flex justify-between text-gray-700">
      <span className="font-semibold">JavaScript</span>
    </div>
    <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
      <div
        className="h-5 rounded-full progress-bar bg-yellow-500"
        data-progress="90%"
        style={{ width: "90%" }}
      ></div>
      <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
        90%
      </span>
    </div>
  </div>

  {/* C++ */}
  <div>
    <div className="flex justify-between text-gray-700">
      <span className="font-semibold">C++</span>
    </div>
    <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
      <div
        className="h-5 rounded-full progress-bar bg-blue-700"
        data-progress="80%"
        style={{ width: "80%" }}
      ></div>
      <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
        80%
      </span>
    </div>
  </div>

  {/* React JS */}
  <div>
    <div className="flex justify-between text-gray-700">
      <span className="font-semibold">React JS</span>
    </div>
    <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
      <div
        className="h-5 rounded-full progress-bar bg-cyan-500"
        data-progress="70%"
        style={{ width: "70%" }}
      ></div>
      <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
        70%
      </span>
    </div>
  </div>

            {/* Other skills are the same as your original */}
          </div>
        </div>

        <Skillcompo />

        {/* Other Skills */}
        <div className="flex-1 bg-gray-50 shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-purple-600">
            Other Skills
          </h2>
          <div className="text-gray-700 space-y-2">
            <p>Problem Solving</p>
            <p>Teamwork</p>
            <p>Communication</p>
            <p>Time Management</p>
          </div>
        </div>
      </div>
    </div>
  );
}
