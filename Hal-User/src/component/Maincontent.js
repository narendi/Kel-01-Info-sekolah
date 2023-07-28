import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./Hero";
import Cardjurusan from "./Card Jurusan";
import Headmaster from "./Headmaster";
import { Link } from "react-router-dom";

const Maincontent = () => {
  const [newdata, setNewData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3100/extra/all?latest=true")
      .then((response) => {
        setNewData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Hero />
      <Headmaster />

      {/* JURUSAN */}
      <div className="row">
        <div className="col-12 text-center my-5">
          <h1>Jurusan Sekolah</h1>
        </div>
      </div>
      <Cardjurusan />

      {/* KEGIATAN */}
      <div className="row">
        <div className="col-12 text-center my-5">
          <h1 className="font-bold">Kegiatan Sekolah</h1>
        </div>
      </div>

      <div className="flex justify-left mt-8 mr">
        {newdata ? (
          newdata.map((extra) => (
            <div key={extra.id} className="pl-28">
              <div className="rounded-lg overflow-hidden shadow-lg border-2 w-[290px]">
                <img
                  className="w-full h-32"
                  src={`http://localhost:3100/images/extra/${extra.image}`}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada data extrakulikuler terbaru.</p>
        )}
      </div>
      <Link to="gallery">
        <p className="text-center font-bold mt-8">Lainya</p>
      </Link>
    </div>
  );
};

export default Maincontent;
