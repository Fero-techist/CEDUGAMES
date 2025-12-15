import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Age from "../../assets/age(3-5).png";
import AgeOne from "../../assets/age(6-8).png";
import bg from "../../assets/one.png";
import bgOne from "../../assets/two.png";
import CTA from "../../assets/cta.png";
import bgTwo from "../../assets/tree.png";
import { Link } from "react-router-dom";
import { DeleteUser, SuccessfulDelete } from "../../components/modal";
import { FullBTN } from "../../components/button.jsx/Btn";
const ageGroups = [
  {
    id: 1,
    title: "Age 3–5: Little Explorers",
    description:
      "Learn through fun and play! Discover colors, shapes, animals, and numbers with simple games that make learning exciting and easy to understand.",
    image: Age,
    bgImage: bg,
    bg: "bg-[#EBDFFA4D]",
    border: "border-[#9B5DE5]",
  },
  {
    id: 2,
    title: "Ages 6–8: Young Thinkers",
    description:
      "Solve, build, and explore! Play games that boost your creativity, problem-solving, and memory. Learn new words, math tricks, and fun science facts!",
    image: AgeOne,
    bgImage: bgOne,
    bg: "bg-[#FFECD24D]",
    border: "border-[#FF9F1C]",
  },
  {
    id: 3,
    title: "Ages 9–11: Smart Adventurers",
    description:
      "Challenge your mind! Dive into brain games, quizzes, and creative missions that test your logic, teamwork, and curiosity about the world.",
    image: Age,
    bgImage: bgTwo,
    bg: "bg-[#DCEEF84D]",
    border: "border-[#4EA8DE ]",
  },
];

export default function AgeGroups() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [openSuccessfulDeleteModal, setOpenSuccessfulDeleteModal] =
    useState(false);
  const DeleteModal = () => setDeleteModal(true);

  const confirmDelete = () => {
    setDeleteModal(false);
    setOpenSuccessfulDeleteModal(true);
  };
  const closeSuccessfulDeleteModal = () => setOpenSuccessfulDeleteModal(false);

  return (
    <div className="w-full min-h-screen max-w-7xl mx-auto">
      {/* Heading and Add Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Age Groups</h2>
        <Link to="/categories/add-age-group">
          <button className="bg-purple-600 hover:bg-purple-700 transition text-white font-semibold px-4 py-2 rounded-xl text-sm">
            Add Age Group
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ageGroups.map((group) => (
          <div
            // key={group.id}
            // className={`relative p-6 h-[300px] rounded-3xl border ${group.bg} ${group.border}`}
            // style={{
            //   clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
            // }}
            key={group.id}
            className="relative p-6 rounded-3xl text-gray-900"
            style={{
              backgroundImage: `url(${group.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <div className=" flex mt-20">
              <img
                src={group.image}
                alt={group.title}
                className="w-32 h-32 object-contain mb-4"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {group.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {group.description}
                </p>
              </div>
            </div>

            {/* Edit / Delete */}
            <div className="flex gap-3 text-sm font-medium">
              <Link to="/categories/edit-age-group">
                <button className="text-purple-600 hover:underline flex items-center gap-1">
                  <Pencil size={14} /> Edit
                </button>
              </Link>

              <span className="text-gray-400">|</span>

              <button
                onClick={DeleteModal}
                className="text-red-500 hover:underline flex items-center gap-1"
              >
                <Trash2 size={14} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <DeleteUser
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
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
            Are you sure you want to delete category? Action cannot be reversed
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="border border-[#995BE2] text-[#995BE2] text-[16px] font-medium py-2 px-4 rounded-xl w-[130px]"
            onClick={() => setDeleteModal(false)}
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

          <FullBTN onClick={() => setOpenSuccessfulDeleteModal(false)}>
            Okay
          </FullBTN>
        </div>
      </SuccessfulDelete>
    </div>
  );
}
