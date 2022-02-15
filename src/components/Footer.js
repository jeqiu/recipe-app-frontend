import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  
  const footerStyle = {
    color: 'white',
    fontSize: 16
  }

  return (
    <Col style={footerStyle} className='footer text-center py-3 bg-dark'>
      <em>Quick-Pick-Recipe App, 2022.</em> Recipes from Spoonacular API.
    </Col>
  )
}

export default Footer