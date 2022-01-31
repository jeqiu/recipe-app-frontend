import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  const footerStyle = {
    color: 'red',
    fontSize: 16
  }

  return (
    <Col style={footerStyle}>
      <br />
      <em>Return-a-Recipe App, 2022</em>
    </Col>
  )
}

export default Footer