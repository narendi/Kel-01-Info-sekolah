import React from "react";

const LabPraktikum = (props) => {
  return (
    <div
      className="container lab-praktikum d-lg-flex justify-content-lg-between mx-auto mt-5"
      style={{ width: "900px" }}
    >
      {window.innerWidth > 430 && (
        <div>
          <img src={props.labImg} alt="" style={{ width: "400px" }} />
        </div>
      )}
      <div className="p-lg-5">
        <h2 className="fw-bold">Lab Praktikum</h2>
        <p className=" fw-semibold">
          Terdapat beberapa Lab Computer Untuk Peraktek para Siswa dan Siswi SMK
          Muhammadiyah 04 Sukorejo.
        </p>
      </div>
      {window.innerWidth < 430 && (
        <div>
          <img src={props.labImg} alt="" style={{ width: "400px" }} />
        </div>
      )}
    </div>
  );
};

export default LabPraktikum;
