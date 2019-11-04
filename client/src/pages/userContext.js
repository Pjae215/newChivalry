import React from "react";

var UserContext = React.createContext({
  name: "",
  image: "",
  age: "",
  capitalizeFirstLetter: () => {},
  handleBtnClick: () => {}
});

export default UserContext;