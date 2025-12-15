// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";

// const categories = [
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
//   { name: "ICAN", dateCreated: "09 May, 2024" },
// ];

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[256px] h-[264px]">
        <button
          onClick={onClose}
          className=" text-[30px] text-[#758E95] hover:text-gray-900 float-right "
        >
          &times;
        </button>
        <div className="mt-14">{children}</div>
      </div>
    </div>
  );
};

export const InviteModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[576px] h-[545px]">
        <button
          onClick={onClose}
          className="text-[30px] text-[#758E95] hover:text-gray-900 float-right"
        >
          &times;
        </button>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export function SuccessModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md shadow-lg p-6 w-[390px] h-[366px] flex flex-col ">
        <button
          onClick={onClose}
          className="text-[30px] text-[#758E95] hover:text-gray-900 self-end"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export function DeleteUser({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-md shadow-lg p-6 w-[390px] h-[366px] flex flex-col ">
          <button
            onClick={onClose}
            className="text-[30px] text-[#758E95] hover:text-gray-900 self-end"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
}

export function SuccessfulDelete({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-md
       shadow-lg p-6 w-[390px] h-[366px] flex flex-col "
      >
        <button
          onClick={onClose}
          className="text-[30px] text-[#758E95] hover:text-gray-900 self-end"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}

export function AddCategory({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[525px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-bold text-[#400167] font-satoshi mt-4">
            Create Category
          </h2>
          <button
            onClick={onClose}
            className="text-[25px] text-[#758E95] hover:text-gray-900 relative right-0 -top-3 mb-6"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function Category({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg shadow-lg w-[256px] h-[273px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] font-bold text-[#400167] font-satoshi mt-4">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-[25px] text-[#758E95] hover:text-gray-900 relative right-0 -top-3 mb-6"
            >
              &times;
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export function LessonsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[256px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-bold text-[#400167] font-satoshi mt-4">
            Choose Lesson
          </h2>
          <button
            onClick={onClose}
            className="text-[25px] text-[#758E95] hover:text-gray-900 relative right-0 -top-3 mb-6"
          >
            &times;
          </button>
        </div>
        <ul>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Lesson Name
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Lesson Name
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Lesson Name
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Lesson Name
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ExamsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[256px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-bold text-[#400167] font-satoshi mt-4">
            Choose Exam
          </h2>
          <button
            onClick={onClose}
            className="text-[25px] text-[#758E95] hover:text-gray-900 relative right-0 -top-3 mb-6"
          >
            &times;
          </button>
        </div>
        <ul>
          <li className="underline text-[#010811] text-[14px] mb-3">
            SSCE Exams
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Cambridge & A-Level
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            JAMB & POST UTME
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            ICAN Certification
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ClassroomsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[256px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] font-bold text-[#400167] font-satoshi mt-4">
            Choose Classroom
          </h2>
          <button
            onClick={onClose}
            className="text-[25px] text-[#758E95] hover:text-gray-900 relative right-0 mb-6 -top-3"
          >
            &times;
          </button>
        </div>
        <ul>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Classroom Name
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Classroom Name
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Classroom Name
          </li>
          <li className="underline text-[#010811] text-[14px] mb-3">
            Classroom Name
          </li>
        </ul>
      </div>
    </div>
  );
}

export function AddClassroom({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[525px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] font-bold text-[#400167] font-satoshi mt-4">
              Add Classroom
            </h2>
            <button
              onClick={onClose}
              className="text-[30px] text-[#758E95] hover:text-gray-900 relative right-0 mb-6 -top-3"
            >
              &times;
            </button>
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
