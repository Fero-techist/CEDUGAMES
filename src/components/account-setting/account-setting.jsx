import { Link } from "react-router-dom";
import galleryImg from "../../assets/gallery-add.png";

const AccountSettings = () => {
  return (
    <div className="p-6 w-full mx-auto">
      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2">
        <button className="text-[#400167] font-semibold border-b-2 border-[#400167]">
          Account Setting
        </button>
        <Link
          to="/login-security"
          className="text-gray-500 hover:text-[#400167]"
        >
          Login & Security
        </Link>
      </div>

      {/* Profile Picture Upload */}
      <div className="mt-6">
        <p className="font-semibold">Your Profile Picture</p>
        {/* <div className="mt-2 w-32 h-32 border-dashed border-2 rounded-md flex items-center justify-center text-center text-sm text-purple-700 cursor-pointer">
          <span>
            Upload your
            <br />
            photo
          </span>
        </div> */}

        <div className=" border-2 grid justify-center items-center w-[130px] h-[130px] bg-[#E9E0EC] border-dotted rounded-[18px]">
          <div className="">
            <img
              className=" w-10 h-10 grid justify-center items-center  mx-auto"
              src={galleryImg}
              alt="galleryImg"
            />
            <p className=" text-[#4C535F]  font-Nunito text-center">
              Upload <br /> your photo
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mt-8 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="p-3 bg-[#E9E0EC] w-full rounded"
            placeholder="Please enter your full name"
          />
          <input
            className="p-3 bg-[#E9E0EC] w-full rounded"
            placeholder="Please enter your email"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="p-3 bg-[#E9E0EC] w-full rounded"
            placeholder="Please enter your username"
          />
          <div className="flex">
            <span className="p-3 bg-purple-100 rounded-l">+1</span>
            <input
              className="p-3 bg-[#E9E0EC] w-full rounded-r"
              placeholder="Please enter your phone number"
            />
          </div>
        </div>
        <textarea
          className="w-full p-3 bg-[#E9E0EC] rounded h-32"
          placeholder="Write your Bio here e.g your hobbies, interests ETC"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex items-center space-x-4">
        <button className="bg-purple-700 text-white px-6 py-2 rounded">
          Update Profile
        </button>
        <button className="text-gray-500">Cancel</button>
      </div>
    </div>
  );
};

export default AccountSettings;
