import React from "react";

const Fasilitas = (props) => {
  const imageStyle = {
    order: props.posisiImg,
    width: "400px",
  };
  const descStyle = {
    order: props.posisiDesc,
    marginTop: "140px",
  };

  return (
    <>
      <div
        className="fasilitas d-lg-flex flex-lg-row py-2"
        style={{ borderBottom: "1px solid black" }}
      >
        {window.innerWidth > 430 && (
          <img src={props.fasilitasImg} alt="" style={imageStyle} />
        )}
        <div className="desc px-5" style={descStyle}>
          <h4 className="fw-bold">{props.fasilitasName}</h4>
          {window.innerWidth < 430 && (
            <img
              className="my-5"
              src={props.fasilitasImg}
              alt=""
              style={imageStyle}
            />
          )}
          <p className="mt-3">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

export default Fasilitas;
