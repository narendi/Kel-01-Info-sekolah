import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fasilitas from "../Fasilitas";
import Navigation from "../layouts/Navbar";
import Footer from "../layouts/footer";
import SimpleJumbotron from "../simpleJumbotron";
import Guru from "../Card Guru";
function Profile() {
  return (
    <div className="profile">
      <Navigation />
      <SimpleJumbotron
        bgColor="#0000FF"
        jumbotronTitle="Profile Sekolah"
        jumbotronImg="./Image/bg/profileMobile.png"
        jumbotronDesc="Kenalan dengan beberapa Guru dan beberapa Fasilitas yang tersedia di SMK Muhammdiyah 4 Sukorejo Yuk!"
      />
      <Container>
        <h2 className="fw-bold text-center" style={{ marginTop: "100px" }}>
          Fasilitas Sekolah
        </h2>
        <Fasilitas
          fasilitasName="Perpustakaan"
          fasilitasImg="./Image/fasilitas/perpustakaan.png"
          posisiImg={1}
          posisiDesc={2}
          desc="Perpustakaan adalah sebuah tempat yang menyediakan akses ke koleksi bahan-bahan bacaan, informasi, dan sumber belajar, seperti buku, jurnal, koran, video, dan sumber daring. Tujuannya adalah untuk mendukung proses belajar-mengajar dan menstimulasi minat baca, serta meningkatkan keterampilan mencari, mengumpulkan, dan menggunakan informasi."
        />
        <Fasilitas
          fasilitasName="Lab Komputer"
          fasilitasImg="./Image/fasilitas/labKomputer.png"
          posisiImg={2}
          posisiDesc={1}
          desc="Lab komputer di sekolah adalah sebuah ruangan yang didedikasikan untuk pembelajaran dan penggunaan komputer. Ruangan ini biasanya dilengkapi dengan komputer, software, dan perangkat lunak yang dibutuhkan untuk memfasilitasi kegiatan belajar-mengajar dan meningkatkan keterampilan teknologi. Tujuannya adalah untuk memberikan akses ke sumber teknologi bagi siswa dan guru, membantu mereka belajar bagaimana menggunakan teknologi secara efektif, dan meningkatkan keterampilan teknologi untuk mempersiapkan mereka untuk masa depan."
        />
        <Fasilitas
          fasilitasName="Kantin"
          fasilitasImg="./Image/fasilitas/kantin.png"
          posisiImg={1}
          posisiDesc={2}
          desc="Kantin di sekolah adalah sebuah area atau ruangan yang menyediakan makanan dan minuman bagi siswa dan staf sekolah. Tujuannya adalah untuk memberikan pilihan makan bagi siswa selama jam istirahat dan memberikan kesempatan untuk mereka beristirahat dan meregenerasi energi sebelum melanjutkan kegiatan belajar-mengajar. Kantin biasanya menyediakan berbagai jenis makanan, mulai dari makanan ringan sampai makanan utama, dan minuman."
        />
        <Fasilitas
          fasilitasName="Mushola"
          fasilitasImg="./Image/fasilitas/mushola.png"
          posisiImg={2}
          posisiDesc={1}
          desc="Mushola adalah sebuah ruangan atau area yang disediakan di sekolah untuk memfasilitasi kegiatan ibadah bagi siswa dan staf yang beragama Islam. Tujuannya adalah untuk memberikan ruang bagi mereka untuk beribadah dan melakukan aktivitas keagamaan secara khusus. Mushola biasanya dilengkapi dengan seperangkat peralatan ibadah, seperti sajadah, mushaf, dan air wudhu. Fasilitas ini sangat penting bagi siswa dan staf yang beragama Islam untuk menjalankan aktivitas keagamaan secara benar dan khusus."
        />
        <Fasilitas
          fasilitasName="Lapangan Olahraga"
          fasilitasImg="./Image/fasilitas/lapang.png"
          posisiImg={1}
          posisiDesc={2}
          desc="Lapangan olah raga di sekolah adalah sebuah area atau ruangan yang disediakan untuk aktivitas olahraga dan fisik. Tujuannya adalah untuk memfasilitasi kegiatan olahraga bagi siswa dan staf sekolah dan meningkatkan kesehatan dan keterampilan fisik mereka. Lapangan olah raga biasanya dilengkapi dengan peralatan olahraga, seperti lapangan bola, lapangan basket, lapangan voli, dan lainnya. Fasilitas ini sangat penting bagi siswa dan staf untuk mempertahankan kesehatan dan membangun keterampilan fisik yang baik."
        />
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
