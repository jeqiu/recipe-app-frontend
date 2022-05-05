import React from 'react'
import { Col } from 'react-bootstrap';

const Footer = () => {
  
  const footerStyle = {
    color: 'white',
    fontSize: 16
  }

  return (
    <Col data-testid='footer' style={footerStyle} className='footer text-center py-3 bg-dark'>
      <em>Recipes from Spoonacular API. Quick-Pick Recipes App, 2022.</em>
    </Col>
  )
}

export default Footer