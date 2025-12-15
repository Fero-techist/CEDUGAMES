import React, { useState } from "react";
import { SuccessModal } from "../modal";

export default function NewNotification({ isOpen, onClose, addNotification }) {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    recipients: {
      everyone: false,
      tutors: false,
      students: false,
      guardians: false,
    },
  });

  const handleChange = (ev) => {
    const { name, value, type, checked } = ev.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newNotification = {
      title: formData.title,
      body: formData.message,
      date: new Date().toLocaleDateString(),
    };
    addNotification(newNotification);
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[525px]">
        <button
          onClick={onClose}
          className="text-[30px] text-[#758E95] hover:text-gray-900 float-right"
        >
          &times;
        </button>
        <h2 className="text-purple font-satoshi text-20 font-bold mb-6">
          New Notifications
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <InputField
              label="Enter Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <TextField
              label="Body/Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#400167] font-medium text-16 font-Satoshi mb-2">
              Send to:
            </label>
            <CheckboxField
              label="Everyone"
              name="recipients.everyone"
              checked={formData.recipients.everyone}
              onChange={handleChange}
            />
            <CheckboxField
              label="Tutors"
              name="recipients.tutors"
              checked={formData.recipients.tutors}
              onChange={handleChange}
            />
            <CheckboxField
              label="Students"
              name="recipients.students"
              checked={formData.recipients.students}
              onChange={handleChange}
            />
            <CheckboxField
              label="Guardians"
              name="recipients.guardians"
              checked={formData.recipients.guardians}
              onChange={handleChange}
            />
          </div>
          <div className="text-left">
            <button
              onClick={SuccessModal}
              className="bg-purple-900 text-white px-5 py-3 rounded-full font-semibold"
            >
              Send notification
            </button>
          </div>
        </form>
        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={closeSuccessModal}
        />
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="block text-[#400167] font-medium text-16 font-Satoshi">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-[1.5px] border-[#400167] outline-none px-4 py-3 rounded-md focus:ring-2 focus:ring-[#400167]"
      />
    </div>
  );
}

function TextField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="block text-[#400167] font-medium text-16 font-Satoshi">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows="4"
        className="w-full px-4 py-2 border-[1.5px] border-[#400167] rounded-md focus:outline-none focus:ring-2 focus:ring-[#400167]"
      />
    </div>
  );
}

function CheckboxField({ label, name, checked, onChange }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-[#400167] border-gray-300 rounded focus:ring-[#400167]"
      />
      <label className="text-[#400167] font-medium text-16 font-Satoshi">
        {label}
      </label>
    </div>
  );
}
