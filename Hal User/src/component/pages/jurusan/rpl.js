import React from "react";
import GuruJurusan from "../../swiper/GuruJurusan.js";
import LabPraktikum from "../../swiper/LabPraktikum.js";
import Footer from "../../layouts/footer.js";
import Navigation from "../../layouts/Navbar.js";
import Purpose from "../../swiper/Purpose.js";
import Reason from "../../swiper/Reason.js";
import SimpleJumbotron from "../../simpleJumbotron.js";

const Rpl = () => {
  return (
    <div className="rpl">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="Rekayasa Perangkat Lunak"
        jumbotronImg="./Image/jurusan/jumbotron/jumbotronRpl.png"
        bgColor="#20388C"
        jumbotronDesc="Rekayasa Perangkat Lunak adalah sebuah jurusan di bidang ilmu komputer yang mempelajari tentang pengembangan dan pembuatan sistem atau aplikasi software. Jurusan ini mencakup berbagai aspek seperti analisis kebutuhan, desain, implementasi, testing dan pemeliharaan software. Lulusan dari jurusan Rekayasa Perangkat Lunak memiliki keahlian dalam pemrograman, pemodelan sistem, dan metodologi pengembangan software."
      />
      {window.innerWidth > 430 && (
        <Purpose bg="bg-rpl" secondBg="second-bg-rpl" />
      )}
      
      <Reason
        jurusan="RPL"
        reason="Kemampuan teknis yang berguna: Lulusan RPL memiliki kemampuan tekanis yang berguna, seperti pemrograman, analisis sistem, dan pemecahan masalah yang dapat diterapkan dalam berbagai bidang. Dengan demikian, jurusan RPL dapat menjadi pilihan yang baik bagi seseorang yang tertarik dengan teknologi dan ingin membangun karier dalam bidang ini. Namun, seperti jurusan lainnya, penting untuk memastikan bahwa jurusan ini cocok dengan minat dan kemampuan seseorang sebelum memutuskan untuk memasukinya."
      />
      <LabPraktikum labImg="./Image/jurusan/galery/rpl/lab-software2.JPG" />
      <GuruJurusan />
      <Footer />
    </div>
  );
};

export default Rpl;
