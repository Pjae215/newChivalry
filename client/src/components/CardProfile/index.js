import React from "react";
import UserContext from "../../pages/userContext";
import "./style.css";

function CardProfile(props) { 
 
  return (
      <div>
      <UserContext.Consumer>

      {(context) => (
        <h4>{context.capitalizeFirstLetter(context.user.name)}</h4>
      )}
    
    
      {({user}) => (
        <div>
          <img className="card-img" src={user.image} alt="user thumbnail" />
          {!user.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
        </div>
      )} 
      
     {({ user }) => (
        <div>
          <h4>
          Age: {user.age}
          </h4>
        </div>
      )}

    {({ handleBtnClick }) => (
        <button onClick={handleBtnClick} data-value="back" className={`card-btn ${props["data-value"]}`} {...props} />
      )}

    {({ handleBtnClick }) => (
        <button onClick={handleBtnClick} data-value="next" className={`card-btn ${props["data-value"]}`} {...props} />
      )}

    </UserContext.Consumer> 
    </div>
  );
}

export default CardProfile;