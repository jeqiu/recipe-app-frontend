import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = ({title, subtitle}) => {
  
  const headerStyle = {
    color: 'blue',
  }

  return (
    <>
      <Row className="justify-content-center text-center">
        <Col as="h1" >{title}</Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col as="h4">{subtitle}</Col>
      </Row>
    </>
  )
}

export default Header