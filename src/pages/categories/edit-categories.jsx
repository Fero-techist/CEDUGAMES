import React, { useState } from "react";
import { Paperclip } from "lucide-react";
import { Link } from "react-router-dom";

export default function EditCategories() {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  //   const [options, setOptions] = useState({
  //     A: "",
  //     B: "",
  //     C: "",
  //     D: "",
  //   });

  //   const [correctAnswer, setCorrectAnswer] = useState("");
  const [ageGroups, setAgeGroups] = useState([]);
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);

  const toggle = (setState, state, value) => {
    setState(
      state.includes(value)
        ? state.filter((v) => v !== value)
        : [...state, value]
    );
  };

  return (
    <div className="p-8 max-w-8xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-gray-900">Edit category</h1>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Category Name
        </label>
        <input
          type="text"
          placeholder="Enter category name"
          className="w-1/3 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <input
          type="text"
          className="w-1/3 min-h-[144px] px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          value={categoryDescription}
          onChange={(e) => setCategoryDescription(e.target.value)}
        />
      </div>

      {/* <div className=" flex items-center gap-4 ">
        <label className="block text-gray-700 font-medium mb-2">Options</label>
        <div className="grid grid-cols-4 gap-4 mb-6">
          {["A", "B", "C", "D"].map((opt) => (
            <div
              key={opt}
              className="flex items-center border rounded-xl px-4 py-3 gap-2 bg-white"
            >
              <input
                type="text"
                placeholder={`Option ${opt}`}
                className="flex-1 outline-none"
                value={options[opt]}
                onChange={(e) =>
                  setOptions({ ...options, [opt]: e.target.value })
                }
              />
              <Paperclip className="w-4 h-4 text-gray-400" />
            </div>
          ))}
        </div>
      </div> */}

      {/* Correct Answer */}
      {/* <div className="mb-8">
        <label className="block text-gray-700 font-medium mb-2">
          Correct Answer
        </label>
        <select
          className="w-2/3 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <option value="">Pick the correct option</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
        </select>
      </div> */}

      <div className="mb-8">
        <h3 className="text-gray-700 font-medium mb-3">Game Levels</h3>
        <div className="grid  gap-y-4">
          {[
            { id: "beginner", label: "Beginner" },
            { id: "intermediate", label: "Intermediate" },
            { id: "advanced", label: "Advanced" },
          ].map((age) => (
            <label
              key={age.id}
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                checked={ageGroups.includes(age.id)}
                onChange={() => toggle(setAgeGroups, ageGroups, age.id)}
                // className="w-4 h-4 rounded focus:ring-purple-500"
                className="w-5 h-5 rounded appearance-none border border-gray-400 
             checked:bg-purple-600 checked:border-purple-600 
             focus:ring-purple-500 cursor-pointer"
              />
              <span className="text-gray-800">{age.label}</span>
            </label>
          ))}
        </div>
      </div>

      <Link to="/content/upload-files">
        <div className="flex justify-end">
          <button className="bg-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition">
            Continue
          </button>
        </div>
      </Link>
    </div>
  );
}
