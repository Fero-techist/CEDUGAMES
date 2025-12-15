import React from "react";
import playbtn from "../../assets/btn.png";
const Banner = () => {
  return (
    <div>
      <div>
        <div className="p-6 bg-[#702DFF] text-white rounded-xl mb-6">
          <h2 className="text-sm font-light leading-4 font-Nunito">
            CELMA - A HOME FOR EXCELLENCE!
          </h2>
          <p className=" py-2 Satoshi text-lg">
            Manage all features in the most <br /> efficient way on one platform
            - CELMA
          </p>
          <button className="mt-4 flex gap-2 items-center  bg-black text-sm text-white px-4 py-2 rounded-full">
            Start Now
            <img
              className=" w-6 h-6"
              src={playbtn}
              alt="logo"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
