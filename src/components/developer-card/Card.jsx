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
        <p>{data.name}</p>
        <p>
          <i style={{ cursor: "not-allowed" }} className="fa fa-map-marker"></i>
          &nbsp;&nbsp;
          {`${data.country}`}
        </p>
      </div>
      <hr />
      <div className="socialLinks">
        <a href={`https://github.com/${data.githubUsername}`} target="blank">
          <i className="fa fa-github" />
        </a>

        <a href={data.linkedInLink} target="blank">
          <i className="fa fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Card;
