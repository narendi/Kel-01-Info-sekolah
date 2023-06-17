// import Card from "react-bootstrap/Card";
import jurusan1 from "./asset/rpl.jpg";
import jurusan2 from "./asset/bank.jpg";
import jurusan3 from "./asset/ak.jpg";
import jurusan4 from "./asset/elin.jpg";
import jurusan5 from "./asset/tkr.jpg";
import jurusan6 from "./asset/tbsm.jpg";
import { Link } from "react-router-dom";

function Cardjurusan() {
  return (
    <div className="flex flex-wrap justify-center mt-8 ml-16">
      <div className="pl-8">
        <div className="w-2/3 rounded overflow-hidden shadow-lg border-2">
          <img className="w-full" src={jurusan1} alt="rpl" />
          <div className="px-2 py-8">
            <div className="font-bold text-xl ">RPL</div>
            <p className="text-gray-700 text-base">RPL adalah ...</p>
            <Link to="rpl">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pr-2">
        <div className="w-2/3 rounded overflow-hidden shadow-lg">
          <img className="w-full" src={jurusan2} alt="rpl" />
          <div className="px-2 py-8">
            <div className="font-bold text-xl ">Perbankan</div>
            <p className="text-gray-700 text-base">Perbankan adalah ...</p>
            <Link to="bank">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Selengkapnyanya
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pr-2">
        <div className="w-2/3 rounded overflow-hidden shadow-lg">
          <img className="w-full" src={jurusan3} alt="rpl" />
          <div className="px-2 py-8">
            <div className="font-bold text-xl ">Akutansi</div>
            <p className="text-gray-700 text-base">
              Akutansi adalah Jurusan yang...
            </p>
            <Link to="akutansi">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Selengkapnyanya
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-8 mt-4">
        <div className="w-2/3 rounded overflow-hidden shadow-lg">
          <img className="w-full" src={jurusan4} alt="rpl" />
          <div className="px-2 py-8">
            <div className="font-bold text-xl ">Elin</div>
            <p className="text-gray-700 text-base">Elin adalah...</p>
            <Link to="elind">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Selengkapnyanya
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pr-2 mt-4">
        <div className="w-2/3 rounded overflow-hidden shadow-lg">
          <img className="w-full" src={jurusan5} alt="rpl" />
          <div className="px-2 py-8">
            <div className="font-bold text-xl ">TKR</div>
            <p className="text-gray-700 text-base">TKRO adalah...</p>
            <Link to="tkr">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Selengkapnyanya
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pr-2 mt-4">
        <div className="w-2/3 rounded overflow-hidden shadow-lg">
          <img className="w-full" src={jurusan6} alt="rpl" />
          <div className="px-2 py-8">
            <div className="font-bold text-xl ">TBSM</div>
            <p className="text-gray-700 text-base">TBSM adalah...</p>
            <Link to="tbsm">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Selengkapnyanya
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardjurusan;
