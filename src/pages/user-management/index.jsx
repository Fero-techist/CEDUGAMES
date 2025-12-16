import React, { useMemo } from "react";
import StatsCard from "../../components/statsCard";
import DataTable from "../../components/data-table";
import { Coins, Gamepad2, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const UserManagement = () => {
  const userManagementStats = [
    {
      title: "Total Users",
      value: "24,567",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      change: "+12.5%",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      title: "Active Games",
      value: "1,234",
      icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
      change: "+8.2%",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      title: "Coins Purchased",
      value: "₦2.4M",
      icon: <Coins className="w-6 h-6 text-pink-500" />,
      change: "+23.1%",
      gradient: "from-pink-500 to-red-400",
    },
    {
      title: "Levels Completed",
      value: "45,892",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      change: "+15.8%",
      gradient: "from-yellow-500 to-orange-400",
    },
  ];

  const users = useMemo(() => generateMockUsers(), []);
  const columns = [
    {
      key: "name",
      label: "User",
      render: (value, row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.avatar || "/placeholder.svg"}
            alt={value}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium text-gray-900">{value}</span>
        </div>
      ),
    },
    {
      key: "email",
      label: "Email address",
    },
    {
      key: "coins",
      label: "Amount",
      render: (value) => `${value} Coins`,
    },
    {
      key: "status",
      label: "Status",
      render: (value) => (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeColor(
            value
          )}`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "dateJoined",
      label: "Date Joined",
    },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <Link to="/user-management/manage-user">
          <button className="text-sm font-bold text-purple-600 hover:text-purple-700 hover:underline">
            Manage User
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div className="px-8 space-y-4">
      <StatsCard data={userManagementStats} />
      <DataTable
        data={users}
        columns={columns}
        title="All Users"
        itemsPerPage={8}
      />
    </div>
  );
};

export default UserManagement;

const generateMockUsers = () => {
  const names = [
    "Sarah Johnson",
    "Michael Chen",
    "Emma Wilson",
    "James Brown",
    "Olivia Davis",
    "David Lee",
    "Sophie Anderson",
    "Ryan Thompson",
    "Lily Foster",
    "Devin Cremin",
    "Victor Wilderman",
    "Hope Swift",
    "Sharon Pfannerstill",
    "Alex Martinez",
    "Nathan Brooks",
  ];

  const statuses = ["Active", "Suspended", "Inactive", "Pending"];
  const coinAmounts = [50, 500, 1000];
  const timeAgo = [
    "2 mins ago",
    "15 mins ago",
    "32 mins ago",
    "1 hour ago",
    "2 hours ago",
  ];

  const users = [];
  for (let i = 0; i < 72; i++) {
    users.push({
      id: i + 1,
      name:
        names[i % names.length] +
        (i > names.length ? ` ${Math.floor(i / names.length)}` : ""),
      email: "sarah.example@gmail.com",
      coins: coinAmounts[i % coinAmounts.length],
      status: statuses[i % statuses.length],
      dateJoined: timeAgo[i % timeAgo.length],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
    });
  }
  return users;
};

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Suspended":
      return "bg-red-100 text-red-800";
    case "Inactive":
      return "bg-blue-100 text-blue-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
