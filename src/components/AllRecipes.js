import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import recipeService from '../requests/recipe';
import SavedRecipe from './SavedRecipe';

const AllRecipes = () => {
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
          title={recipe.title}
          sourceUrl={recipe.url}
          image={recipe.image_url}
        />
      )}
    </Col>
  )

}

export default AllRecipes