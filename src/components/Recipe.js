import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import IngredientList from './IngredientList'

const Recipe = ({ title, image, sourceUrl, ingredients, imgLoading, setImgLoading }) => {

  if (imgLoading) {
    setTimeout(() => {
      console.log('executing imgLoad timeout');
      setImgLoading(false);
    }, 1100)
  }
  
  if (title) {
    return (
    <Col 
    style={{ display: imgLoading ? 'none' : null, borderRadius: 10, border: '2px solid #404040' }}
    sm={{ span: 8 }}
    >
      
      <Row 
        style={{paddingTop: '1rem'}}
        className="align-items-center justify-content-center"
      >
        <Col 
          sm={{ span: 6 }}
          md={{ span: 5 }}
        >
          <Image src={image} alt={title} rounded="true" fluid="true" />
        </Col>
        <Col 
          className="text-center"
          sm={{ span: 6 }}
          sm={{ span: 7 }} 
          as="h3"
        >
          {title}
        </Col>
      </Row>

      <Row>
        <Col><hr /></Col>
      </Row>

      <Row as='h4' className="align-items-center">
        <Col           
          className="text-left" 
          style={{paddingLeft: '1rem', paddingBottom: '0.5rem' }}
        >
          Ingredients Needed
        </Col>
      </Row>
      
      <IngredientList ingredients={ingredients} />

      <Row 
        className="text-center"
        style={{paddingBottom: '1rem'}}
      >
        <Col><a href={sourceUrl}>View Full Recipe</a></Col>
      </Row>

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