import React from "react";
import LabPraktikum from "../../swiper/LabPraktikum.js";
import Footer from "../../layouts/footer.js";
import Navigation from "../../layouts/Navbar.js";
import Reason from "../../swiper/Reason.js";
import SimpleJumbotron from "../../simpleJumbotron.js";
import Guru from "../../Guru.js";

const Elind = () => {
  return (
    <div className="bank">
      <Navigation />
      <SimpleJumbotron
        jumbotronTitle="Elind"
        jumbotronImg="./Image/jurusan/jumbotron/jumbotronHtl.png"
        bgColor="#7B500FB2"
        jumbotronDesc="Jurusan ELIND adalah singkatan dari Elektronika Industri atau Electrical Engineering. Jurusan ini merupakan salah satu jurusan di bidang teknik yang berfokus pada penerapan prinsip dan teknologi elektronika dalam industri. Dalam jurusan ELIND, kamu akan mempelajari berbagai aspek teknis terkait dengan desain, pengembangan, produksi, dan penggunaan peralatan elektronik dalam berbagai industri."
      />

      <Reason
        jurusan="Elind"
        reason="Jurusan ELIND memberikan landasan pengetahuan yang luas dalam bidang elektronika dan teknik industri, sehingga lulusannya memiliki keterampilan yang dibutuhkan untuk bekerja di berbagai sektor industri, seperti manufaktur, otomasi, telekomunikasi, energi, transportasi, dan lain-lain. Mereka dapat berperan dalam perancangan, perawatan, perbaikan, pengembangan sistem, manajemen proyek, atau penelitian di bidang elektronika industri."
      />
      <LabPraktikum labImg="./Image/jurusan/galery/rpl/lab-software2.JPG" />
      <Guru jurusan="Elind" />
      <Footer />
    </div>
  );
};

export default Elind;
