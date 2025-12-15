"use client";

import { useState } from "react";
import Table from "../../components/table";
import leaders from "../../assets/leaders.png";
import BadgeOne from "../../assets/badgeOne.png";
import BadgeTwo from "../../assets/badgeTwo.png";
import BadgeTree from "../../assets/badgethree.png";
import BadgeFour from "../../assets/badgefour.png";
import BadgeFive from "../../assets/badgeFive.png";

const UserDetails = ({ userId = 1 }) => {
  const [showAdjustModal, setShowAdjustModal] = useState(false);

  // Mock user data
  const user = {
    id: 1254605890,
    name: "Alex Martinez",
    rank: "1st",
    joinedDate: "2025-01-15",
    avatar: leaders,
  };

  // Mock game levels
  const gameLevels = [
    {
      level: "Level 1-5 (Starter)",
      status: "Completed",
      score: 1000,
      timeTaken: "00:05:23",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      level: "Level 6-10 (Hero)",
      status: "Completed",
      score: 2000,
      timeTaken: "00:06:12",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      level: "Level 30 (Super Hero)",
      status: "Completed",
      score: 3000,
      timeTaken: "00:07:01",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      level: "Level 31-50 (True Thief)",
      status: "In Progress",
      score: 4200,
      timeTaken: "00:06:30",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      level: "Level 51-60",
      status: "Locked",
      score: 0,
      timeTaken: "00:00:00",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ];

  // Mock coin history
  const coinHistory = [
    { date: "2025-01-15", activity: "Completed Level 1", coinsEarned: "+100" },
    { date: "2025-03-16", activity: "Completed Level 2", coinsEarned: "+95" },
    { date: "2025-03-17", activity: "Daily Login Bonus", coinsEarned: "+20" },
  ];

  // Mock badges
  const badges = [
    { name: "Level 10 Master", icon: BadgeOne },
    { name: "Daily Player", icon: BadgeTwo },
    { name: "Level 20 Master", icon: BadgeTree },
    { name: "Speed god", icon: BadgeFour },
    { name: "Daily Player", icon: BadgeFive },
  ];

  const columns = [
    { label: "Level", accessor: "level" },
    {
      label: "Status",
      accessor: "status",
      render: (value, row) => (
        <span
          className={`inline-block px-3 py-1 rounded text-xs font-medium ${row.statusColor}`}
        >
          {value}
        </span>
      ),
    },
    { label: "Score", accessor: "score" },
    { label: "Time Taken", accessor: "timeTaken" },
  ];

  return (
    <div className="w-full max-w-7xl  mx-auto p-6  rounded-lg">
      <p className=" text-2xl font-bold mb-4">User Leaderboard Details </p>
      <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
        <div className="w-40 h-40 rounded-full bg-purple-300 flex items-center justify-center text-4xl">
          <img
            src={user.avatar}
            alt={user.name}
            className=" w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-sm text-gray-600">User ID: {user.id}</p>
          <p className="text-sm text-gray-600">Joined: {user.joinedDate}</p>
          <p className="text-sm font-medium text-purple-600">
            Ranked: {user.rank}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Game Levels Completed
        </h2>
        {/* <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm min-h-[360px]">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Level
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Score
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Time Taken
                </th>
              </tr>
            </thead>
            <tbody>
              {gameLevels.map((level, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {level.level}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded text-xs font-medium ${level.statusColor}`}
                    >
                      {level.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {level.score}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {level.timeTaken}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        <Table
          columns={columns}
          data={gameLevels}
        />
      </div>

      {/* Coin Earnings History Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#121217] mb-4">
          Coin Earnings History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm min-h-[264px]">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Activity
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 text-sm">
                  Coins Earned
                </th>
              </tr>
            </thead>
            <tbody>
              {coinHistory.map((entry, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {entry.date}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {entry.activity}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {entry.coinsEarned}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Badges Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Badges</h2>
        <div className="flex justify-between flex-wrap gap-4">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 items-center"
            >
              <div className="w-48 h-48 rounded-lg bg-gray-200 flex items-center justify-center text-3xl mb-2 shadow">
                <img
                  src={badge.icon}
                  alt={badge.name}
                />
              </div>
              <p className="text-xs text-center text-gray-700 font-medium">
                {badge.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Adjust Leaderboard Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAdjustModal(true)}
          className="px-6 py-2 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition"
        >
          Adjust Leaderboard
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
