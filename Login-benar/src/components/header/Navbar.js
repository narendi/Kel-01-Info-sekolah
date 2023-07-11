import React from "react";
import ProfileDropDown from "../dropdown/ProfileDropDown";
import Notif from "../dropdown/Notif";
import "react-toastify/dist/ReactToastify.css";
import imglogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white text-black shadow-md">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={imglogo} className="w-10 h-10 mr-5" />
            <a href="/" className="text-xl font-bold">
              Mupat Admin
            </a>
          </div>

          {/* Menu */}
          <div className="flex justify-end space-x-4 items-center">
            <button className="relative focus:text-black focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-black p-1 rounded-full">
              <span className="sr-only">View Notification</span>
              <Notif />
              <span className="w-2 h-2 bg-red-500 absolute right-0 top-0 animate-ping rounded-full"></span>
            </button>

            <ProfileDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
