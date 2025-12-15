"use client";

import { useState } from "react";
// import { Bell, Mail, MoreVertical, Plus } from "react-icons";
import { FiBell, FiMail, FiMoreVertical, FiPlus } from "react-icons/fi"; // Feather icons
import ProfileImg from "../../assets/profileImg.png";
import instructorsImg from "../../assets/instructors.png";

export default function ProfilePage() {
  const [instructors] = useState([
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
    { name: "Tomide Gabriel", role: "Mathematics Instructor" },
  ]);

  return (
    <div className="max-w-md mx-auto text-xs bg-white shadow-lg min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-semibold">Your Profile</h1>
        <button className="p-1">
          <FiMoreVertical className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className=" w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            <img
              src={ProfileImg}
              alt="Profile"
              width="200px"
              height={96}
              className="object-cover"
            />
          </div>
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              background:
                "conic-gradient(#8b5cf6 0deg 270deg, transparent 270deg 360deg)",
              maskImage: "radial-gradient(transparent 60%, black 62%)",
              WebkitMaskImage: "radial-gradient(transparent 60%, black 62%)",
            }}
          />
        </div>

        <h2 className="text-xl font-semibold mb-1">Good Morning Name!</h2>
        <p className="text-gray-500 text-center text-sm mb-4">
          Continue Your Journey And Achieve Your Target
        </p>

        <div className="flex gap-4 mb-6">
          <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FiBell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
            <FiMail className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Progress Chart */}
        <div className="w-full h-32 flex items-end justify-between gap-3 mb-8">
          {[
            { height: 40 },
            { height: 60 },
            { height: 85 },
            { height: 75 },
            { height: 75 },
          ].map((bar, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col-reverse"
              style={{ height: `${bar.height}%` }}
            >
              {/* Each bar has 4 segments with specific purple shades */}
              <div className="w-full h-1/4 bg-purple-100" />
              <div className="w-full h-1/4 bg-purple-200" />
              <div className="w-full h-1/4 bg-purple-400" />
              <div className="w-full h-1/4 bg-purple-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Instructors Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Instructors</h3>
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <FiPlus className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        <div className="space-y-3">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="flex items-center py-2  border-b justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={instructorsImg}
                    alt={instructor.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium">{instructor.name}</p>
                  <p className="text-xs text-gray-500">{instructor.role}</p>
                </div>
              </div>
              <button className="px-4 py-1 rounded-full bg-purple-600 text-white text-xs font-medium">
                View
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className=" grid justify-center items-center">
        <button className=" bg-[#702DFF33] rounded-full text-purple-600 h-[32px] mx-auto my-2 w-[226px] ">
          See all
        </button>
      </div>
    </div>
  );
}
