import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Keyboard } from "swiper";
import CardGuru from "../Guru";
// data guru
import { dataGuru } from "../Data guru";

const SwiperGuru = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="swiper-guru"
      >
        {window.innerWidth > 430 ? (
          <>
            <SwiperSlide className="d-flex justify-content-center py-5">
              <CardGuru />
              <CardGuru />
              <CardGuru />
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center py-5">
              <CardGuru />
              <CardGuru />
              <CardGuru />
            </SwiperSlide>
          </>
        ) : (
          dataGuru.map((e) => (
            <SwiperSlide className="d-flex justify-content-center py-5">
              <div className="card-guru text-center">
                <img src="./../Image/imageInfo/profileGuru.png" alt="" />
                <h5 className="my-3 fw-bold">{e.nama}</h5>
                <p>{e.mataPelajaran}</p>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default SwiperGuru;
