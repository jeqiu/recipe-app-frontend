import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Image, Alert } from 'react-bootstrap';
import IngredientList from './IngredientList';
import recipeService from '../services/recipe';

const RandomRecipe = ({ recipeId, title, image, sourceUrl, ingredients, imgLoading, setImgLoading }) => {
  const [isBtnLoading, setBtnLoading] = useState(false);
  const [isRecipeSaved, setRecipeSaved] = useState(false);
  
  const handleClick = async () => {
    setBtnLoading(true);

    let ingredientArr = ingredients.map(ingredient => {
      return ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)
    });
  
    const recipeToSave = {
      recipeId,
      title,
      ingredients: JSON.stringify(ingredientArr),
      url: sourceUrl,
      imageUrl: image,
    };
    try {
      const status = await recipeService.saveRandomRecipe(recipeToSave);
      console.log(status);
      if (status === 201) setRecipeSaved(true);
    } catch (error) {
      console.log(error);
    }
    setBtnLoading(false);
  }

  if (imgLoading) {
    setTimeout(() => {
      console.log('executing imgLoad timeout');
      setImgLoading(false);
    }, 1100)
  }
  
  if (title) {
    return (
    <Col style={{ display: imgLoading ? 'none' : null}}>
      <Row className="justify-content-center">
        <Col 
        style={{ borderRadius: 10, border: '2px solid #404040' }}
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
            md={{ span: 7 }} 
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
          <Col>
          <a href={sourceUrl} style={{textDecoration: 'none'}} target='_blank' rel='noopener noreferrer'>View Full Recipe</a>
          </Col>
        </Row>
        </Col>
      </Row>

     {
      (isRecipeSaved && // test ui without this line first
      <Row className="justify-content-center">
        <Col sm={{ span: 7 }}>
          <Alert variant="success" className="text-center">
            <Alert.Heading>Recipe Saved</Alert.Heading>
            <p>
              <Link to="/recipes" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                See list of saved recipes
              </Link>
            </p>
          </Alert>
        </Col>
      </Row>
      )
      }
      {
      (!isRecipeSaved &&
      <Row className="text-center" style={{paddingTop: '0.5rem'}}>
        <Col className="text-center">
          <Button 
            variant="primary"
            disabled={isRecipeSaved || isBtnLoading}
            onClick={handleClick}
          >
            Save This Recipe
          </Button>
        </Col>
      </Row>
      )
      }
      </Col>
    )
  } else {
    return (
    <Col>
      <Row className="justify-content-center">
        <Col 
          as='p'
          className="text-center"
          sm={{ span: 6 }}
        >
        This app suggests a random recipe using the Spoonacular API. The ingredients are also displayed so that it's easy to decide whether this is something you're interested in making.
        </Col>
      </Row>
    </Col>
    )
  }
}

export default RandomRecipe