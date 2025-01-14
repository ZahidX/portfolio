"use client";
import { useEffect } from "react";
import Skillcompo from "../components/Skillcompo";

export default function SkillPage() {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const progressBar = entry.target;
          if (entry.isIntersecting) {
            // When the progress bar comes into view, animate it
            const progress = progressBar.dataset.progress;
            progressBar.style.transition = "width 1s ease-in-out"; // Add smooth transition for width
            progressBar.style.width = progress;

            // Re-observe after animation so the bar can animate again if needed
            observer.observe(progressBar);
          } else {
            // Reset width if the progress bar goes out of view
            progressBar.style.width = "0%";
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the bar is in view

    // Observe all progress bars
    progressBars.forEach((progressBar) => {
      observer.observe(progressBar);
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
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

            {/* C & C++ */}
            <div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">C & C++</span>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
                <div
                  className="h-5 rounded-full progress-bar bg-c_cpp"
                  data-progress="80%"
                  style={{ width: "0%" }}
                ></div>
                <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
                  80%
                </span>
              </div>
            </div>

            {/* HTML & CSS */}
            <div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">HTML & CSS</span>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
                <div
                  className="h-5 rounded-full progress-bar bg-html_css"
                  data-progress="90%"
                  style={{ width: "0%" }}
                ></div>
                <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
                  90%
                </span>
              </div>
            </div>

            {/* JavaScript & jQuery */}
            <div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">JavaScript & jQuery</span>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
                <div
                  className="h-5 rounded-full progress-bar bg-js_jquery"
                  data-progress="70%"
                  style={{ width: "0%" }}
                ></div>
                <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
                  70%
                </span>
              </div>
            </div>

            {/* MySQL */}
            <div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">MySQL</span>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
                <div
                  className="h-5 rounded-full progress-bar bg-mysql"
                  data-progress="80%"
                  style={{ width: "0%" }}
                ></div>
                <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
                  80%
                </span>
              </div>
            </div>

            {/* React & Node.js */}
            <div>
              <div className="flex justify-between text-gray-700">
                <span className="font-semibold">React & Node.js</span>
              </div>
              <div className="w-full bg-gray-200 h-5 rounded-full overflow-hidden relative">
                <div
                  className="h-5 rounded-full progress-bar bg-react_node"
                  data-progress="70%"
                  style={{ width: "0%" }}
                ></div>
                <span className="absolute inset-0 flex justify-center items-center text-white font-semibold">
                  70%
                </span>
              </div>
            </div>
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
