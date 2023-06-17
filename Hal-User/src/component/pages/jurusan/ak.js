import React from "react";
import GuruJurusan from "../../swiper/GuruJurusan.js";
import LabPraktikum from "../../swiper/LabPraktikum.js";
import Footer from "../../layouts/footer.js";
import Navigation from "../../layouts/Navbar.js";
import Reason from "../../swiper/Reason.js";
import SimpleJumbotron from "../../simpleJumbotron.js";

const Ak = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="ak">
        <SimpleJumbotron
          jumbotronTitle="Akutansi"
          jumbotronImg="./Image/jurusan/jumbotron/jumbotronAk.png"
          bgColor="#05770AB2"
          jumbotronDesc="Akuntansi adalah sebuah jurusan yang mempelajari tentang proses perekaman, pelaporan dan pengendalian keuangan suatu organisasi. Lulusan jurusan Akuntansi dapat bekerja sebagai akuntan, auditor, konsultan keuangan, atau profesional keuangan lainnya. Mereka memahami prinsip-prinsip akuntansi, standar akuntansi, perpajakan, dan perencanaan keuangan. Tujuan dari jurusan ini adalah untuk menghasilkan profesional yang memahami cara menilai dan mengelola keuangan suatu organisasi, serta membuat laporan yang dapat dipercaya dan berguna bagi pihak internal maupun eksternal."
        />

        <Reason
          jurusan="Akutansi"
          reason="jurusan Akuntansi dapat menjadi pilihan yang baik   bagi seseorang yang tertarik dengan bisnis dan keuangan, dan memiliki kemampuan analitis yang baik. Namun, seperti jurusan lainnya, penting untuk memastikan bahwa jurusan ini cocok dengan minat dan kemampuan seseorang sebelum memutuskan untuk memasukinya."
        />
        <LabPraktikum labImg="./Image/jurusan/galery/akutansi/akutansi2.JPG" />
        <GuruJurusan />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Ak;
