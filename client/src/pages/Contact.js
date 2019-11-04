import React, {Component} from "react";
import { Form, Button, Col} from 'react-bootstrap';


class Contact extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    email: "",
    name: "",
    message: ""
    
  };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent page refresh //and alert the user of the email and username they chose
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`For future sign in use : ${this.state.email}`);
    this.setState({ email: "", name: "", message: "" });  
  };

    render() {

    return (
      <Form id="contactForm">

    <Form.Row className = "row6">
    <Form.Group as={Col} controlId="formGridEmail2">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email}
          onChange={this.handleInputChange} />
            <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            </Form.Row>

    <Form.Row className = "row4">
    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" id="name" placeholder="Enter your name" value={this.state.name}
          onChange={this.handleInputChange}/>
                </Form.Group>
            </Form.Row>

            <Form.Row className = "row5">
    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Message</Form.Label>
                    <Form.Control name="text" type= "text-area" rows="5" placeholder="Enter your message" value={this.state.message}
          onChange={this.handleInputChange}/>
                </Form.Group>
            </Form.Row>

            <Button variant="danger btn-md" type="submit" onClick={this.handleFormSubmit}>Submit </Button>
</Form>
    );
  }}
  
  export default Contact;