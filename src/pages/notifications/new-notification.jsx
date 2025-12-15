import React, { useState } from "react";
import { SuccessModal } from "../../components/modal";
import { FullBTN } from "../../components/button.jsx/Btn";
import CTA from "../../assets/cta.png";
export default function NewNotificationForm() {
  const [form, setForm] = useState({
    title: "",
    message: "",
    type: "",
    audience: "",
    schedule: "",
  });

  const [notificationModal, setNotificationModal] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = () => setNotificationModal(true);

  return (
    <div className="w-full max-w-8xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        New Notifications
      </h1>

      {/* Form Container */}
      <div className="max-w-xl space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter  notification title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Notification type
          </label>
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Target Audience
          </label>
          <input
            type="text"
            name="audience"
            value={form.audience}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Schedule
          </label>
          <input
            type="text"
            name="schedule"
            value={form.schedule}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={openModal}
          className="mt-3 bg-purple-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-purple-700 transition"
        >
          Send Notification
        </button>
      </div>

      <SuccessModal
        isOpen={notificationModal}
        onClose={() => setNotificationModal(false)}
      >
        <div className="text-center ">
          <img
            src={CTA}
            alt="cta"
            className=" w-28 h-28 mx-auto"
          />
          <p className=" text-2xl font-bold mb-4">Notification Sent!</p>
          <p className=" text-base mb-4">
            <span className=" font-bold ">Notification </span>
            have been sent to intended recipients successfully
          </p>

          <FullBTN onClick={() => setNotificationModal(false)}>Okay</FullBTN>
        </div>
      </SuccessModal>
    </div>
  );
}
