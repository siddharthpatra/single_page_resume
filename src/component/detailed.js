import React from 'react';
import '../App.css';
import {  Row, Col } from 'react-bootstrap';

const detailed = (props)  => {
    return (
        <Row className="">
        <Col xs="4" >
        <p className="detailtext">{props.detail}</p>
        </Col>
        <Col xs="8">
          <p>
            <strong>{props.highlight}<br/></strong>
            {props.detailed}
            <i><br/>{props.more}</i>
        </p>
        </Col>
      </Row>
    );
}

export default detailed;