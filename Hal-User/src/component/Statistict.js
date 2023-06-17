import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import Murid from "./asset/murid.png";
import Guru from "./asset/guru.png";
import Buku from "./asset/buku.png";

function Statistict() {
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex flex-col justify-center  rounded border-4 border-black w-10/12 bg-green-500">
          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <img src={Murid} className="w-16 h-16 mb-2" />
              <p className="text-lg font-bold">Jumlah Murid</p>
              <p className="text-xl ">800+</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Guru} className="w-16 h-16 mb-2" />
              <p className="text-lg font-bold">Jumlah Guru</p>
              <p className="text-xl ">20+</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Buku} className="w-16 h-16 mb-2" />
              <p className="text-lg font-bold">Mata Pelajaran</p>
              <p className="text-xl ">10</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistict;
