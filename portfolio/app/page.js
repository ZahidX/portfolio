import Image from "next/image";
import Profile from "./images/profile.png";
export default function Home() {
  return (
    <div>
      <div className=" profile_section h-96 mt-12">
        <div className="flex items-center justify-between p-8 shadow-lg mx-auto bg-gradient-to-r from-[#1F0143] via-[#3f024f] to-[#782437] animate-gradient-x bg-[length:200%_200%] h-96">
          <div className="profile_image flex-shrink-0 ml-72">
            <Image
              src={Profile}
              alt="profile"
              width={220}
              height={220}
              className="w-72 h-72 rounded-full object-cover"
            />
          </div>

          <div className=" ml-40 mr-64  profile_info text-white">
            <h1 className="text-3xl font-bold mb-2">Hi, I am Zahid</h1>
            <h2 className="text-xl font-semibold  mb-4">Software Engineer</h2>
            <p className="leading-relaxed text-justify">
              Passionate computer science professional skilled in
              problem-solving, database management, and web development.
              Committed to optimizing solutions and enhancing user experiences.
              Seeking opportunities to drive technological advancements, to work
              in a challenging environment where I can utilize my knowledge and
              skills for the growth of the organization and myself.
            </p>
          </div>
        </div>
      </div>
      <div />

      {/* About section */}

      <div>
        <h1 className="pt-28 pb-12 font-bold text-2xl text-center underline underline-offset-4 bg-gray-100  decoration-black">
          About Me
        </h1>

        {/* Flex container for two sections */}
        <div className="bg-gray-50 pb-20 pt-8 pl-40 flex flex-col md:flex-row justify-between px-6">
          {/* Personal Details Section */}
          <div className="flex md:w-1/2 mb-6 md:mb-0">
            {/* Vertical Line */}
            <div className=""></div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-green-600">
                Personal Details
              </h2>
              <div className="text-gray-700">
                <p>
                  <span className="font-semibold">Name:</span> Zahid
                </p>
                <p>
                  <span className="font-semibold">Location:</span> [Your
                  Location]
                </p>
                <p>
                  <span className="font-semibold">Profession:</span> Aspiring
                  Web Developer
                </p>
                <p>
                  <span className="font-semibold">Hobbies:</span> [Your Hobbies]
                </p>
                <p>
                  <span className="font-semibold">Age:</span> [Your Age]
                </p>
                <p>
                  <span className="font-semibold">Languages Spoken:</span>{" "}
                  English, [Other Languages]
                </p>
                <p>
                  <span className="font-semibold">Email:</span> [Your Email
                  Address]
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> [Your Phone
                  Number]
                </p>
                <p>
                  <span className="font-semibold">Favorite Quote:</span> "[Your
                  Favorite Quote]"
                </p>
              </div>
            </div>
          </div>

          {/* Educational Background Section */}
          <div className="flex md:w-1/2">
            {/* Vertical Line */}
            <div className=""></div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-green-600">
                Educational Background
              </h2>
              <div className="text-gray-700 border-l-4 border-green-600 pl-4">
                <p>
                  <span className="font-semibold">Degree:</span> Bachelor's in
                  Computer Science (CSE)
                </p>
                <p>
                  <span className="font-semibold">Graduation Year:</span> [Your
                  Graduation Year]
                </p>
                <p>
                  <span className="font-semibold">Specialization:</span>{" "}
                  Artificial Intelligence and Machine Learning
                </p>
                <p>
                  <span className="font-semibold">Certifications:</span>{" "}
                  Certified Web Developer, Python Programmer
                </p>
                <p>
                  <span className="font-semibold">Research Work:</span>{" "}
                  Published a paper on "Efficient Violence Detection Techniques"
                </p>
                <p>
                  <span className="font-semibold">Projects:</span> Developed a
                  real-time chatbot and a vocabulary learning website
                </p>
                <p>
                  <span className="font-semibold">Achievements:</span> Winner of
                  Hackathon 2023, Top scorer in Machine Learning course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Section */}
      <div>
        <h1 className="pt-12 pb-12 font-bold text-2xl text-center underline underline-offset-4  decoration-black">
          Skills
        </h1>
      </div>
    </div>
  );
}
