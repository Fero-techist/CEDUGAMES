import React, { useState } from "react";
import leaders from "../../assets/leaders.png";
import Table from "../../components/table";
import CTA from "../../assets/cta.png";
import { DeleteUser, SuccessfulDelete } from "../../components/modal";

const UserProfile = () => {
  const [openDelete, setOpenDelete] = useState(false);
  const [openSuccessfulDeleteModal, setOpenSuccessfulDeleteModal] =
    useState(false);

  const confirmDelete = () => {
    setOpenDelete(false);
    setOpenSuccessfulDeleteModal(true);
  };

  const closeSuccessfulDeleteModal = () => setOpenSuccessfulDeleteModal(false);

  const openModal = () => setOpenDelete(true);
  const gameProgress = [
    {
      game: "Memory Match",
      level: "Level 5",
      score: 1200,
      lastPlayed: "2024-03-09",
    },
    {
      game: "Puzzle Adventure",
      level: "Level 10",
      score: 2500,
      lastPlayed: "2024-03-08",
    },
    {
      game: "Coloring Fun",
      level: "Completed",
      score: "N/A",
      lastPlayed: "2024-03-07",
    },
  ];

  const columns = [
    { label: "Game", accessor: "game" },

    {
      label: "Level",
      accessor: "level",
      render: (value) => (
        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
          {value}
        </span>
      ),
    },

    { label: "Score", accessor: "score" },

    { label: "Last Played", accessor: "lastPlayed" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <h1 className="text-2xl font-semibold text-[#121217]">User Profile</h1>
      <p className="text-[#61708A] text-sm mt-1">
        Manage user details, activity, and game progress.
      </p>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-4">
          <div className="w-40 h-40">
            <img
              src={leaders}
              alt="User Avatar"
              className="w-full h-full rounded-full border border-gray-200 object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sarah Johnson</h2>
            <p className="text-gray-500 text-sm">User ID: 1234567890</p>
            <p className="text-gray-500 text-sm">Joined: 2023-01-15</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={openModal}
            className="px-6 py-2 border border-[#9B5DE5] font-bold w-44 text-purple-600 rounded-xl hover:bg-purple-50 text-sm"
          >
            Delete user
          </button>

          <button
            onClick={openModal}
            className="px-6 py-2 bg-purple-600 text-white rounded-xl w-44 hover:bg-purple-700 text-sm"
          >
            Suspend user
          </button>
        </div>
      </div>

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
          <p>Are you sure you want to delete user? Action cannot be reversed</p>
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
            <button className=" bg-[#995BE2]  w-[304px]  text-white px-6 py-2 ">
              Okay
            </button>
          </div>
        </div>
      </SuccessfulDelete>

      {/* USER DETAILS */}
      <h3 className="text-lg font-semibold mt-12 mb-4">User Details</h3>

      <div className="grid grid-cols-2 gap-y-8 border-t border-b py-8 text-sm">
        <div>
          <p className="text-gray-500">Email</p>
          <p className="text-gray-900 mt-1">sarah.johnson@email.com</p>
        </div>

        <div>
          <p className="text-gray-500">Phone</p>
          <p className="text-gray-900 mt-1">+1 (555) 987-6543</p>
        </div>

        <div>
          <p className="text-gray-500">Age</p>
          <p className="text-gray-900 mt-1">9</p>
        </div>

        <div>
          <p className="text-gray-500">Location</p>
          <p className="text-gray-900 mt-1">New York, USA</p>
        </div>
      </div>

      {/* GAME PROGRESS */}
      <h3 className="text-2xl font-semibold mt-12 mb-4">Game Progress</h3>

      {/* <div className="overflow-x-auto border border-gray-200 rounded-xl">


        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 font-medium text-gray-700">
                Game
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">
                Level
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">
                Score
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-700">
                Last Played
              </th>
            </tr>
          </thead>

          <tbody>
            {gameProgress.map((item, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-200"
              >
                <td className="py-4 px-4">{item.game}</td>
                <td className="py-4 px-4">
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    {item.level}
                  </span>
                </td>
                <td className="py-4 px-4">{item.score}</td>
                <td className="py-4 px-4">{item.lastPlayed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <Table
        columns={columns}
        data={gameProgress}
      />
    </div>
  );
};

export default UserProfile;
