import React from "react";

import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="container tc dib pa3 ma3 shadow-5 grow ">
      <div className="avatar">
        <img src={data.avatar} alt="avatar" width="150px" height="150px" />
      </div>
      <div className="texts">
        <h4>{data.title}</h4>
        <h4>{data.name}</h4>
        <p>{`${data.country}`}</p>
      </div>
      <div className="socialLinks"></div>
    </div>
  );
};

export default Card;
