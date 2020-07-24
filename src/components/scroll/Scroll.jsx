import React from "react";

const Scroll = (props) => {
  return (
    <div style={{ overflowY: "scroll", width: "auto", height: "550px" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
