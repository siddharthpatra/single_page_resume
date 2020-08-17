import React from 'react';
import '../App.css';
import {  Row, Col } from 'react-bootstrap';

const details = (props)  => {
    return (
        <Row className="">
        <Col xs="4" >
        <p className="detailtext">{props.detail}</p>
        </Col>
        <Col xs="8">
          <p>
            {props.detailed}
            <br/>
            <a href={props.linkrl} target="_blank"
                rel="noopener noreferrer">
                {props.link}
                </a>
        </p>
        </Col>
      </Row>
    );
}

export default details;