import React from "react";

const Purpose = (props) => {
  return (
    <div className="purpose d-flex justify-content-center text-white">
      <div className={`purpose-card ${props.bg}`}>
        <div className="d-flex justify-content-between mb-3">
          <h5>Berlogika</h5>
          <img
            src="./images/purpose/icon-logic.png"
            alt=""
            style={{ width: "35px" }}
          />
        </div>
        <p>Melatih logika seorang murid</p>
      </div>
      <div className={`purpose-card ${props.secondBg}`}>
        <div className="d-flex justify-content-between mb-3">
          <h5>Disiplin</h5>
          <img
            src="./images/purpose/icon-logic.png"
            alt=""
            style={{ width: "35px" }}
          />
        </div>
        <p>Melatih Kedisiplinan seorang murid</p>
      </div>
      <div className={`purpose-card ${props.bg}`}>
        <div className="d-flex justify-content-between mb-3">
          <h5>Berlogika</h5>
          <img
            src="./images/purpose/icon-logic.png"
            alt=""
            style={{ width: "35px" }}
          />
        </div>
        <p>Melatih logika seorang murid</p>
      </div>
    </div>
  );
};

export default Purpose;
