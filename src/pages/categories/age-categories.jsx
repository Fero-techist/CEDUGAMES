import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    subject: "Math",
    description: "Basic arithmetic and problem-solving",
    levels: "Levels 5-7",
  },
  {
    id: 2,
    subject: "Master Level",
    description: "Experiments and scientific concepts",
    levels: "Levels 1-10",
  },
  {
    id: 3,
    subject: "English Language",
    description: "Reading, writing, and vocabulary",
    levels: "Levels 6-8",
  },
  {
    id: 4,
    subject: "Hero Level",
    description: "World maps and cultures",
    levels: "Levels 11-25",
  },
  {
    id: 5,
    subject: "Arts & History",
    description: "Historical events and figures",
    levels: "Levels 17-19",
  },
];

export default function GamesCategories() {
  return (
    <div className="p-6 max-w-7xl mx-auto rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#1F2937]">Games Categories</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition">
          {/* <Plus size={16} /> */}
          Add Category
        </button>
      </div>

      <div className="overflow-x-auto  rounded-xl border border-[#DBDEE5]">
        <table className="w-full  bg-[#FFFFFF] border-collapse">
          <thead className="border-[#DBDEE5] border-b">
            <tr className="text-left text-base font-medium text-gray-600">
              <th className="px-6 py-4">Subject Name</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Levels</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DBDEE5]">
            {categories.map((item) => (
              <tr
                key={item.id}
                className="text-base text-gray-700"
              >
                <td className="px-6 py-5 font-medium text-[#121217]">
                  {item.subject}
                </td>
                <td className="px-6 py-5 text-[#61708A] max-w-md">
                  {item.description}
                </td>
                <td className="px-6 py-5 text-[#61708A]">{item.levels}</td>
                <td className="px-6 py-5 text-right space-x-3">
                  <Link to="/categories/view-categories">
                    <button className="text-gray-500 hover:text-gray-700 font-medium">
                      View
                    </button>
                  </Link>
                  <Link to="/categories/edit-categories">
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      Edit
                    </button>
                  </Link>
                  <button className="text-red-500 hover:text-red-600 font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
