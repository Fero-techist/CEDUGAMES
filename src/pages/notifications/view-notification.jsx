import React, { useState } from "react";
import { DeleteUser, SuccessfulDelete } from "../../components/modal";
import CTA from "../../assets/cta.png";
import { useNavigate } from "react-router-dom";

export default function ViewNotiication({ data, onBack, onDelete }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openSuccessfulDeleteModal, setOpenSuccessfulDeleteModal] =
    useState(false);

  const confirmDelete = () => {
    setOpenDelete(false);
    setOpenSuccessfulDeleteModal(true);
  };

  const closeSuccessfulDeleteModal = () => setOpenSuccessfulDeleteModal(false);
  const notification = {
    message:
      "Hey there! We've added a new game, 'Animal Adventures', perfect for kids aged 3–5. It’s filled with fun puzzles and adorable animals. Check it out now!",
    recipient: "All users",
    sendDate: "November 26, 2025, 10:00 AM",
    status: "Sent",
  };

  const openModal = () => setOpenDelete(true);
  const navigate = useNavigate();

  return (
    <div>
      <NotificationDetails
        data={notification}
        onDelete={openModal}
        onBack={() => navigate(-1)}
      />

      <DeleteUser
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
      >
        <div className="w-28 h-28 mx-auto">
          <img
            src={CTA}
            alt="cta"
            className="w-full h-full "
          />
        </div>
        <div className="mx-auto text-center">
          <p className="text-2xl font-bold py-2">Confirm Action</p>
          <p>Are you sure you want to delete user? Action cannot be reversed</p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="border border-[#995BE2] text-[#995BE2] text-[16px] font-medium py-2 px-4 rounded-xl w-[130px]"
            onClick={() => setOpenDelete(false)}
          >
            No
          </button>
          <button
            onClick={confirmDelete}
            className="text-[16px] bg-[#995BE2] text-white font-medium py-2 px-4 rounded-[10px] w-[130px]"
          >
            Yes
          </button>
        </div>
      </DeleteUser>

      <SuccessfulDelete
        isOpen={openSuccessfulDeleteModal}
        onClose={closeSuccessfulDeleteModal}
      >
        <div>
          <div>
            <img
              src={CTA}
              alt=" verify delete"
              className=" w-28 h-28 mx-auto"
            />
          </div>

          <h2 className="text-[#000000] text-center text-[22px] leading-[27px] font-bold mb-4">
            Action Completed!
          </h2>
          <p className="text-[#000000] text-center mb-4  text-[14px] leading-[18.9px]">
            <span className="font-bold">User (Name)</span> has been deleted
            succcessfully,
          </p>

          <div className=" mx-auto justify-center flex items-center">
            <button
              onClick={() => setOpenSuccessfulDeleteModal(false)}
              className=" bg-[#995BE2]  w-[304px]  text-white px-6 py-2 "
            >
              Okay
            </button>
          </div>
        </div>
      </SuccessfulDelete>
    </div>
  );
}

function NotificationDetails({ data, onBack, onDelete }) {
  return (
    <div>
      <div className="w-full min-h-screen p-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-10">
          Notifications Details
        </h1>

        <div className="max-w-3xl space-y-8">
          {/* Message */}
          <div>
            <h2 className="text-lg font-bold text-[#121217] mb-2">Message</h2>
            <p className="text-gray-800 leading-relaxed">{data.message}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#121217] mb-1">Recipient</h2>
            <p className="text-gray-800">{data.recipient}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#121217] mb-1">Send Date</h2>
            <p className="text-gray-800">{data.sendDate}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#121217] mb-1">Status</h2>
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
    </div>
  );
}
