import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Keyboard } from "swiper";
import { Container } from "react-bootstrap";

const GaleryJurusan = (props) => {
  let navResponsive = window.innerWidth > 430 ? true : false;
  return (
    <Container>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={navResponsive}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="galery-swiper"
        style={{ marginTop: "100px" }}
      >
        <SwiperSlide>
          <img src={props.slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={props.slide3} alt="" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default GaleryJurusan;
