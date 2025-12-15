import React, { useState } from "react";
import CTA from "../../assets/cta.png";
import { SuccessModal } from "../../components/modal";

export default function UploadFiles() {
  const [openQueueModal, setOpenQueueModal] = useState(false);

  const uploadBlocks = [
    {
      title: "Upload Audio",
      subtitle: "Drag and drop or browse to upload an audio file",
      button: "Upload Audio",
    },
    {
      title: "Upload Video",
      subtitle: "Drag and drop or browse to upload a video file",
      button: "Upload Video",
    },
    {
      title: "Upload Image",
      subtitle: "Drag and drop or browse to upload an image file",
      button: "Upload Image",
    },
    {
      title: "Upload File",
      subtitle: "Drag and drop or browse to upload a file",
      button: "Upload File",
    },
  ];

  const QueueModal = () => setOpenQueueModal(true);
  const closeQueueModal = () => setOpenQueueModal(false);

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Add New Question
      </h1>

      {/* SECTION TITLE */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">Upload Files</h2>

      <div className="space-y-8">
        {uploadBlocks.map((block, index) => (
          <div
            key={index}
            className=" border-2 border-dashed border-gray-300 rounded-xl p-10 bg-white flex flex-col items-center text-center"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {block.title}
            </h3>

            <p className="text-gray-600 mb-6">{block.subtitle}</p>

            <button className="px-6 py-2 bg-purple-200 text-purple-700 font-medium rounded-xl hover:bg-purple-300 transition">
              {block.button}
            </button>
          </div>
        ))}
      </div>

      <SuccessModal
        isOpen={openQueueModal}
        onClose={closeQueueModal}
      >
        <div>
          <img
            src={CTA}
            alt=""
            className=" w-28 h-28 flex mx-auto justify-center items-center"
          />
          <p className=" text-[22px] mb-2 font-bold text-black text-center">
            Questions Added!
          </p>
          <p className=" text-[18px] mb-4   text-center text-black">
            <span className=" font-bold"> New question</span> has been added
            successfully!
          </p>

          <button
            onClick={() => setOpenQueueModal(false)}
            className=" bg-[#995BE2] justify-center items-center mx-auto flex text-white w-[304px] h-[44px]"
          >
            Okay
          </button>
        </div>
      </SuccessModal>

      <div
        onClick={QueueModal}
        className="flex justify-end mt-10"
      >
        <button className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition">
          Add Question
        </button>
      </div>
    </div>
  );
}
