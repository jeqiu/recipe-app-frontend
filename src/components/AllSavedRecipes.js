import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import recipeService from '../services/recipe';
import SavedRecipe from './SavedRecipe';

const AllSavedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService
      .getAllRecipes()
      .then(savedRecipes=>{
        console.log(savedRecipes);
        setRecipes(savedRecipes)});
    }, []);

  return (
    <Col sm={{ span: 10, offset: 1 }}>
      <Row><Col as={'h3'}>Saved Recipes</Col></Row>
      {recipes.map(recipe=>
        <SavedRecipe
          key={recipe.recipe_id}
          recipe_id={recipe.recipe_id}
          title={recipe.title}
          sourceUrl={recipe.url}
          image={recipe.image_url}
        />
      )}
    </Col>
  )

}

export default AllSavedRecipes