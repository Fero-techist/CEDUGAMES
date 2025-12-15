import Sara from "../../src/assets/sara.png";
import michael from "../../src/assets/michael.png";
import emma from "../../src/assets/emma.png";
import james from "../../src/assets/james.png";
import Olivia from "../../src/assets/olivia.png";

export default function RecentTransactions() {
  const data = [
    {
      user: "Sarah Johnson",
      type: "Purchase",
      amount: "500 Coins",
      status: "Completed",
      date: "2 mins ago",
      avatar: Sara,
    },
    {
      user: "Michael Chen",
      type: "Reward",
      amount: "50 Coins",
      status: "Completed",
      date: "15 mins ago",
      avatar: michael,
    },
    {
      user: "Emma Wilson",
      type: "Purchase",
      amount: "1000 Coins",
      status: "Completed",
      date: "32 mins ago",
      avatar: emma,
    },
    {
      user: "James Brown",
      type: "Deduction",
      amount: "10 Coins",
      status: "Completed",
      date: "1 hour ago",
      avatar: james,
    },
    {
      user: "Olivia Davis",
      type: "Purchase",
      amount: "100 Coins",
      status: "Pending",
      date: "2 hours ago",
      avatar: Olivia,
    },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Coin Transactions</h2>
        <button className="text-purple-600 text-sm">View All</button>
      </div>

      <table className="w-full text-sm">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-2 text-left">User</th>
            <th className="py-2 text-left">Type</th>
            <th className="py-2 text-left">Amount</th>
            <th className="py-2 text-left">Status</th>
            <th className="py-2 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((tx, index) => (
            <tr
              key={index}
              className="border-b last:border-none"
            >
              <td className="py-3 flex items-center gap-3">
                <img
                  src={tx.avatar}
                  className="w-8 h-8 rounded-full object-cover"
                />
                {tx.user}
              </td>
              {/* <td>{tx.type}</td> */}
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    tx.type === "Purchase"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {tx.type}
                </span>
              </td>
              <td>{tx.amount}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    tx.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {tx.status}
                </span>
              </td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
