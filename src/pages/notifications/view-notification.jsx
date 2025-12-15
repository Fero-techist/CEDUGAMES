import React from "react";

export default function ViewNotiication({ data, onBack, onDelete }) {
  const notification = {
    message:
      "Hey there! We've added a new game, 'Animal Adventures', perfect for kids aged 3–5. It’s filled with fun puzzles and adorable animals. Check it out now!",
    recipient: "All users",
    sendDate: "November 26, 2025, 10:00 AM",
    status: "Sent",
  };

  return <NotificationDetails data={notification} />;
}

function NotificationDetails({ data, onBack, onDelete }) {
  return (
    <div className="w-full min-h-screen p-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-10">
        Notifications Details
      </h1>

      <div className="max-w-3xl space-y-8">
        {/* Message */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Message</h2>
          <p className="text-gray-800 leading-relaxed">{data.message}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Recipient
          </h2>
          <p className="text-gray-800">{data.recipient}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Send Date
          </h2>
          <p className="text-gray-800">{data.sendDate}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Status</h2>
          <p className="text-gray-800">{data.status}</p>
        </div>

        <div className="flex items-center gap-4 pt-6">
          <button
            onClick={onDelete}
            className="px-6 py-2 border border-purple-600 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition"
          >
            Delete Notification
          </button>

          <button
            onClick={onBack}
            className="px-6 py-2 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition"
          >
            Back to Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
