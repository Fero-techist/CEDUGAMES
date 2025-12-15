import React from "react";
import { Link } from "react-router-dom";

const LoginSecurity = () => {
  return (
    <div>
      {" "}
      <div className="p-6 font-Nunito text-sm w-full mx-auto">
        {/* Tabs */}
        <div className="flex space-x-6 border-b pb-2">
          <Link
            to="/settings"
            className="text-gray-500 hover:text-[#400167]"
          >
            Account Setting
          </Link>
          <button className="text-[#400167] font-semibold border-b-2 border-[#400167]">
            Login & Security
          </button>
        </div>

        <div className="mt-6 text-[#4C535F]">
          <div className=" max-w-2xl">
            <label htmlFor="">Current Password</label>
            <input
              className="p-3 mb-2 bg-[#E9E0EC] outline-none w-full rounded"
              placeholder="......"
            />
            <label htmlFor="">New Password</label>
            <input
              className="p-3 mb-2 bg-[#E9E0EC] outline-none w-full rounded"
              placeholder="......"
            />

            <label htmlFor="">Confirm New Password</label>
            <input
              className="p-3 mb-2 bg-[#E9E0EC] outline-none w-full rounded"
              placeholder="......"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSecurity;
