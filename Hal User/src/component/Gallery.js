import React from "react";
import kegiatan5 from "./asset/TKRO.jpg";

const Gallery = () => {
  return (
    <div className="mb-4 justify-center">
      <img src={kegiatan5} className="w-full h-36 mb-8" />
      <img src={kegiatan5} className="w-11/12 h-36 mb-8" />
      <img src={kegiatan5} className="w-11/12 h-36 mb-8" />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
        Selebihnya
      </button>
    </div>
  );
};

export default Gallery;
