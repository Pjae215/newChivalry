import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Book({ username, email, link, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{username}</h3>
          {email && <h5 className="font-italic">{email}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
  
    </ListItem>
  );
}

export default Book;
