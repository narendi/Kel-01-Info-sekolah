import React, { useEffect, useState } from "react";
import kegiatan1 from "./asset/TKRO.jpg";
import Navigation from "./layouts/Navbar";
import jurusan1 from "./asset/rpl.jpg";
import Footer from "./layouts/footer";
import Headmaster from "./Headmaster";

const Gallery = () => {
  const [dataextra, setDataExtra] = useState([]);
  const [dataguru, setDataGuru] = useState([]);

  useEffect(() => {
    fetchDataExtra();
    fetchDataGuru();
  }, []);

  const fetchDataExtra = async () => {
    try {
      const response = await fetch("http://localhost:3100/extra/all");
      const data = await response.json();
      setDataExtra(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchDataGuru = async () => {
    try {
      const response = await fetch("http://localhost:3100/guru/all");
      const data = await response.json();
      setDataGuru(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navigation />
      <div className="text-2xl font-bold text-center">Kepala Sekolah</div>
      <Headmaster />
      <div className="text-2xl font-bold text-center mt-8">
        Guru-guru lainya
      </div>
      <div className="flex flex-wrap justify-center">
        {dataguru.map((guru, index) => (
          <div className="w-72 h-40 mx-2 my-4 flex flex-col items-center">
            <div className="w-52 rounded overflow-hidden shadow-lg border-2">
              <img
                className="w-full h-32"
                src={`http://localhost:3100/images/guru/${guru.image}`}
                alt={guru.name}
              />
            </div>
            <p>{guru.name}</p>
          </div>
        ))}
      </div>

      {/* Kegiatan */}
      <div className="text-2xl font-bold text-center mt-16 mb-14">Kegiatan</div>
      <div className="flex flex-wrap justify-left ml-16">
        {dataextra.map((extra, index) => (
          <div className=" mx-16 my-4 flex flex-col items-center">
            <div className="w-72 h-40 rounded overflow-hidden shadow-lg border-2">
              <img
                className="w-full h-32"
                src={`http://localhost:3100/images/extra/${extra.image}`}
              />
              <p>{extra.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
