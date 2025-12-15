import React, { useState } from "react";
import { SuccessModal } from "../../components/modal";
import CTA from "../../assets/cta.png";
import { FullBTN } from "../../components/button.jsx/Btn";

const AddAgeGroup = () => {
  const [form, setForm] = useState({
    label: "",
    groupName: "",
    image: "",
    description: "",
  });
  const [openAgeCategory, setOpenAgeCateggory] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const openModal = () => setOpenAgeCateggory(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Package Created:", form);
    // submit to backend here
  };
  return (
    <div className=" w-full max-w-7xl mx-auto">
      <h1 className=" text-2xl  font-semibold mb-8"> Add Age Group</h1>
      <form
        action=""
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            className="block mb-1"
            htmlFor=""
          >
            Label
          </label>
          <input
            type="text"
            name="label"
            placeholder="Age 6 - 9"
            value={form.label}
            onChange={handleChange}
            className="w-1/3 border rounded-xl px-4 py-4 outline-none "
          />
        </div>

        <div>
          <label
            className="block mb-1"
            htmlFor=""
          >
            Age Group Name
          </label>
          <input
            type="text"
            name="groupName"
            placeholder="Enter name"
            value={form.groupName}
            onChange={handleChange}
            className="w-1/3 border rounded-xl px-4 py-4 outline-none "
          />
        </div>

        <div>
          <label
            className="block mb-1"
            htmlFor=""
          >
            Upload Image
          </label>
          <input
            type="text"
            name="groupName"
            placeholder="Select from device"
            value={form.groupName}
            onChange={handleChange}
            className="w-1/3 border rounded-xl px-4 py-4 outline-none "
          />
        </div>

        <div>
          <label
            className="block mb-1"
            htmlFor=""
          >
            Description
          </label>
          <input
            type="text"
            name="groupName"
            placeholder="Select from device"
            value={form.groupName}
            onChange={handleChange}
            className="w-1/3 border min-h-40 rounded-xl px-4 py-4 outline-none "
          />
        </div>

        <button
          onClick={openModal}
          className="bg-[#A259FF] text-white px-6 py-4 rounded-xl mt-4"
        >
          Add Category
        </button>
      </form>

      <SuccessModal
        isOpen={openAgeCategory}
        onClose={() => setOpenAgeCateggory(false)}
      >
        <div className="text-center ">
          <img
            src={CTA}
            alt="cta"
            className=" w-28 h-28 mx-auto"
          />
          <p className=" text-2xl font-bold mb-4">Action Completed!</p>
          <p className=" text-lg font-light mb-4">
            <span className=" font-bold ">Category "Name"</span> has been added
            successfully
          </p>

          <FullBTN onClick={() => setOpenAgeCateggory(false)}>Okay</FullBTN>
        </div>
      </SuccessModal>
    </div>
  );
};

export default AddAgeGroup;
