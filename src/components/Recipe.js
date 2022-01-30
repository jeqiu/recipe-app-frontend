import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import IngredientList from './IngredientList'

const Recipe = ({ title, image, sourceUrl, ingredients, imgLoading, setImgLoading }) => {

  if (imgLoading) {
    setTimeout(() => {
      console.log('executing imgLoad timeout');
      setImgLoading(false);
    }, 1500)
  }
  
  if (title) {
    return (
    <Col style={{ display: imgLoading ? 'none' : null }}>
      <Row className="justify-content-center text-center">
        <Image src={image} alt={title} rounded="true" fluid="true" />
        <Col as="h2">{title}</Col>
      </Row>

      <Row className="justify-content-center text-center">
      <IngredientList ingredients={ingredients} />
      </Row>

      <Row className="justify-content-center text-center">
        <a href={sourceUrl}>View Full Recipe</a>
      </Row>
    </Col>
    )
  }

  return (
  <Col>
    <Row className="justify-content-center text-center">
      <h3>Not sure what to make for your next meal?</h3>
    </Row>
    <Row as="p" className="justify-content-center text-center">
      This returns a random recipe so you can get ideas and be inspired.
    </Row>
  </Col>
  )
}

export default Recipe