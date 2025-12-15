import React from "react";
import { Link } from "react-router-dom";

export const CourseCard = ({
  title,
  description,
  duration,
  topics,
  image,
  to,
}) => {
  return (
    <div className="max-w-[300px] h-[320px] rounded overflow-hidden shadow-lg my-4">
      <img
        className="w-full"
        src={image}
        alt="Course"
      />
      <div className="px-3 py-2">
        <div className="font-semibold text-[16px] mb-2 text-[#5002D0]">
          {title}
        </div>
        <p className="text-[#89878B] text-[12px] font-[400]">{description}</p>
      </div>
      <div className="flex justify-between items-center pb-5">
        <div className="px-6">
          <span className="inline-block text-[12px] font-semibold text-[#000000] mr-2 mb-2">
            {duration}
          </span>
          <span className="inline-block  text-[12px] font-semibold text-[#000000]  mr-2 mb-2">
            {topics} topics
          </span>
        </div>
        <div>
          <Link to={to}>
            <button className="text-[#400167] font-[500] text-[14px] py-2 px-4 rounded">
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
