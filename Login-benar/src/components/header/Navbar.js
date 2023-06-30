// import {
//   BellIcon,
//   HashtagIcon,
//   MailOpenIcon,
//   MenuIcon,
// } from "@heroicons/react/outline";
// import ProfileDropDown from "../dropdown/ProfileDropDown";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function DashboardHeader({ isShowing, showSideBar }) {
//   const handleClick = () => {
//     toast.info("Ini adalah notifikasi!", {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   };
//   return (
//     <>
//       <div className="px-7 py-5 dark:bg-gray-900 dark:text-white">
//         <div className="flex justify-between items-center align-middle">
//           <div className="flex justify-start items-center space-x-4">
//             {isShowing ? (
//               <MenuIcon
//                 className="block h-6 w-6 dark:text-white"
//                 aria-hidden="true"
//                 onClick={showSideBar}
//               />
//             ) : (
//               <HashtagIcon
//                 className="block h-6 w-6 dark:text-white"
//                 aria-hidden="true"
//                 onClick={showSideBar}
//               />
//             )}

//             <h1 className=" text-[0px] font-semibold sm:text-3xl">
//               MUPAT ADMIN
//             </h1>
//           </div>

//   <div className="flex justify-end space-x-4 items-center">
//     <button className="relative focus:text-black focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-black p-1 rounded-full">
//       <span className="sr-only">View Notification</span>
//       <BellIcon
//         onClick={handleClick}
//         className="h-6 w-6"
//         aria-hidden="true"
//       />
//       <ToastContainer />
//       <span className="w-2 h-2 bg-red-500 absolute right-0 top-0 animate-ping rounded-full"></span>
//     </button>

//     <ProfileDropDown />
//   </div>
// </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import { BellIcon } from "@heroicons/react/outline";
import ProfileDropDown from "../dropdown/ProfileDropDown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imglogo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-white text-black shadow-xl">
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
              <BellIcon className="h-6 w-6" aria-hidden="true" />
              <ToastContainer />
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
