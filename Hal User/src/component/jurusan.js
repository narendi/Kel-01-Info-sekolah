import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Jurusan = () => {
  return (
    <Container className="jurusan">
      <h3
        style={{
          marginTop: "200px",
          textAlign: "center",
          marginBottom: "75px",
          fontWeight: "bold",
        }}
      >
        Jurusan apa saja yang tersedia ?
      </h3>
      <div className="d-lg-flex justify-content-lg-between">
        <div className="card text-center p-lg-5">
          <img src="./images/jurusan/akutansi.png" alt="" />
          <h5 className="mt-3 fw-bold">Akutansi</h5>
          <p className="my-4">
            Jurusan Akuntansi merupakan bidang studi yang mempelajari tentang
            metode pencatatan serta penyusunan laporan keuangan .
          </p>
          <Link to={"/akutansi"}>
            <button className="btn m-auto">More</button>
          </Link>
        </div>
        <div className="card text-center p-lg-5">
          <img src="./images/jurusan/rpl.png" alt="" />
          <h5 className="mt-3 fw-bold">Rekayasa Perangkat lunak</h5>
          <p className="my-4">
            Rekayasa Perangkat Lunak adalah salah satu jurusan yang berfokus
            pada produksi dan pengembangan perangkat lunak .
          </p>
          <Link to={"/rpl"}>
            <button className="btn m-auto">More</button>
          </Link>
        </div>
        <div className="card text-center p-lg-5">
          <img src="./images/jurusan/hotel.png" alt="" />
          <h5 className="mt-3 fw-bold">Perhotelan</h5>
          <p className="my-4">
            Jurusan Perhotelan adalah jurusan yang mempelajari pengelolaan hotel
            serta cara menyeimbangkan aspek wisata dan manajemen bisnis untuk
            mencapai kesuksesan .
          </p>
          <Link to={"/hotel"}>
            <button className="btn m-auto">More</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Jurusan;
