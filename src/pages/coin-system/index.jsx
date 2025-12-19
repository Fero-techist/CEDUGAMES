import React, { useState } from "react";
import Table from "../../components/table";
import CreateCoinPackage from "./create-coin";
import EditCoinPage from "./edit-coin-package";
import CTA from "../../assets/cta.png";
import { SuccessModal } from "../../components/modal";
import { FullBTN } from "../../components/button.jsx/Btn";

export default function CoinManagement() {
  const [activeTab, setActiveTab] = useState("packages");
  const [showCreatePage, setShowCreatePage] = useState(false);
  const [coinRewards, setCoinRewards] = useState(false);
  const [editReward, setEditReward] = useState(null);

  const transactions = [
    {
      user: "Sophia Clark",
      type: "Purchase",
      amount: "+500",
      date: "2024-07-26",
      description: "In-app purchase of 500 coins",
      color: "bg-purple-100 text-purple-600",
    },
    {
      user: "Liam Walker",
      type: "Reward",
      amount: "+100",
      date: "2024-07-25",
      description: "Daily login reward",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      user: "Olivia Carter",
      type: "Deduction",
      amount: "-200",
      date: "2024-07-24",
      description: "Game play deduction",
      color: "bg-red-100 text-red-600",
    },
    {
      user: "Noah Evans",
      type: "Purchase",
      amount: "+1000",
      date: "2024-07-23",
      description: "Purchase of 1000 coins",
      color: "bg-purple-100 text-purple-600",
    },
    {
      user: "Ava Cooper",
      type: "Reward",
      amount: "+50",
      date: "2024-07-22",
      description: "Level completion reward",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      user: "Ethan Reed",
      type: "Deduction",
      amount: "-150",
      date: "2024-07-21",
      description: "Game play deduction",
      color: "bg-red-100 text-red-600",
    },
    {
      user: "Isabella Morgan",
      type: "Purchase",
      amount: "+250",
      date: "2024-07-20",
      description: "Purchase of 250 coins",
      color: "bg-purple-100 text-purple-600",
    },
    {
      user: "Jackson Fisher",
      type: "Reward",
      amount: "+75",
      date: "2024-07-19",
      description: "Achievement reward",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      user: "Mia Harrison",
      type: "Deduction",
      amount: "-300",
      date: "2024-07-18",
      description: "Game play deduction",
      color: "bg-red-100 text-red-600",
    },
    {
      user: "Aiden Bennett",
      type: "Purchase",
      amount: "+750",
      date: "2024-07-17",
      description: "Purchase of 750 coins",
      color: "bg-purple-100 text-purple-600",
    },
    {
      user: "Mia Harrison",
      type: "Deduction",
      amount: "-300",
      date: "2024-07-18",
      description: "Game play deduction",
      color: "bg-red-100 text-red-600",
    },
    {
      user: "Aiden Bennett",
      type: "Purchase",
      amount: "+750",
      date: "2024-07-17",
      description: "Purchase of 750 coins",
      color: "bg-purple-100 text-purple-600",
    },
  ];
  const [form, setForm] = useState({
    activity: "",
    amount: "",
    frequency: "",
  });

  const [deduction, setDeduction] = useState({
    action: "",
    amount: "",
    frequency: "",
  });
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const paginatedRows = transactions.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (pkg) => {
    setEditReward(pkg);
  };

  const deductionChange = (e) => {
    setDeduction({ ...deduction, [e.target.name]: e.target.value });
  };

  const tabs = [
    { id: "packages", label: "Coin Packages" },
    { id: "transactions", label: "Coin Transactions" },
    { id: "rewards", label: "Coin Rewards" },
    { id: "deductions", label: "Coin Deductions" },
  ];

  const coinPackages = [
    {
      name: "Small Pack",
      coins: 500,
      price: 500,
      discount: "0%",
      status: "Active",
    },
    {
      name: "Medium Pack",
      coins: 1000,
      price: 1000,
      discount: "5%",
      status: "Active",
    },
    {
      name: "Large Pack",
      coins: 2000,
      price: 2000,
      discount: "10%",
      status: "Active",
    },
    {
      name: "Mega Pack",
      coins: 5000,
      price: 5000,
      discount: "15%",
      status: "Inactive",
    },
    {
      name: "Jumbo Pack",
      coins: 10000,
      price: 10000,
      discount: "20%",
      status: "Active",
    },
  ];

  const columns = [
    { label: "Package Name", accessor: "name" },
    { label: "Coins", accessor: "coins" },
    {
      label: "Price",
      accessor: "price",
      render: (value) => `₦${value}`,
    },
    { label: "Discount", accessor: "discount" },
    {
      label: "Status",
      accessor: "status",
      render: (value) => (
        <span
          className={`px-8 py-2 rounded-xl text-xs font-medium ${
            value === "Active"
              ? "bg-green-200 text-green-700"
              : "bg-blue-200 text-blue-700"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      label: "Actions",
      accessor: "actions",
      render: (_, row) => (
        <button
          onClick={() => handleEdit(row)}
          className="text-purple-600 text-sm font-medium hover:underline"
        >
          Edit
        </button>
      ),
    },
  ];

  const openModal = () => setCoinRewards(true);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold text-2xl mb-4">Coin Management</h1>
      <div className="p-6 w-full lg:max-w-6xl mx-auto text-gray-900">
        <div className="flex space-x-6 border-b mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-lg font-bold transition-all ${
                {
                  true: "text-purple-600  border-b-2 border-purple-600",
                  false: "text-gray-500",
                }[activeTab === tab.id]
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "packages" && (
          <div>
            {!showCreatePage && !editReward ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Coin Packages</h2>

                  <button
                    onClick={() => setShowCreatePage(true)}
                    className="bg-purple-600 text-white font-bold px-4 py-2 rounded-xl text-sm"
                  >
                    Create New Package
                  </button>
                </div>

                <Table
                  columns={columns}
                  data={coinPackages}
                  onEdit={(row) => setEditReward(row)}
                />
              </>
            ) : editReward ? (
              <EditCoinPage
                data={editReward}
                onBack={() => setEditReward(null)}
              />
            ) : (
              <CreateCoinPackage onBack={() => setShowCreatePage(false)} />
            )}
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-1">Coin Transactions</h2>
            <p className="text-sm text-gray-500 mb-4">
              Manage and track all coin transactions within the app.
            </p>

            <div className=" mb-4">
              <input
                type="text"
                placeholder="Search by user"
                className="w-full bg-gray-100 px-4 py-4 rounded-xl text-sm outline-none"
              />
            </div>

            <div className="flex space-x-3 mb-4">
              <button className="px-4 py-2 bg-gray-100 text-[#9B5DE5] rounded-lg text-sm">
                Date Range ▼
              </button>
              <button className="px-4 py-2 bg-gray-100 text-[#9B5DE5] rounded-lg text-sm">
                Transaction Type ▼
              </button>
              <button className="px-4 py-2 bg-gray-100 text-[#9B5DE5] rounded-lg text-sm">
                User ▼
              </button>
            </div>

            {/* <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-200">
              <table className="w-full text-sm">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="p-4">User</th>
                    <th className="p-4">Transaction Type</th>
                    <th className="p-4">Amount</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 text-gray-900 font-medium">
                      Sophia Clark
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs">
                        Purchase
                      </span>
                    </td>
                    <td className="p-4 text-green-600">+500</td>
                    <td className="p-4 text-[#61708A]">2024-07-26</td>
                    <td className="p-4 text-[#61708A]">
                      In-app purchase of 500 coins
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 text-gray-900 font-medium">
                      Liam Walker
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-xs">
                        Reward
                      </span>
                    </td>
                    <td className="p-4 text-green-600">+100</td>
                    <td className="p-4 text-[#61708A]">2024-07-25</td>
                    <td className="p-4 text-[#61708A]">Daily login reward</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 text-gray-900 font-medium">
                      Olivia Carter
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs">
                        Deduction
                      </span>
                    </td>
                    <td className="p-4 text-red-600">-200</td>
                    <td className="p-4 text-[#61708A]">2024-07-24</td>
                    <td className="p-4 text-[#61708A]">Game play deduction</td>
                  </tr>
                </tbody>
              </table>
            </div> */}
            <div className="bg-white rounded-xl min-h-[400px] text-left border border-[#9B5DE5] overflow-hidden mt-4">
              <table className="w-full text-base">
                <thead className="bg-white border-b">
                  <tr className="text-gray-600">
                    <th className="p-4 font-medium">User</th>
                    <th className="p-4 font-medium">Transaction Type</th>
                    <th className="p-4 font-medium">Amount</th>
                    <th className="p-4 font-medium">Date</th>
                    <th className="p-4 font-medium">Description</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b last:border-none hover:bg-gray-50 transition"
                    >
                      <td className="p-4 text-gray-800">{row.user}</td>

                      {/* TYPE BADGE */}
                      <td className="p-4">
                        <span
                          className={`px-6 py-3 rounded-xl text-xs font-medium ${row.color}`}
                        >
                          {row.type}
                        </span>
                      </td>

                      <td className="p-4 text-gray-800">{row.amount}</td>
                      <td className="p-4 text-gray-600">{row.date}</td>
                      <td className="p-4 text-gray-600">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <p>
                Showing {(page - 1) * rowsPerPage + 1}–
                {Math.min(page * rowsPerPage, transactions.length)} of{" "}
                {transactions.length} transactions
              </p>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => page > 1 && setPage(page - 1)}
                  className="px-4 py-2 border rounded-xl hover:bg-gray-100"
                >
                  Previous
                </button>

                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`px-4 py-2 border rounded-xl ${
                      page === num
                        ? "bg-purple-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {num}
                  </button>
                ))}

                <button
                  onClick={() => page < totalPages && setPage(page + 1)}
                  className="px-4 py-2 border rounded-xl hover:bg-gray-100"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rewards" && (
          <div>
            <p className=" font-bold text-2xl mb-4">Automatic Coin Rewards</p>

            <p className=" text-[#61708A] mb-4 text-base">
              Configure rules for automatic coin rewards based on user activity
            </p>

            <h2 className="text-xl font-semibold mb-6">Earning Rules</h2>

            <div className="max-w-xl space-y-6">
              {/* Activity */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">Activity</label>
                <input
                  type="text"
                  name="activity"
                  value={form.activity}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Reward Amount */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">Reward Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Frequency */}
              <div className="flex flex-col">
                <label className="font-medium mb-1">Frequency</label>
                <input
                  type="text"
                  name="frequency"
                  value={form.frequency}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Save Button */}
            <div
              onClick={openModal}
              className="w-full flex justify-end mt-10"
            >
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition">
                Save Changes
              </button>
            </div>
            <SuccessModal
              isOpen={coinRewards}
              onClose={() => setCoinRewards(false)}
            >
              <div className="text-center ">
                <img
                  src={CTA}
                  alt="cta"
                  className=" w-28 h-28 mx-auto"
                />
                <p className=" text-2xl font-bold mb-4">Action Success</p>
                <p className=" text-base">
                  <span className=" font-bold mb-2">New Coin Package</span> have
                  been added successfully
                </p>

                <FullBTN onClick={() => setCoinRewards(false)}>Okay</FullBTN>
              </div>
            </SuccessModal>
          </div>
        )}

        {activeTab === "deductions" && (
          <div className="w-full text-gray-900">
            <h1 className="text-2xl font-bold mb-2">Coin Deduction Rules</h1>
            <p className="text-gray-500 text-sm mb-10">
              Configure rules for automatic coin rewards based on user activity.
            </p>

            <h2 className="text-xl font-bold mb-6">Deduction Criteria</h2>

            <div className="max-w-xl space-y-6">
              <div className="flex flex-col">
                <label className="font-medium mb-1">Action</label>
                <input
                  type="text"
                  name="activity"
                  value={deduction.action}
                  onChange={deductionChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">
                  Deduction Amount (Coins)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={deduction.amount}
                  onChange={deductionChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Frequency</label>
                <input
                  type="text"
                  name="frequency"
                  value={form.frequency}
                  onChange={handleChange}
                  className="w-full border border-gray-300 mb-4 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold mb-6">Additional Rules</h2>

            <div className="max-w-xl space-y-6">
              <div className="flex flex-col">
                <label className="font-medium mb-1">Action</label>
                <input
                  type="text"
                  name="activity"
                  value={deduction.action}
                  onChange={deductionChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">
                  Deduction Amount (Coins)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={deduction.amount}
                  onChange={deductionChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-medium mb-1">Frequency</label>
                <input
                  type="text"
                  name="frequency"
                  value={form.frequency}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div
              onClick={openModal}
              className="w-full flex justify-end mt-10"
            >
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition">
                Save Changes
              </button>
            </div>

            <SuccessModal
              isOpen={coinRewards}
              onClose={() => setCoinRewards(false)}
            >
              <div className="text-center ">
                <img
                  src={CTA}
                  alt="cta"
                  className=" w-28 h-28 mx-auto"
                />
                <p className=" text-2xl font-bold mb-4">Changes Saved!</p>
                <p className=" text-base mb-6">
                  Changes made have been saved successfully
                </p>

                <FullBTN onClick={() => setCoinRewards(false)}>Okay</FullBTN>
              </div>
            </SuccessModal>
          </div>
        )}
      </div>
    </div>
  );
}
