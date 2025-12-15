import React, { useState } from "react";
import { SuccessModal } from "../../components/modal";
import CTA from "../../assets/cta.png";
import { FullBTN } from "../../components/button.jsx/Btn";

const CreateCoinPackage = ({ onBack }) => {
  const [form, setForm] = useState({
    packageName: "",
    coins: "",
    price: "",
    discount: "",
    available: true,
  });
  const [packageModal, setPackageModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const openModal = () => setPackageModal(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Package Created:", form);
    // submit to backend here
  };

  return (
    <div className="w-full min-h-screen px-4 py-10 bg-[#FAFAFA]">
      <div>
        <button onClick={onBack}>Back</button>
        {/* Edit form */}
      </div>
      <h2 className="text-2xl font-semibold mb-10">Create Coin Package</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-2xl"
      >
        {/* Package Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Package Name</label>
          <input
            type="text"
            name="packageName"
            placeholder="Enter  package name"
            value={form.packageName}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-4 outline-none"
          />
        </div>

        {/* Number of Coins */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Number of Coins
          </label>
          <input
            type="number"
            name="coins"
            placeholder="Enter  number of coins"
            value={form.coins}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-4 outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Price (NGN)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter  price in NGN"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-4 outline-none"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block mb-1 text-sm font-medium">Discount</label>
          <input
            type="number"
            name="discount"
            placeholder=""
            value={form.discount}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-4 outline-none"
          />
        </div>

        {/* Availability */}
        <div className="mt-8">
          <p className="text-sm font-semibold mb-2">Availability</p>

          <label className="flex items-start gap-4 border rounded-xl p-4 cursor-pointer">
            <input
              type="checkbox"
              name="available"
              checked={form.available}
              onChange={handleChange}
              className="w-5 h-5 mt-1 accent-purple-600"
            />

            <div>
              <p className="text-sm font-medium">Available</p>
              <p className="text-xs text-gray-500">
                This package will be available for purchase.
              </p>
            </div>
          </label>
        </div>

        <button
          onClick={openModal}
          type="submit"
          className="bg-[#A259FF] text-white px-6 py-4 rounded-xl mt-4"
        >
          Create Package
        </button>
      </form>
      <SuccessModal
        isOpen={packageModal}
        onClose={() => setPackageModal(false)}
      >
        <div className="text-center ">
          <img
            src={CTA}
            alt="cta"
            className=" w-28 h-28 mx-auto"
          />
          <p className=" text-2xl font-bold mb-4">Action Success</p>
          <p className=" text-base">
            <span className=" font-bold mb-2">New Coin Package</span> have been
            added successfully
          </p>

          <FullBTN onClick={() => setPackageModal(false)}>Okay</FullBTN>
        </div>
      </SuccessModal>
    </div>
  );
};

export default CreateCoinPackage;
