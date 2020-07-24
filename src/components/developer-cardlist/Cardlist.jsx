import React from "react";
import Card from "../developer-card/Card";
import { data } from "../../data";

const Cardlist = () => {
  return (
    <div>
      {data.map((developer) => (
        <Card key={developer.serialNumber} data={developer} />
      ))}
    </div>
  );
};

export default Cardlist;
