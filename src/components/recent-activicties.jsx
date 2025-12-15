// import user from "../../assets/"
import User from "../assets/user.png";
import Level from "../assets/level.png";

export default function RecentActivities() {
  const activities = [
    {
      type: "user",
      text: "New user registered",
      detail: "Emma Wilson joined the platform",
      time: "5 minutes ago",
    },
    {
      type: "level",
      text: "Level completed",
      detail: "Alex Martinez completed Math Level 45",
      time: "12 minutes ago",
    },
    {
      type: "user",
      text: "New user registered",
      detail: "Emma Wilson joined the platform",
      time: "5 minutes ago",
    },
    {
      type: "level",
      text: "Level completed",
      detail: "Alex Martinez completed Math Level 45",
      time: "12 minutes ago",
    },
  ];

  const icons = {
    user: User,
    level: Level,
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>

      <div className="space-y-4">
        {activities.map((a, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3"
          >
            {/* <span className="text-xl">{icons[a.type]}</span> */}
            <img
              src={icons[a.type]}
              className="w-8 "
              alt=""
            />

            <div>
              <p className="font-medium">{a.text}</p>
              <p className="text-sm text-gray-600">{a.detail}</p>
              <p className="text-xs text-gray-400">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
