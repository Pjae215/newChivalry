import React from "react";
import "./style.css"


function NavigationBar () {
      return(

      
<nav className="navbar navbar-expand-sm bg-dark navbar-dark static-top">
    <div className="container">
    <a className="navbar-brand" id= "logo" href="/">CHIVALRY</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
        
        <li className="nav-item active">
            <a className="nav-link" href='/'>Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href='/SignIn'>SignIn</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href= '/SignUp'>SignUp</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  ); 
      };
  
export default NavigationBar;


