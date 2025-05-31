import React from "react";
import CustomizedInputBase from "./CustomizedInputBase";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center h-10 gap-10 m-4">
        <a href="" className="text-black font-bold text-3xl">Preder</a>
        <CustomizedInputBase />
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-full text-md font-semibold">
          Login/SignIn
        </button>
      </div>
      <hr className="bg-gray-50 text-gray-300" />
    </div>
  );
}
