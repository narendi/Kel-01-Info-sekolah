import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Guru1 from "./asset/rpl.jpg";

function Guru() {
  return (
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <Image src={Guru1} rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Guru;
