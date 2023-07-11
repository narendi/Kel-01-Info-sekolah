// import { BiMapPin } from "react-icons/bi";
import { FiSettings, FiSlack, FiTrash2, FiUser, FiVideo } from "react-icons/fi";
import SideBarItem from "../items/SideBarItem";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { AiOutlineProfile } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";

export default function Sidebar({ isShowing, classNames }) {
  return (
    <>
      <div
        className={classNames(
          isShowing
            ? "flex-col justify-start space-y-4 hidden lg:flex"
            : "hidden",
          "dark:text-white text-black"
        )}
      >
        <div>
          <div className="flex flex-col justify-start">
            <h1 className="mt-4 text-sm font-semibold  px-4 py-1 uppercase">
              dashboard
            </h1>
            <SideBarItem name="Dashboard" urlPath="/home">
              <RiDashboardLine className="w-5 h-5" />
            </SideBarItem>
            <SideBarItem name="Users" urlPath="users">
              <FiUser className="w-5 h-5" />
            </SideBarItem>
          </div>

          <div className="flex flex-col justify-start">
            <h1 className="mt-4 text-sm font-semibold  px-4 py-1 uppercase">
              Components
            </h1>
            <SideBarItem name="Jurusan" urlPath="jurusan">
              <FiTrash2 className="w-5 h-5" />
            </SideBarItem>
            <SideBarItem name="Guru" urlPath="/*">
              <FaChalkboardTeacher className="w-5 h-5" />
            </SideBarItem>
            <SideBarItem name="Kepala sekolah" urlPath="kpl">
              <FiSettings className="w-5 h-5" />
            </SideBarItem>
            <SideBarItem name="Profile" urlPath="#">
              <AiOutlineProfile className="w-5 h-5" />
            </SideBarItem>
            <SideBarItem name="Guru" urlPath="guru">
              <GrGallery className="w-5 h-5" />
            </SideBarItem>
            <SideBarItem name="Extrakulikuler" urlPath="extra">
              <GrGallery className="w-5 h-5" />
            </SideBarItem>
          </div>
        </div>
      </div>
    </>
  );
}
