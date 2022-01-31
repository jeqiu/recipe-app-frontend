import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import IngredientList from './IngredientList'

const Recipe = ({ title, image, sourceUrl, ingredients, imgLoading, setImgLoading }) => {

  if (imgLoading) {
    setTimeout(() => {
      console.log('executing imgLoad timeout');
      setImgLoading(false);
    }, 1000)
  }
  
  if (title) {
    return (
    <Col 
    style={{ display: imgLoading ? 'none' : null, borderRadius: 10, border: '2px solid #404040' }}
    sm={{ span: 8 }}
    md={{ span: 8 }}
    lg={{ span: 8 }}
    >
      <Row><Col><br /></Col></Row>
      <Row className="align-items-center justify-content-center">
        <Col 
          sm={{ span: 5 }}
          md={{ span: 4 }}
          lg={{ span: 4 }}
        >
          <Image src={image} alt={title} rounded="true" fluid="true" />
        </Col>
        <Col 
          className="text-left"
          sm={{ span: 6 }} 
          md={{ span: 7 }} 
          lg={{ span: 7 }}
          as="h2"
        >
          {title}
        </Col>
      </Row>

      <Row>
        <Col><hr /></Col>
      </Row>

      <Row as='h4' className="align-items-center">
        <Col           
          md={{ span: 6, offset: 2 }} 
          lg={{ span: 6, offset: 2 }}
        >
          Ingredients Needed
        </Col>
      </Row>
      
      <IngredientList ingredients={ingredients} />

      <Row className="text-center">
        <Col><a href={sourceUrl}>View Full Recipe</a></Col>
      </Row>
      <Row><Col><br /></Col></Row>
    </Col>
    )
  }

  return (
  <Col>
    <Row as='h3' className="justify-content-center text-center">
      Not sure what to make for your next meal?
    </Row>
    <Row as='p' className="justify-content-center text-center">
      This returns a random recipe so you can get ideas and be inspired.
    </Row>
  </Col>
  )
}

export default Recipe