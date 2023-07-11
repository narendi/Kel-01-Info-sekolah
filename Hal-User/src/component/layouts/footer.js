import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="ppdb d-lg-flex justify-content-lg-between text-white">
        <h3>Ayo daftar sekarang juga!</h3>
        <div className="ppdb-1">
          <a href="#">PPDB</a>
        </div>
        {window.innerWidth > 430}
      </div>
      <div className="contact-footer d-lg-flex justify-content-between">
        <div className="container-contact">
          <div className="alamat d-flex">
            <img src="./logo.png" alt="" />
            <p className="d-flex flex-column">
              <span className="fs-3 fw-semibold">
                SMK Muhammadiyah 04 Sukorejo
              </span>
              Jl. Terminal No 2, Kec. Sukorejo, Kabupaten Kendal, Jawa Tengah
            </p>
          </div>
          <div className="contact mt-4">
            <p>
              <i className="bi bi-envelope-at-fill"></i> smkmupatskj@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> Shofig Ghorbal
              (08912300000400)
            </p>
            <p>
              <i className="bi bi-telephone-fill"></i> Widodo Adi
              (08912300000400)
            </p>
          </div>
        </div>
        <div className="link d-flex ">
          <div className="link1 d-flex flex-column">
            <h5>Link Helper</h5>
          </div>
          <div className="link1  d-flex flex-column ms-5">
            <h5>Need Help ?</h5>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// const Footer = () => {
//   return (
//     <div className="">
//       <div className="flex text-white justify-evenly ">
//         <div className="flex flex-col">
//           <div className="flex  flex-col mb-5 px-[50px] py-9 ">
//             <h1 className="text-center m-2 font-bold">Alamat</h1>
//             <img src="./circle.png" alt="" />
//           </div>
//         </div>
//         <div className="w-1 h-[250px] bg-gradient-to-b from-slate-800 via-slate-100 to-white-100"></div>
//         <div className="mb-5 flex flex-col py-9 pr-[5px] ">
//           <a href="" className="m-2 font-bold">
//             Tentang Kami
//           </a>
//           <a href="" className="m-2 font-bold">
//             Program Keahlian
//           </a>
//           <a href="" className="m-2 font-bold">
//             Ekstrakulikuler
//           </a>
//         </div>
//         <div className="w-1 h-[250px] bg-gradient-to-b from-slate-800 via-slate-100 to-white-100"></div>

//         <div className="mb-5 flex flex-col py-9">
//           <a href="" className="m-2 font-bold">
//             F.A.Q
//           </a>
//           <a href="" className="m-2 font-bold">
//             SITEMAP
//           </a>
//           <a href="" className="m-2 font-bold">
//             CONDITIONS
//           </a>
//           <a href="" className="m-2 font-bold">
//             LICENSES
//           </a>
//         </div>
//         <div className="w-1 h-[250px] bg-gradient-to-b from-slate-800 via-slate-100 to-white-100"></div>
//         <div className="mb-5 px-[50px]  py-9  ">
//           <h1 className="m-2 text-left font-bold mb-[25px]">SOCIAL MEDIA</h1>
//           <div className="flex mb-5">
//             <img src="./facebook.png" alt="" className="m-1" />
//             <img src="./twitter.png" alt="" className="m-1" />
//             <img src="./linkedin.png" alt="" className="m-1" />
//             <img src="./youtube.png" alt="" className="m-1" />
//             <img src="./instagram.png" alt="" className="m-1" />
//             <img src="./pinterest.png" alt="" className="m-1" />
//           </div>
//           <div className="ps-[25px]">
//             <button className=" w-[200px] py-2 rounded-[25px] bg-gradient-to-r from-purple-800 to-purple-100 text-black">
//               CONTACT
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="items-center flex justify-center flex-col mt-[100px]">
//         <div className="w-4/5 h-[3px] bg-gradient-to-r from-slate-800 via-slate-100 to-white-100"></div>
//         <p className="  text-white text-center py-9">Copyright © 2023</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
