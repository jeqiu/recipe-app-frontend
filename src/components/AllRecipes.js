import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import recipeService from '../requests/recipe';

const AllRecipes = () => {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    recipeService
      .getAllRecipes()
      .then(recipes=>{
        console.log(recipes);
        setRecipes(recipes)});
      // .then(recipeObj => {
      //   setRecipes(recipeObj);
      //   console.log(recipeObj.title);
      //   console.log(recipeObj.image);
      //   console.log(recipeObj.sourceUrl);
    }, []);

  return (
    <>
      {/* {recipes.map()} */}
    </>
  )

}

export default AllRecipes