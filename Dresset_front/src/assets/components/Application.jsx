import React from "react";
import Mobile from "../Img/Mobile.png"; // Ensure this path is correct

const Application = () => {
  return (
    <div>
      <img
        src={Mobile}
        style={{
          position: "absolute",
          display: 'flex',
          // top: "1350px",
          height: "90vh",
          width: "100%",
        }}
        alt="Application"
      />
    </div>
  );
};

export default Application;
