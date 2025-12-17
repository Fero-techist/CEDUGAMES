import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "../../assets/cta.png";
import { DeleteUser, SuccessfulDelete } from "../../components/modal";

const questions = [
  {
    question: "What is the capital of France?",
    category: "Geography",
    level: "Beginner",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    category: "Animals",
    level: "Beginner",
  },
  {
    question: "What is the name of the largest ocean on Earth?",
    category: "Geography",
    level: "Intermediate",
  },
  {
    question: "How many continents are there?",
    category: "Geography",
    level: "Intermediate",
  },
  {
    question: "What is the chemical symbol for gold?",
    category: "Science",
    level: "Advanced",
  },
  {
    question: "Who painted the Mona Lisa?",
    category: "Art",
    level: "Advanced",
  },
  {
    question: "What is the name of the closest star to Earth?",
    category: "Science",
    level: "Beginner",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    category: "Science",
    level: "Intermediate",
  },
  {
    question: "What is the name of the longest river in the world?",
    category: "Geography",
    level: "Advanced",
  },
];

export default function QuestionsPage() {
  const [openDelete, setOpenDelete] = useState(false);
  const [openSuccessfulDeleteModal, setOpenSuccessfulDeleteModal] =
    useState(false);

  const confirmDelete = () => {
    setOpenDelete(false);
    setOpenSuccessfulDeleteModal(true);
  };

  const closeSuccessfulDeleteModal = () => setOpenSuccessfulDeleteModal(false);

  const openModal = () => setOpenDelete(true);

  return (
    <div
      className="p-8 bg-white font-Outfit max-w-7xl mx-auto rounded-xl
     "
    >
      <div className=" max-w-6xl mx-auto">
        <div className=" flex justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Questions</h1>

          <Link to="/content/add-question">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition">
              Add Question
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-between mb-6">
          {/* Search */}
          <div className="relative w-full ">
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions"
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F0F2F5] border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
            />
          </div>
        </div>

        <div className=" rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left ">
            <thead>
              <tr className=" border-b">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  Question
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  Category
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  Level
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {questions.map((item, index) => (
                <tr
                  key={index}
                  className="border-b text-base hover:bg-gray-50 transition"
                >
                  <td className="py-4 px-4 font-[400] text-[#121217]">
                    {item.question}
                  </td>

                  <td className="py-4 px-4">
                    <span className=" text-gray-600 cursor-pointer hover:underline">
                      {item.category}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-gray-600">{item.level}</td>

                  {/* ACTIONS */}
                  <td className="py-4 px-4 text-sm">
                    <Link to="/content/edit-question">
                      <span className="text-purple-600 cursor-pointer hover:underline mr-3">
                        Edit
                      </span>
                    </Link>
                    <span
                      onClick={openModal}
                      className="text-red-500 cursor-pointer hover:underline"
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <DeleteUser
            isOpen={openDelete}
            onClose={() => setOpenDelete(false)}
          >
            <div className="w-28 h-28 mx-auto">
              <img
                src={CTA}
                alt="cta"
                className="w-full h-full "
              />
            </div>
            <div className="mx-auto text-center">
              <p className="text-2xl font-bold py-2">Confirm Action</p>
              <p>
                Are you sure you want to delete user? Action cannot be reversed
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                className="border border-[#995BE2] text-[#995BE2] text-[16px] font-medium py-2 px-4 rounded-xl w-[130px]"
                onClick={() => setOpenDelete(false)}
              >
                No
              </button>
              <button
                onClick={confirmDelete}
                className="text-[16px] bg-[#995BE2] text-white font-medium py-2 px-4 rounded-[10px] w-[130px]"
              >
                Yes
              </button>
            </div>
          </DeleteUser>

          <SuccessfulDelete
            isOpen={openSuccessfulDeleteModal}
            onClose={closeSuccessfulDeleteModal}
          >
            <div>
              <div>
                <img
                  src={CTA}
                  alt=" verify delete"
                  className=" w-28 h-28 mx-auto"
                />
              </div>

              <h2 className="text-[#000000] text-center text-[22px] leading-[27px] font-bold mb-4">
                Action Completed!
              </h2>
              <p className="text-[#000000] text-center mb-4  text-[14px] leading-[18.9px]">
                <span className="font-bold">User (Name)</span> has been deleted
                succcessfully,
              </p>

              <div className=" mx-auto justify-center flex items-center">
                <button
                  onClick={() => setOpenSuccessfulDeleteModal(false)}
                  className=" bg-[#995BE2]  w-[304px]  text-white px-6 py-2 "
                >
                  Okay
                </button>
              </div>
            </div>
          </SuccessfulDelete>
        </div>
      </div>
    </div>
  );
}
