import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = ({title, subtitle}) => {
  const headerStyle = {
    color: 'blue',
  }

  return (
    <>
      <Row as="h1" className="justify-content-center text-center">{title}</Row>
      <Row as="h2" className="justify-content-center text-center">{subtitle}</Row>
    </>
  )
}

export default Header