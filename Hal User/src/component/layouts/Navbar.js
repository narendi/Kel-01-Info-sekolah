import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="./logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          SMK MUPAT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="Jurusan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="TBSM">TBSM</NavDropdown.Item>
              <NavDropdown.Item href="/rpl">RPL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/akutansi">Akutansi</NavDropdown.Item>
              <NavDropdown.Item href="Bank">Perbankan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;