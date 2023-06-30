import React from "react";
import { Link } from "react-router-dom";
import loginImg from ".././assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const handleClick = () => {
    toast.info("Berhasil Login!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="flex justify-end mt-32 mr-40">
      <div className="mx-auto my-auto flex">
        <img className="w-36 h-36 object-cover" src={loginImg} alt="" />
      </div>

      <form className="max-w-[400px] w-full rounded-lg  p-8 px-8 ">
        <h2 className="text-4xl text-black font-bold text-center">
          Admin MUPAT
        </h2>
        <div className="flex flex-col text-black py-8">
          <label className="font-bold">Username</label>
          <input
            className="rounded-lg transition duration-300 bg-white border-2 border-gray-300 mt-2 p-2 focus:border-red-500 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Nama Pengguna/Email"
          />
        </div>
        <div className="flex flex-col text-black ">
          <label className="font-bold">Password</label>
          <input
            className="p-2 rounded-lg  transition duration-300 bg-white border-2 border-gray-300 mt-2 focus:border-red-500 focus:bg-white focus:outline-none"
            type="password"
            placeholder="Kata Sandi"
          />
        </div>
        <Link to="/home">
          <button
            onClick={handleClick}
            type="submit"
            className="w-full my-5 py-2 bg-red-600  hover:bg-red-700 text-white font-semibold rounded-lg"
          >
            Masuk
            <span>
              <ToastContainer />
            </span>
          </button>
        </Link>
      </form>
    </div>
  );
}
