import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardLayout({ children }) {
  let [isShowing] = useState(true);

  return (
    <>
      <div className="">
        {/* header  */}
        <Navbar />
        <div>
          {/* dashboard body  */}
          <div className="flex">
            {/* side bar  */}
            <div
              className={classNames(
                isShowing ? "w-0 duration-300 lg:w-1/4" : "w-20",
                "h-screen duration-300 text-white overflow-auto dark:bg-gray-800 bg-white"
              )}
            >
              {/* side bar when isShowing true for pc version  */}
              <Sidebar isShowing={isShowing} classNames={classNames} />
            </div>
            {/* dashboard content  */}
            <div
              className={classNames(
                isShowing ? "w-screen" : "duration-300 w-screen",
                "h-screen overflow-auto"
              )}
            >
              {/* breadcrumbs  */}
              {/* dashboard main content  */}
              <div>
                {children}
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
