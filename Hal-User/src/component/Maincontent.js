import Hero from "./Hero";
import Cardjurusan from "./Card Jurusan";
// import Statistict from "./Statistict";
import Headmaster from "./Headmaster";
import kegiatan1 from "./asset/TKRO.jpg";
import { Link } from "react-router-dom";

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
          <h1 className="font-bold">Kegiatan Sekolah</h1>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="pl-28">
          <div className="w-9/12 rounded overflow-hidden shadow-lg border-2">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>

        <div className="pr-2">
          <div className="w-9/12 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>

        <div className="pr-10">
          <div className="w-9/12 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={kegiatan1} alt="rpl" />
          </div>
        </div>
      </div>
      <Link to="gallery">
        <p className="text-center font-bold mt-8">Lainya</p>
      </Link>
    </div>
  );
};

export default Maincontent;
