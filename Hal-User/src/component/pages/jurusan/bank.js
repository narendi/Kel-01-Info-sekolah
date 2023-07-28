import React from "react";
import LabPraktikum from "../../swiper/LabPraktikum.js";
import Footer from "../../layouts/footer.js";
import Navigation from "../../layouts/Navbar.js";
import Reason from "../../swiper/Reason.js";
import SimpleJumbotron from "../../simpleJumbotron.js";
import Guru from "../../Guru.js";

const Bank = () => {
  return (
    <div className="bank">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="Perbankan"
        jumbotronImg="./Image/jurusan/jumbotron/jumbotronHtl.png"
        bgColor="#7B500FB2"
        jumbotronDesc="Jurusan Perbankan adalah sebuah program studi yang mempelajari tentang bisnis dan manajemen dalam industri pariwisata dan perhotelan. Lulusan jurusan ini akan memahami bagaimana mengelola sebuah hotel, restoran, atau bisnis pariwisata lainnya. Mereka akan belajar tentang front office, housekeeping, food and beverage service, catering, sales and marketing, dan banyak hal lain yang berkaitan dengan industri perhotelan. Jurusan Perhotelan juga memfokuskan pada pengembangan soft skills seperti keterampilan komunikasi, leadership, dan customer service, yang sangat penting bagi kesuksesan karier dalam industri ini."
      />
      <Reason
        jurusan="Perbankan"
        reason=" jurusan Perbankan dapat menjadi pilihan yang baik bagi seseorang yang tertarik dengan pelayanan pelanggan dan memiliki kemampuan interpersonal yang baik. Namun, seperti jurusan lainnya, penting untuk memastikan bahwa jurusan ini cocok dengan minat dan kemampuan seseorang sebelum memutuskan untuk memasukinya."
      />
      <LabPraktikum labImg="./Image/jurusan/galery/rpl/lab-software2.JPG" />
      <div className="text-center text-xl">
        <div className="font-bold">Guru Kita</div>
      </div>
      <Guru jurusan="bank" />
      <Footer />
    </div>
  );
};

export default Bank;
