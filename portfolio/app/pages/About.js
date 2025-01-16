export default function About() {
  return (
<div
  id="about"
  className="dark:bg-gradient-to-b dark:from-[#220E36] dark:to-[#270B4A] dark:text-gray-100"
>


      <h1 className="pt-28 pb-12 font-bold text-5xl text-center dark:decoration-white">
        About Me
      </h1>
      <div className="pb-20 pt-8 pl-40 flex flex-col md:flex-row justify-between px-6">
        {/* Personal Details Section */}
        <div className="flex md:w-1/2 mb-6 md:mb-0">
          <div>
            <h2 className="text-xl font-bold mb-4 dark:text-green-400">
              Personal Details
            </h2>
            <div className="dark:text-gray-300">
              <p>
                <span className="font-semibold">Name:</span> Zahidul Islam
              </p>
              <p>
                <span className="font-semibold">Location:</span> Baridhara, Dhaka
              </p>
              <p>
                <span className="font-semibold">Profession:</span> Aspiring Web
                Developer
              </p>
              <p>
                <span className="font-semibold">Hobbies:</span> Reading Book
              </p>
              <p>
                <span className="font-semibold">Age:</span> 24
              </p>
              <p>
                <span className="font-semibold">Languages Spoken:</span>{" "}
                English, Bangla, Hindi, French
              </p>
              <p>
                <span className="font-semibold">Email:</span> zahid.imx@gmail.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +880 175 430 9016
              </p>
              
            </div>
          </div>
        </div>

        {/* Educational Background Section */}
        <div className="flex md:w-1/2">
          <div>
            <h2 className="text-xl font-bold mb-4 dark:text-green-400">
              Educational Background
            </h2>
            <div className="dark:text-gray-300 border-l-4 dark:border-green-400 pl-4">
              <p>
                <span className="font-semibold">Degree:</span> Bachelor's in
                Computer Science (CSE)
              </p>
              <p>
                <span className="font-semibold">Graduation Year:</span> 2024
              </p>
              <p>
                <span className="font-semibold">Specialization:</span>{" "}
                Artificial Intelligence and Machine Learning
              </p>
              <p>
                <span className="font-semibold">Certifications:</span> Certified
                Web Developer, Python Programmer
              </p>
              <p>
                <span className="font-semibold">Research Work:</span> Published
                a paper on "Efficient Violence Detection Techniques"
              </p>
              <p>
                <span className="font-semibold">Projects:</span> Developed a
                real-time chatbot and a vocabulary learning website
              </p>
              <p>
                <span className="font-semibold">Achievements:</span> Participated
                Hackathon 2023, Working in Machine Learning Field
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
