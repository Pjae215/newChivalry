import React, { Component} from "react";
import {Button} from 'react-bootstrap'
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import form from "../components/form";
// import Book from "../components/Book";
// import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row} from "../components/Grid";
// import { List } from "../components/List";

class SignUp extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    email: "",
    password: "",
    gender: "",
    username: "",
    age: "",
    zipcode: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getRecords = () => {
      this.props.history.push ("/matches")
      alert("Thanks for joining " + this.state.username + " Let's you find some matches")
  };


  handleformSubmit = (event) => {
    event.preventDefault();
    this.handleRecordsSave();
  };

  handleRecordsSave = () => {

    API.saveRecords({
      email: this.state.email,
      username: this.state.username,
      age: this.state.age,
      gender: this.state.gender,
      zipcode: this.state.zipcode,
      password: this.state.password
    }).then(() => this.getRecords());
  };

  render() {
    return (
      
      <form>
          <Row> 
            <Col size="md-6">
            <label> Email <input name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}/></label>
            
            
            </Col>
            <Col size="md-6">
                    <label> UserName <input name="username" type="text" placeholder="Enter your username" value={this.state.username}
          onChange={this.handleInputChange}/></label>
                </Col>
</Row>
            <Row>
                <Col size="md-6">
                    <label> <select name="gender" value={this.state.gender}
          onChange={this.handleInputChange}>
                        <option>Choose...</option>
                        <option>Male</option>
                        <option>Female</option> Gender</select></label>
                
                </Col>
                <Col size="md-6">
                    <label> Current Age <input name="age" minLength="2" maxLength="2" id="age" placeholder="Age" value={this.state.age}
          onChange={this.handleInputChange}/></label>
                  
                </Col>
                <Col size="md-6">
                    <label> Zipcode <input name="zipcode" minLength="5" maxLength="5" placeholder="Enter Zipcode" value={this.state.zipcode}
          onChange={this.handleInputChange}/></label>
                   
                </Col>
                
            </Row>

            <Row>
                <Col size="md-6">
                    <label> Password <input name="password" type="password" minLength="8" maxLength="8" placeholder="Password" value={this.state.password}
          onChange={this.handleInputChange}/></label>
                  
                </Col>
                <Col size="md-6">
                <label> Password <input name="password2" type="password" minLength="8" maxLength="8" placeholder="Verify Password" value={this.state.password2}
          onChange={this.handleInputChange}/></label>
              
                </Col>
            </Row>

            
            <Button variant="danger btn-md" type="submit" onClick={this.handleformSubmit}>
                Submit 
            </Button>


    
        </form>
    )}}
export default SignUp;
