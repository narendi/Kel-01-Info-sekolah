import React from 'react'
import '../../styles/footer.css'
import { Link } from "react-router-dom";



function Footer() {
    return (
        <footer>
            <div className="ppdb d-lg-flex justify-content-lg-between text-white">
                <h3>Ayo daftar sekarang juga!</h3>
                <div className="ppdb-1">
                    <a href = "#">PPDB</a>
                </div>
                {window.innerWidth > 430}
            </div>
            <div className="contact-footer d-lg-flex justify-content-between">
                <div className="container-contact">
                    <div className="alamat d-flex">
                        <img src="./logo.png" alt="" />
                        <p className="d-flex flex-column">
                            <span className="fs-3 fw-semibold">SMK Muhammadiyah 04 Sukorejo</span>Jl.
                            Terminal No 2, Kec. Sukorejo, Kabupaten Kendal, Jawa Tengah
                        </p>
                    </div>
                    <div className="contact mt-4">
                        <p>
                            <i className="bi bi-envelope-at-fill"></i>{" "}
                            smkmupatskj@gmail.com
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