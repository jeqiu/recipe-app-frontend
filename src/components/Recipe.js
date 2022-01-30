import React from 'react'
import { Row, Col } from 'react-bootstrap';
import IngredientList from './IngredientList'

const Recipe = ({ title, image, sourceUrl, ingredients }) => {
  
  if (title) {
    return (
      <>
      <Row className="justify-content-center text-center">
        <img className='col' src={image} alt={title} height="250" width= "auto" />
        <h2 className='col'>{title}</h2>
      </Row>

      <Row className="justify-content-center text-center">
      <IngredientList ingredients={ingredients} />
      </Row>

      <Row className="justify-content-center text-center">
        <a href={sourceUrl}>View Full Recipe</a>
      </Row>
      </>
    )
  }

  return (
    <>
    <Row>
      <h2>DEFAULT TITLE</h2>
    </Row>
    <Row>
      <ul>
        <li>ingredient1</li>
        <li>ingredient2</li>
        <li>ingredient3</li>
      </ul>
    </Row>
    <Row>
      <a>default_source</a>
    </Row>
    </>
  )
}

export default Recipe