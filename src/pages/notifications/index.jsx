import React from "react";
import NotificationTable from "../../components/notification-table";
import { FullBTN } from "../../components/button.jsx/Btn";
import { Link } from "react-router-dom";

export default function NotificationsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 text-gray-900">
      <h1 className="text-2xl text-[#1F2937] font-bold mb-4">
        All Notifications
      </h1>

      <div className=" flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold mb-4">All Notifications</h2>
        </div>
        <Link to="/notifications/new-notification">
          <div className="flex justify-end mb-2">
            <button className="bg-purple-600 text-white px-5 py-2  rounded-xl text-sm font-medium hover:bg-purple-700 transition">
              Send New
            </button>
          </div>
        </Link>
      </div>
      <p className="text-gray-500 font-Nunito text-sm mb-6">
        Manage all past and scheduled notifications and alerts for the Kids
        Games Mobile App.
      </p>

      {/* Table */}
      <NotificationTable />
    </div>
  );
}
