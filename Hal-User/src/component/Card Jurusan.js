import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cardjurusan() {
  const [jurusanData, setJurusanData] = useState([]);

  useEffect(() => {
    fetchJurusanData();
  }, []);

  const fetchJurusanData = async () => {
    try {
      const response = await fetch("http://localhost:3100/jurusan/all");
      const data = await response.json();
      setJurusanData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mt-2 ml-28">
      {jurusanData.map((jurusan) => (
        <div className="pr-2 mt-9" key={jurusan.id}>
          <div className="w-2/3 rounded overflow-hidden shadow-lg">
            <img
              className="w-[400px] h-48"
              src={`http://localhost:3100/images/jurusan/${jurusan.image}`}
              alt={jurusan.name}
            />
            <div className="px-2 py-8">
              <div className="font-bold text-xl">{jurusan.name}</div>
              <p className="text-gray-700 text-base">{jurusan.description}</p>
              <Link to={`/${jurusan.name}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                  Selengkapnya
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardjurusan;
