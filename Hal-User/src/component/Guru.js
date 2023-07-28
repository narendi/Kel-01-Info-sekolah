import React, { useEffect, useState } from "react";

const Guru = ({ jurusan }) => {
  const [dataguru, setDataGuru] = useState([]);

  useEffect(() => {
    fetchDataGuru();
  }, [jurusan]);

  const fetchDataGuru = async () => {
    try {
      const response = await fetch(`http://localhost:3100/guru/${jurusan}`);
      const data = await response.json();
      setDataGuru(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {dataguru.map((guru, index) => (
        <div
          className="w-72 h-40 mx-2 my-4 flex flex-col items-center"
          key={index}
        >
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
  );
};

export default Guru;
