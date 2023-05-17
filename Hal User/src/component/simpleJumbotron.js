import React from "react";
import { Container } from "react-bootstrap";

const SimpleJumbotron = (props) => {
  return (
    <div
      className="simple-jumbotron"
      style={{ backgroundColor: props.bgColor }}
    >
      <Container className="d-lg-flex justify-content-lg-between text-white">
        <div className="jumbotron-text">
          <h1 className="fw-bold">{props.jumbotronTitle}</h1>
          {window.innerWidth < 430 && (
            <div className="jumbotron-img">
              <img src={props.jumbotronImg} alt="" />
            </div>
          )}
          <p className="mt-3">{props.jumbotronDesc}</p>
        </div>
        {window.innerWidth > 430 ? (
          <div className="jumbotron-img">
            <img src={props.jumbotronImg} alt="" />
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default SimpleJumbotron;
