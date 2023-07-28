import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero1 from "./asset/fotosekolah.jpeg";
import Hero2 from "./asset/anime.jpg";
import Hero3 from "./asset/wp2.jpg";

const Hero = () => {
  const [dataimage, setDataImage] = useState([]);

  useEffect(() => {
    fetchDataImage();
  }, []);

  const fetchDataImage = async () => {
    try {
      const response = await fetch("http://localhost:3100/image/all");
      const data = await response.json();
      setDataImage(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Carousel>
      {dataimage.map((image) => (
        <Carousel.Item>
          <img
            className="d-block w-100 h-screen"
            src={`http://localhost:3100/images/slider/${image.image}`}
          />
          <Carousel.Caption>
            <h3>{image.name}</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
