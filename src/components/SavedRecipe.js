import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import recipeService from '../services/recipe';

const SavedRecipe = ({ recipe_id, title, image, sourceUrl }) => {
  const handleDelete = async () => {
    try {
      const res = await recipeService.deleteRecipe(recipe_id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

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
          <Col style={{fontSize: '1.25rem'}}>
            <b>{title}</b>
          </Col>
        </Row>
        <Row style={{paddingTop: '0.5rem'}}>
          <Col><a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <Button>View Full Recipe</Button>
          </a></Col>
        </Row>
        <Row style={{paddingTop: '0.5rem'}}>
        <Col>
          <Button 
            variant="secondary"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Col>
      </Row>
      </Col>
    </Row>
  )
}

export default SavedRecipe