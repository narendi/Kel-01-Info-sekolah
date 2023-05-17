import Hero from "./Hero";
import Cardjurusan from "./Card Jurusan";
import Cardkegiatan from "./Cardkegiatan";
import kegiatan1 from "./asset/kegiatanrpl.jpeg";
import kegiatan5 from "./asset/TKRO.jpg";
import Headmaster from "./Headmaster";
import Gallery from "./Gallery";

const Maincontent = () => {
  return (
    <div>
      <Hero />
      <Headmaster />

      {/* JURUSAN */}
      <div className="row">
        <div className="col-12 text-center my-5">
          <h1>Jurusan Sekolah</h1>
        </div>
      </div>
      <Cardjurusan />

      {/* KEGIATAN */}
      <div className="row">
        <div className="col-12 text-center my-5">
          <h1>Kegiatan Sekolah</h1>
        </div>
        <div className="col-lg-4 col-12 mb-10">
          <Cardkegiatan
            image={kegiatan1}
            title="Rekayasa Perangkat Lunak"
            desc="Gambar di atas adalah Jurusan RPL sedang......"
          />
        </div>
        <div className="col-lg-4 col-12">
          <Cardkegiatan
            image={kegiatan1}
            title="Perbankan Syariah"
            desc="Gambar di atas adalah Jurusan Perbankan sedang......"
          />
        </div>
        <div className="col-lg-4 col-12">
          <Cardkegiatan
            image={kegiatan1}
            title="Akutansi"
            desc="Gambar di atas adalah Jurusan Akutansi sedang......"
          />
        </div>
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Gallery Sekolah</h1>
          </div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
