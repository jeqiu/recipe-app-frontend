import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const SavedRecipe = ({ title, image, sourceUrl }) => {
  return (
    <Row className="align-items-center justify-content-center">
      <Col>
        <Image src={image} alt={title} rounded="true" fluid="true" />
      </Col>
      <Col>
        <Row>
          <Col>{title}</Col>
        </Row>
        <Row>
          <Col><a href={sourceUrl} target="_blank" rel="noopener noreferrer">View Full Recipe</a></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SavedRecipe