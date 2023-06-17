import React from "react";
import GuruJurusan from "../../swiper/GuruJurusan.js";
import LabPraktikum from "../../swiper/LabPraktikum.js";
import Footer from "../../layouts/footer.js";
import Navigation from "../../layouts/Navbar.js";
import Reason from "../../swiper/Reason.js";
import SimpleJumbotron from "../../simpleJumbotron.js";

const TKRO = () => {
  return (
    <div className="rpl">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="TKRO"
        jumbotronImg="./Image/jurusan/jumbotron/jumbotronRpl.png"
        bgColor="#20388C"
        jumbotronDesc="Jurusan TKRO merupakan kependekan dari Teknik Kendaraan Ringan Otomotif. Tujuan utama dari jurusan TKRO adalah memberikan pengetahuan dan keterampilan kepada siswa dalam merawat, memperbaiki, dan mengoperasikan kendaraan bermotor, terutama kendaraan ringan seperti mobil dan sepeda motor. Siswa yang memilih jurusan TKRO akan mempelajari berbagai aspek teknis yang terkait dengan kendaraan bermotor, mulai dari sistem mesin, sistem kelistrikan, sistem suspensi, sistem rem, hingga sistem transmisi."
      />

      <Reason
        jurusan="TKRO"
        reason="siswa TKRO juga akan dilatih dalam keterampilan praktis, seperti menggunakan alat dan peralatan otomotif, membaca diagram elektrik, melakukan diagnosis masalah kendaraan, serta merancang dan memasang sistem tambahan pada kendaraan. Dengan lulus dari jurusan TKRO, siswa diharapkan memiliki pengetahuan dan keterampilan yang cukup untuk bekerja di bidang otomotif, seperti menjadi mekanik mobil, teknisi servis, atau bahkan memiliki kemampuan untuk membuka usaha sendiri di bidang perbaikan kendaraan."
      />
      <LabPraktikum labImg="./Image/jurusan/galery/rpl/lab-software2.JPG" />
      <GuruJurusan />
      <Footer />
    </div>
  );
};

export default TKRO;
