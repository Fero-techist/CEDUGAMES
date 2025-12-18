import React from "react";
import { Plus } from "lucide-react";
import GameBoard from "../../assets/game-card.png";
import bgImage from "../../assets/levelImae.png";
import levelImage from "../../assets/levelImage.png";
import { Link } from "react-router-dom";

const levels = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: "Level 1",
  image: levelImage,
  subtitle: "Learn through fun and play!",
  description:
    "Discover colors, shapes, animals, and numbers with simple games that make learning exciting and easy to understand.",
}));

export default function GamesCategoryDetails() {
  return (
    <div className="p-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Games Categories Details
        </h1>

        <Link to="/categories/add-level">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold bg-purple-600 text-white text-base  hover:bg-purple-700 transition">
            Add Level
          </button>
        </Link>
      </div>

      <div className="mb-8 rounded-2xl border-2 border-[#EBDFFA80] bg-white p-5 flex items-start gap-4 shadow-lg">
        <div className="flex items-center justify-center text-purple-600 font-bold">
          <img
            src={GameBoard}
            alt="GameBoard"
            className="w-14 h-14"
          />
        </div>
        <div>
          <h2 className="font-medium font-sans text-base text-[#281B22]">
            Math Adventures
          </h2>
          <p className="text-base font-sans font-[300] text-[#281B22]">
            Solve puzzles, count treasures, and become a number wizard!
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Levels</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {levels.map((level) => (
          <div
            key={level.id}
            className="relative  p-6 rounded-3xl text-gray-900"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className=" flex mt-20">
              <img
                src={level.image}
                alt={level.subtitle}
                className="w-32 h-32 object-contain mb-4"
              />

              <div className=" text-[#281B22] font-sans">
                <h3 className="font-bold  mb-1">{level.title}</h3>
                <p className="text-sm italic  mb-2">{level.subtitle}</p>
                <p className="text-sm s mb-6">{level.description}</p>

                <Link to="/content/add-question">
                  <button className="px-4 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition">
                    Add Question
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
