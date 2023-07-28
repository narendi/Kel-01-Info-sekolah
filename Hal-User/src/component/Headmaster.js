import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Headmaster() {
  const [datakepsek, setDataKepSek] = useState([]);

  useEffect(() => {
    fetchDataKepSek();
  }, []);

  const fetchDataKepSek = async () => {
    try {
      const response = await fetch("http://localhost:3100/kepsek/all");
      const data = await response.json();
      setDataKepSek(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      {datakepsek.map((item) => (
        <div className="flex mt-14 pr-20 ">
          <img
            src={`http://localhost:3100/images/kepsek/${item.image}`}
            className="w-48 h-96"
          />
          <div className="px-6 pb-[18px]">
            <h1 className="font-bold text-2xl  ml-6">Kepala Sekolah</h1>
            <h2 className="font-semibold text-gray-700 text-2xl mb-4 ml-6">
              {item.name}
            </h2>
            <p className="ml-6">{item.description}</p>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Headmaster;
