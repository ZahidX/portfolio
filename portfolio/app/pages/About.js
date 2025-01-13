// components/About.js
export default function About() {
    return (
      <div>
        <h1 className="pt-28 pb-12 font-bold text-2xl text-center underline underline-offset-4 bg-gray-100 decoration-black">
          About Me
        </h1>
        <div className="bg-gray-50 pb-20 pt-8 pl-40 flex flex-col md:flex-row justify-between px-6">
          {/* Personal Details Section */}
          <div className="flex md:w-1/2 mb-6 md:mb-0">
            <div>
              <h2 className="text-xl font-bold mb-4 text-green-600">
                Personal Details
              </h2>
              <div className="text-gray-700">
                <p><span className="font-semibold">Name:</span> Zahid</p>
                <p><span className="font-semibold">Location:</span> [Your Location]</p>
                <p><span className="font-semibold">Profession:</span> Aspiring Web Developer</p>
                <p><span className="font-semibold">Hobbies:</span> [Your Hobbies]</p>
                <p><span className="font-semibold">Age:</span> [Your Age]</p>
                <p><span className="font-semibold">Languages Spoken:</span> English, [Other Languages]</p>
                <p><span className="font-semibold">Email:</span> [Your Email Address]</p>
                <p><span className="font-semibold">Phone:</span> [Your Phone Number]</p>
                <p><span className="font-semibold">Favorite Quote:</span> "[Your Favorite Quote]"</p>
              </div>
            </div>
          </div>
  
          {/* Educational Background Section */}
          <div className="flex md:w-1/2">
            <div>
              <h2 className="text-xl font-bold mb-4 text-green-600">
                Educational Background
              </h2>
              <div className="text-gray-700 border-l-4 border-green-600 pl-4">
                <p><span className="font-semibold">Degree:</span> Bachelor's in Computer Science (CSE)</p>
                <p><span className="font-semibold">Graduation Year:</span> [Your Graduation Year]</p>
                <p><span className="font-semibold">Specialization:</span> Artificial Intelligence and Machine Learning</p>
                <p><span className="font-semibold">Certifications:</span> Certified Web Developer, Python Programmer</p>
                <p><span className="font-semibold">Research Work:</span> Published a paper on "Efficient Violence Detection Techniques"</p>
                <p><span className="font-semibold">Projects:</span> Developed a real-time chatbot and a vocabulary learning website</p>
                <p><span className="font-semibold">Achievements:</span> Winner of Hackathon 2023, Top scorer in Machine Learning course</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  