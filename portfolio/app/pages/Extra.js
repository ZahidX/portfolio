import React from "react";

export default function ExtraCurricularPage() {
  return (
    <div className="relative bg-gray-100 pr-72 pl-64 overflow-x-hidden">
      <h1 className="pt-12 pb-6 font-bold text-3xl text-center underline underline-offset-4 decoration-blue-600">
        Extra-Curricular Activities
      </h1>

      <div className="px-6 py-8 space-y-12">
        {/* Section 1: Debating Society */}
        <div className="relative flex items-center bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg shadow-lg p-6">
          <img
            src="/images/debating-society.jpg" // Replace with your actual image path
            alt="Debating Society"
            className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-blue-700">Debating Society</h2>
            <p className="mt-2 text-gray-700">
              Participated in inter-school debates and won awards for public speaking and critical thinking.
            </p>
          </div>
        </div>

        {/* Section 2: Community Service */}
        <div className="relative flex items-center bg-gradient-to-l from-green-100 to-green-50 rounded-lg shadow-lg p-6">
          <img
            src="/images/community-service.jpg" // Replace with your actual image path
            alt="Community Service"
            className="w-24 h-24 object-cover rounded-full border-4 border-green-500"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-green-700">Community Service</h2>
            <p className="mt-2 text-gray-700">
              Actively involved in volunteering at local charity organizations, contributing to social causes.
            </p>
          </div>
        </div>

        {/* Section 3: Sports */}
        <div className="relative flex items-center bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg shadow-lg p-6">
          <img
            src="/images/sports.jpg" // Replace with your actual image path
            alt="Sports"
            className="w-24 h-24 object-cover rounded-full border-4 border-yellow-500"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-yellow-700">Sports</h2>
            <p className="mt-2 text-gray-700">
              Played cricket and represented the school team in regional tournaments.
            </p>
          </div>
        </div>

        {/* Section 4: Gaming */}
        <div className="relative flex items-center bg-gradient-to-l from-purple-100 to-purple-50 rounded-lg shadow-lg p-6">
          <img
            src="/images/gaming.jpg" // Replace with your actual image path
            alt="Gaming"
            className="w-24 h-24 object-cover rounded-full border-4 border-purple-500"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-purple-700">Gaming</h2>
            <p className="mt-2 text-gray-700">
              Played many esports tournaments and won awards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
