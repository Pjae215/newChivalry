import React from "react";
import UserContext from "../../pages/userContext";
import "./style.css";

function CardTitleText() {
  return (
    <UserContext.Consumer>
      {(context) => (
        <h4>{context.capitalizeFirstLetter(context.user.name)},{(context.user.age)}</h4>
      )}  
    </UserContext.Consumer>
  );
}

export default CardTitleText;