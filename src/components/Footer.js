import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  
  const footerStyle = {
    color: 'red',
    fontSize: 16
  }

  return (
    <Col style={footerStyle} className='footer text-center py-3 bg-dark'>
      <em>Return-a-Recipe App, 2022.</em> Recipes from Spoonacular API.
    </Col>
  )
}

export default Footer