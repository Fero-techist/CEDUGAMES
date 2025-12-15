import React from "react";
import banner from "../../assets/settin.png";
import admin from "../../assets/admin.png";

export default function AccountProfile() {
  const [activeTab, setActiveTab] = React.useState("Update Profile");

  const tabs = [
    "Update Profile",
    "Update Password",
    "Leaderboard Settings",
    "Badge Settings",
    "Other Settings",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen bg-gray-50 p-6 font-Outfit">
      <h2 className="text-xl font-semibold mb-4">Account Profile</h2>

      <div className="flex items-center font-bold gap-6 border-b pb-2 text-sm">
        {tabs.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`pb-2 transition-all duration-200 ${
              activeTab === item
                ? "border-b-2 border-purple-500 text-purple-600"
                : "text-gray-500 hover:text-purple-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {activeTab === "Update Profile" && (
        <div className="mt-6  rounded-xl shadow-sm p-4">
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <img
              src={banner}
              alt="cover"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center -mt-16">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img
                src={admin}
                alt="profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer text-xs">
                ✏️
              </div>
            </div>
          </div>

          <div className="mt-8 w-full grid gap-6">
            <div className="max-w-xl">
              <div>
                <label className="text-sm text-gray-600">Profile Name</label>
                <input className="w-full mt-1 p-3 border outline-none rounded-xl bg-gray-100" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Profile Email</label>
                <input className="w-full mt-1 p-3 border outline-none rounded-xl bg-gray-100" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Role</label>
                <input className="w-full mt-1 p-3 border outline-none rounded-xl bg-gray-100" />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl shadow">
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Update Password" && (
        <div className="mt-6 rounded-xl shadow-sm p-6 text-center text-gray-600">
          <form>
            <label>Current Password</label>
            <input
              type="text"
              placeholder="Current Password"
            />

            <div>
              <label>New Password</label>
              <input
                type="text"
                placeholder="New password "
              />
            </div>

            <div>
              <label>Confirm New Password</label>
              <input
                type="text"
                placeholder="Confirm New Password"
              />
            </div>

            <input
              type="submit"
              value="Update Password"
            />
          </form>
        </div>
      )}

      {activeTab === "Leaderboard Settings" && (
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6 text-center text-gray-600">
          Leaderboard Settings Page Coming Soon...
        </div>
      )}

      {activeTab === "Badge Settings" && (
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6 text-center text-gray-600">
          Badge Settings Page Coming Soon...
        </div>
      )}

      {activeTab === "Other Settings" && (
        <div className="mt-6 bg-white rounded-xl shadow-sm p-6 text-center text-gray-600">
          Other Settings Page Coming Soon...
        </div>
      )}
    </div>
  );
}
