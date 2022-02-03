import React from 'react';
import { Row, Col } from 'react-bootstrap';

const IngredientList = ({ ingredients }) => {

  const seen = new Set();
  const filteredIngredients = ingredients.filter(item => {
    const hasDuplicate = seen.has(item.id);
    seen.add(item.id);
    return !hasDuplicate;
  });
  const numIngredients = filteredIngredients.length;

  if (numIngredients > 5) {
    const arrayBreakpoint = Math.ceil(numIngredients / 2);
    const ingredientsFirst = filteredIngredients.slice(0, arrayBreakpoint);
    const ingredientsSecond = filteredIngredients.slice(arrayBreakpoint);

    return (
      <Row className="align-items-center justify-content-center">
        <Col
          as='ul'
          style={{marginLeft: '3rem'}}
          sm={{ span: 5}} 
        >
          {ingredientsFirst.map(ingredient => {
            const name = ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1);
            return <li key={ingredient.id}>{name}</li>
          }
          )}
        </Col>
        <Col
          as='ul'
          style={{marginLeft: '3rem'}} 
          sm={{ span: 5 }} 
        >
          {ingredientsSecond.map(ingredient => {
            const name = ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1);
            return <li key={ingredient.id}>{name}</li>
          }
          )}
        </Col>
      </Row>
    )
  } else {
    return (
      <Row className="align-items-center">
      <Col
        as='ul'
        sm={{ span: 5}}
        style={{marginLeft: '3rem'}} 
      >
        <ul>
        {filteredIngredients.map(ingredient => {
            const name = ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1);
            return <li key={ingredient.id}>{name}</li>
          }
        )}
        </ul>
      </Col>
      </Row>
    )
  }

}

export default IngredientList