import React from "react";
import icon from "./../images/alert.png";
const Fire = ({ lat, lng, datapop }) => {
  return (
    <button className="button" onClick={datapop}>
      <img src={icon} className="Marker" alt="alert" />
    </button>
  );
};
export default Fire;
