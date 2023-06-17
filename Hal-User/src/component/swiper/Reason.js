import React from "react";

const Reason = (props) => {
  return (
    <div
      className="container reason d-lg-flex justify-content-lg-between mx-5"
      style={{ width: "900px", margin: "150px" }}
    >
      <div>
        <img
          src="./Image/jurusan/reason.png"
          alt=""
          style={{ width: "1000px" }}
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
