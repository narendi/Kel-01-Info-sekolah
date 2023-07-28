import React, { useState } from "react";

const Profil = () => {
  return (
    <div className="flex pl-10 pt-5">
      <div>
        <h1 className=" text-2xl ">Edit Profil</h1>

        <div className="flex flex-col py-6">
          <label className="text-base">Nama</label>
          <input
            className="rounded-lg w-80  bg-white border-2 border-gray-300 mt-2 p-2
           focus:border-red-500 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Masukan Nama"
          />
        </div>
        <div className="flex flex-col py-6">
          <label className="text-base">Nama Pengguna</label>
          <input
            className="rounded-lg w-80  bg-white border-2 border-gray-300 mt-2 p-2
           focus:border-red-500 focus:bg-white focus:outline-none"
            type="text"
            placeholder="Masukan Nama"
          />
        </div>
        <div className="flex flex-col py-6">
          <label className="text-base">Alamat E-mail</label>
          <input
            className="rounded-lg w-80  bg-white border-2 border-gray-300 mt-2 p-2
           focus:border-red-500 focus:bg-white focus:outline-none"
            type="email"
            placeholder="Masukan E-mail"
          />
        </div>
      </div>
      <div className="py-8 px-6">
        <div className="flex flex-col py-10">
          <label className="text-base">Upload Foto</label>
          <input type="file" accept="image/*" className="cursor-pointer w-72" />
        </div>

        <button
          className="rounded-md bg-red-600 border border-gray-400
       hover:border-white hover:bg-red-500 text-white w-80 h-8"
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default Profil;
