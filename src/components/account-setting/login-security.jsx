import React from "react";
import { Link } from "react-router-dom";

const LoginSecurity = () => {
  return (
    <div>
      {" "}
      <div className="p-6 max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-6 border-b pb-2">
          <Link
            to="/account-setting"
            className="text-gray-500 hover:text-purple-700"
          >
            Account Setting
          </Link>
          <button className="text-purple-700 font-semibold border-b-2 border-purple-700">
            Login & Security
          </button>
        </div>

        <div className="mt-6">
          <p>This is the Login & Security Page. Add form or settings here.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSecurity;
