import React from "react";
import LabPraktikum from "../../swiper/LabPraktikum.js";
import Footer from "../../layouts/footer.js";
import Navigation from "../../layouts/Navbar.js";
import Reason from "../../swiper/Reason.js";
import SimpleJumbotron from "../../simpleJumbotron.js";
import Guru from "../../Guru.js";

const TBSM = () => {
  return (
    <div className="rpl">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="TBSM"
        jumbotronImg="./Image/jurusan/jumbotron/jumbotronRpl.png"
        bgColor="#20388C"
        jumbotronDesc="Jurusan TBSM adalah singkatan dari Teknik Bisnis Sepeda Motor. Jurusan ini merupakan salah satu jurusan yang terkait dengan industri otomotif, khususnya dalam pengembangan, perawatan, dan manajemen bisnis sepeda motor. Materi yang diajarkan dalam jurusan TBSM mencakup berbagai aspek teknis dan bisnis terkait sepeda motor. "
      />

      <Reason
        jurusan="TBSM"
        reason="Dengan kombinasi pengetahuan teknis dan bisnis yang diperoleh, lulusan jurusan TBSM dapat mengejar karir sebagai teknisi sepeda motor, insinyur desain, manajer servis, manajer bengkel, atau bahkan dapat menjadi wirausahawan dalam industri sepeda motor."
      />
      <LabPraktikum labImg="./Image/jurusan/galery/rpl/lab-software2.JPG" />
      <Guru jurusan="TBSM" />
      <Footer />
    </div>
  );
};

export default TBSM;
