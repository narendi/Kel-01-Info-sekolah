import React from "react";
import kegiatan1 from "./asset/TKRO.jpg";
import Navigation from "./layouts/Navbar";
import jurusan1 from "./asset/rpl.jpg";
import Footer from "./layouts/footer";
import Headmaster from "./Headmaster";
const Gallery = () => {
  return (
    <>
      <Navigation />
      <div className="text-2xl font-bold text-center">Kepala Sekolah</div>
      <Headmaster />
      <div className="text-2xl font-bold text-center mt-8">
        Guru-guru lainya
      </div>
      <div className="flex ml-16">
        <div className="pl-16 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-20 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-20 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-20 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>
      </div>

      <div className="flex ml-16">
        <div className="pl-16 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-20 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-20 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-20 mt-14">
          <div className="w-52 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={jurusan1} alt="rpl" />
          </div>
        </div>
      </div>

      {/* Kegiatan */}
      <div className="text-2xl font-bold text-center mt-16 mb-14">Kegiatan</div>
      <div className="flex ml-16 mt-8">
        <div className="pl-16">
          <div className="w-9/12 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>

        <div className="pr-1">
          <div className="w-9/12 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-4 pr-4">
          <div className="w-9/12 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>
      </div>

      <div className=" flex ml-16 mt-8">
        <div className="pl-16">
          <div className="w-9/12 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>

        <div className="pr-1">
          <div className="w-9/12 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>

        <div className="pl-4 pr-4">
          <div className="w-9/12 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
