import React from "react";
import { SearchIcon } from "../icons/Icons";
import { Timeline } from "react-twitter-widgets";
const Widgets = () => {
  return (
    <aside className="w-72">
      <div className="flex items-center space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
        <SearchIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"
        />
      </div>
      <div className="mt-5">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "elonmusk",
          }}
          options={{
            height: "1000",
          }}
        />
      </div>
    </aside>
  );
};

export default Widgets;
