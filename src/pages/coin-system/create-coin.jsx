import React, { useState } from "react";
import { SuccessModal } from "../../components/modal";
import CTA from "../../assets/cta.png";
import { FullBTN } from "../../components/button.jsx/Btn";

// const CreateCoinPackage = ({ onBack }) => {
//   const [form, setForm] = useState({
//     packageName: "",
//     coins: "",
//     price: "",
//     discount: "",
//     available: true,
//   });
//   const [packageModal, setPackageModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const openModal = () => setPackageModal(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Package Created:", form);
//     // submit to backend here
//   };

//   return (
//     <div className="w-full min-h-screen px-4 py-10 bg-[#FAFAFA]">

//       <h2 className="text-2xl font-semibold mb-10">Create Coin Package</h2>
//       <form
//         onSubmit={handleSubmit}
//         className="space-y-6 max-w-2xl"
//       >
//         {/* Package Name */}
//         <div>
//           <label className="block mb-1 text-sm font-medium">Package Name</label>
//           <input
//             type="text"
//             name="packageName"
//             placeholder="Enter  package name"
//             value={form.packageName}
//             onChange={handleChange}
//             className="w-full border rounded-xl px-4 py-4 outline-none"
//           />
//         </div>

//         {/* Number of Coins */}
//         <div>
//           <label className="block mb-1 text-sm font-medium">
//             Number of Coins
//           </label>
//           <input
//             type="number"
//             name="coins"
//             placeholder="Enter  number of coins"
//             value={form.coins}
//             onChange={handleChange}
//             className="w-full border rounded-xl px-4 py-4 outline-none"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 text-sm font-medium">Price (NGN)</label>
//           <input
//             type="number"
//             name="price"
//             placeholder="Enter  price in NGN"
//             value={form.price}
//             onChange={handleChange}
//             className="w-full border rounded-xl px-4 py-4 outline-none"
//           />
//         </div>

//         {/* Discount */}
//         <div>
//           <label className="block mb-1 text-sm font-medium">Discount</label>
//           <input
//             type="number"
//             name="discount"
//             placeholder=""
//             value={form.discount}
//             onChange={handleChange}
//             className="w-full border rounded-xl px-4 py-4 outline-none"
//           />
//         </div>

//         {/* Availability */}
//         <div className="mt-8">
//           <p className="text-sm font-semibold mb-2">Availability</p>

//           <label className="flex items-start gap-4 border rounded-xl p-4 cursor-pointer">
//             <input
//               type="checkbox"
//               name="available"
//               checked={form.available}
//               onChange={handleChange}
//               className="w-5 h-5 mt-1 accent-purple-600"
//             />

//             <div>
//               <p className="text-sm font-medium">Available</p>
//               <p className="text-xs text-gray-500">
//                 This package will be available for purchase.
//               </p>
//             </div>
//           </label>
//         </div>

//         <button
//           onClick={openModal}
//           type="submit"
//           className="bg-[#A259FF] text-white px-6 py-4 rounded-xl mt-4"
//         >
//           Create Package
//         </button>
//       </form>

//     </div>
//   );
// };

// export default CreateCoinPackage;

const CreateCoinPackage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    packageName: "",
    coins: "",
    price: "",
    discount: "",
    availability: "available",
  });

  const [packageModal, setPackageModal] = useState(false);

  const openModal = () => setPackageModal(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="max-w-7xl p-6">
        <div className=" mb-2">
          <button onClick={onBack}>Back</button>
          {/* Edit form */}
        </div>

        <h2 className="text-2xl font-bold mb-8">Create Coin Package</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Package Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Package Name
            </label>
            <input
              type="text"
              name="packageName"
              placeholder="Enter package name"
              value={formData.packageName}
              onChange={handleChange}
              className="w-1/3 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Number of Coins */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Number of Coins
            </label>
            <input
              type="number"
              name="coins"
              placeholder="Enter number of coins"
              value={formData.coins}
              onChange={handleChange}
              className="w-1/3 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Price (NGN)
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price in NGN"
              value={formData.price}
              onChange={handleChange}
              className="w-1/3 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Discount */}
          <div>
            <label className="block text-sm font-medium mb-2">Discount</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              className="w-1/3 rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium mb-3">
              Availability
            </label>

            <div className="flex items-center justify-between border border-gray-300 rounded-xl p-4">
              <div>
                <p className="font-medium">Available</p>
                <p className="text-sm text-gray-500">
                  This package will be available for purchase.
                </p>
              </div>

              <input
                type="radio"
                name="availability"
                value="available"
                checked={formData.availability === "available"}
                onChange={handleChange}
                className="h-5 w-5 accent-purple-600"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              onClick={openModal}
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl  font-semibold hover:bg-purple-700 transition"
            >
              Create Package
            </button>
          </div>
        </form>
      </div>

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
