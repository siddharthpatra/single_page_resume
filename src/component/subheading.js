import React from 'react';
import '../App.css';
import {  Row, Col } from 'react-bootstrap';

const subheading = (props)  => {
    return (
        <Row className="subheading">
        <Col xs="4" >
            <hr className="greyline" />
        </Col>
        <Col xs="4">
          <p>{props.subhead}</p>
        </Col>
        <Col xs="4">
        <hr className="greyline" />
        </Col>
      </Row>
    );
}

export default subheading;