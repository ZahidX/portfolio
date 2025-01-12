import Image from "next/image";
import Profile from "./images/profile.jpg";
export default function Home() {
  return (
    <div>
      <div className=" profile_section ">
      <div className="flex items-center justify-between p-8 rounded-lg shadow-lg mx-auto bg-gradient-to-r from-[#1F0143] via-[#3f024f] to-[#782437] animate-gradient-x bg-[length:200%_200%]">
  <div className="profile_image flex-shrink-0 ml-72">
    <Image
      src={Profile}
      alt="profile"
      width={220}
      height={220}
      className="w-48 h-48 rounded-full object-cover"
    />
  </div>

  <div className=" ml-40 mr-64  profile_info text-white">
    <h1 className="text-3xl font-bold mb-2">Hi, I am Zahid</h1>
    <h2 className="text-xl font-semibold  mb-4">
    Software Engineer
    </h2>
    <p className="leading-relaxed text-justify">
    Passionate computer science professional skilled in problem-solving, database management, and web development. Committed to optimizing solutions and enhancing user experiences. Seeking opportunities to drive technological advancements, to work in a challenging environment where I can utilize my knowledge and skills for the growth of the organization and myself.
    </p>
  </div>
</div>

      </div>
    </div>
  );
}
