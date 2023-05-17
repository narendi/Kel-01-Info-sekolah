import React from "react";
import Guru from "../Card Guru";
import SwiperGuru from "./SwiperGuru";

const GuruJurusan = () => {
  return (
    <div>
      <h2
        className="text-center fw-bold py-3"
        style={{
          borderBottom: "1px solid #2E2B2B",
          width: "200px",
          margin: "130px auto 50px auto",
        }}
      >
        Guru Kita
      </h2>

      {window.innerWidth > 430 ? (
        <div className="container d-flex justify-content-center">
          <Guru />
          <Guru />
          <Guru />
        </div>
      ) : (
        <SwiperGuru />
      )}
    </div>
  );
};

export default GuruJurusan;
