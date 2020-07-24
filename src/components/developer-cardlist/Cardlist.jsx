import React from "react";
import Card from "../developer-card/Card";

const Cardlist = ({ data }) => {
  return (
    <div>
      {data.map((developer) => (
        <Card key={developer.serialNumber} data={developer} />
      ))}
    </div>
  );
};

export default Cardlist;
