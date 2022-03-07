import React from 'react';
import { Row, Col, } from 'react-bootstrap';

const Header = ({title, subtitle}) => {

  return (
    <>
      <Row 
        className="justify-content-center text-center"
        style={{marginTop: '1rem'}}
      >
        <Col as="h1" >{title}</Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col as="h5">{subtitle}</Col>
      </Row>
    </>
  )
}

export default Header