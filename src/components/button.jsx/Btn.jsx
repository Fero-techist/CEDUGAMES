import React from "react";

export function Btn({ children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-[#8149BE] text-sm w-40 text-white px-4 py-3 rounded-[10px]"
      >
        {children}
      </button>
    </>
  );
}

export function purpleBtn({ children, onClick }) {
  return (
    <>
      <button className=" bg-[#400167] text-white rounded-[8px]">
        onClick={onClick}
        {children}
      </button>
    </>
  );
}

export function RedBtn({ children, onClick }) {
  return (
    <>
      <button
        className="bg-[#E3403333] w-40 text-[#E34033] px-4 py-3 rounded-md"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export function RoundedRedBtn({ children, onClick }) {
  return (
    <>
      <button
        className="bg-[#E3403333] rounded-[8px] w-40 text-[#E34033] px-4 py-3"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export function RoundedBtn({ children, onClick }) {
  return (
    <>
      <button
        className="rounded-full text-white py-[16px] bg-[#5002D0] w-[480px] h-[60px] mt-10 text-[16px] font-[]"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export function FullBTN({ children, onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className=" mx-auto justify-center flex items-center"
      >
        <button className=" bg-[#995BE2]  w-[304px]  text-white px-6 py-2 ">
          {children}
        </button>
      </div>
    </>
  );
}
