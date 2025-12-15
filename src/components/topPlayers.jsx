import Alex from "../../src/assets/Alex.png";
import Sophie from "../../src/assets/sara.png";
import Ryan from "../../src/assets/ryan.png";
import Lily from "../../src/assets/olivia.png";
import { Link } from "react-router-dom";

export default function TopPlayers() {
  const players = [
    {
      rank: 1,
      rankColor: "bg-[#F59E0B]",
      color: "from-[#FFFBEB] to-[#FEF3C7]",
      name: "Alex Martinez",
      level: "Level 45",
      points: "12,450",
      avatar: Alex,
    },
    {
      rank: 2,
      rankColor: "bg-[#9CA3AF]",
      color: "from-[#F9FAFB] to-[#F3F4F6]",
      name: "Sophie Anderson",
      level: "Level 42",
      points: "11,890",
      avatar: Sophie,
    },
    {
      rank: 3,
      rankColor: "bg-[#EA580C]",
      color: "from-[#FFF7ED] to-[#FFEDD5]",
      name: "Ryan Thompson",
      level: "Level 40",
      points: "10,567",
      avatar: Ryan,
    },
    {
      rank: 4,
      rankColor: "bg-[#D1D5DB]",
      color: "from-[#F9FAFB] to-[#E5E7EB]",
      name: "Lily Foster",
      level: "Level 38",
      points: "9,823",
      avatar: Lily,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Top Players</h2>
        <Link to="/leaderboard">
          <button className="text-[#4F46E5] font-semibold text-sm">
            View Leaderboard
          </button>
        </Link>
      </div>

      <div className="space-y-3">
        {players.map((p, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between bg-gradient-to-r ${p.color} p-3 rounded-xl`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`w-8 h-8 flex items-center justify-center ${p.rankColor} text-white rounded-full`}
              >
                {p.rank}
              </span>
              <img
                src={p.avatar}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-xs text-gray-500">{p.level}</p>
              </div>
            </div>

            <div>
              <p className="font-semibold">{p.points}</p>
              <p className="text-xss">Points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
