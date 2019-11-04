import React from "react";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";

function Card() {
  return (
    <div>
      <CardHeading />
      <CardImg />
      <CardBtn
        style={{ opacity: 1 }}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: 1 }}
        data-value="next"
      />
    </div>
  );
}

export default Card;