import React, { useState } from "react";
import SideLink from "../components/SideLink";
import twitter from "../images/twitter.svg";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../icons/Icons";
import UserBox from "../components/UserBox";

const sideLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notifications",
    icon: NotificationsIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Bookmarks",
    icon: BookmarksIcon,
  },
  {
    name: "Lists",
    icon: ListsIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];
const Sidebar = () => {
  const [active, setActive] = useState("Home");
  const handleMenuItemClick = (name) => {
    setActive(name);
  };
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between px-2 w-72">
      <div>
        <div className="mt-1 mb-4 ml-1 flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-lighest">
          {" "}
          <img src={twitter} alt="Twitter Logo" className="w-9 h-9" />
        </div>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark transfrom transition-colors duration-700 text-white rounded-full py-3 px-8 w-11/12 shadow-lg ">
          Tweet
        </button>
      </div>
      <UserBox />
    </div>
  );
};

export default Sidebar;
