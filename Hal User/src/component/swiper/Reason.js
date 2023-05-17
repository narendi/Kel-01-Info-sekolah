import React from "react";

const Reason = (props) => {
  return (
    <div
      className="container reason d-lg-flex justify-content-lg-center mx-lg-auto"
      style={{ width: "900px", margin: "150px 0" }}
    >
      <div>
        <img
          src="./images/jurusan/reason.png"
          alt=""
          style={{ width: "200px" }}
        />
      </div>
      <div className=" mt-4 ">
        <h4 className="fw-bold">Mengapa harus {props.jurusan} ?</h4>
        <p className=" fw-semibold">{props.reason}</p>
      </div>
    </div>
  );
};

export default Reason;
