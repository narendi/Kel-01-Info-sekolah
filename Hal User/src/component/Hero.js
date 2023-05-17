import { Carousel } from "react-bootstrap";
import Hero1 from "./asset/fotosekolah.jpeg";
import Hero2 from "./asset/anime.jpg";
import Hero3 from "./asset/wp2.jpg";

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero1} alt="First slide" />
        <Carousel.Caption>
          <h3>SELAMAT DATANG DI WEB SMK MUHAMMADIYAH 4 SUKOREJO</h3>
          <p>Ada Terdapat Banyak Jurusan kegiatan dan Guru Silahkan Di Baca</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Lihat Selanjutnya</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Hero3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Lihat Selanjutnya</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
