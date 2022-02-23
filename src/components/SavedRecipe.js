import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const SavedRecipe = ({ title, image, sourceUrl }) => {
  return (
    <Row 
    style={{paddingTop: '1rem'}}
    className="align-items-center justify-content-center"
    >
      <Col
        sm={{ span: 4 }}
      >
        <Image src={image} alt={title} rounded="true" fluid="true" />
      </Col>
      <Col sm={{ span: 8 }}>
        <Row>
          <Col>
            <b>{title}</b>
          </Col>
        </Row>
        <Row>
          <Col><a href={sourceUrl} target="_blank" rel="noopener noreferrer">View Full Recipe</a></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SavedRecipe