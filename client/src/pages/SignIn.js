import React, { Component} from "react";
import {Button, Container} from 'react-bootstrap'
// import API from "../utils/API";
import { Col, Row} from "../components/Grid";


class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  componentDidMount() {
    console.log("loaded");
  }

  handleInputChange = event => {
     const { name, value } = event.target;
      this.setState({
      [name]: value
    });
  };



  
  handleformSubmit = (event) => {
    event.preventDefault();
    alert("Welcome Back..." + this.state.email + " Let's see your matches for today")
    this.props.history.push ("/matches");
  };

  render() {
    return (
    <Container fluid>
    <Row>
          <Col size="md-6">



       <form>
<Row>
  <Col size="md-6">
  <label> Email: <input name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange}/> </label>
              
  </Col>

  <Col size="md-6">
    <label> Password: <input name="password" type="password" minLength="8" maxLength="8" placeholder="Password"  value={this.state.password}
          onChange={this.handleInputChange}/></label>
 
  </Col>
  </Row>
  <Button variant="primary" type="submit" onClick={this.handleformSubmit}>
    SignIn
  </Button>
   
</form>
       </Col></Row>     </Container>
    );
  }
}

export default SignIn;
