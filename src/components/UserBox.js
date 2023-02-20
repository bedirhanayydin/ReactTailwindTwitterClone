import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transfrom transition-color duration-200">
      <img
        src="https://pbs.twimg.com/profile_images/1269787539025600514/s5oE587o_400x400.jpg"
        alt="Profile"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-md text-black">Bedirhan Aydin</span>
        <span className="text-gray-dark text-sm">@bedirhhanaydin</span>
      </div>
      <div className="flex space-x-1 ">
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
        <div className="w-1 h-1 bg-gray-700 rounded-full" />
      </div>
    </div>
  );
};

export default UserBox;
