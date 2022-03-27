import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import RandomRecipe from './RandomRecipe';

const recipesObj = {
  "id": 649755,
  "title": "Lemon Quick Bread",
  "readyInMinutes": 45,
  "servings": 15,
  "sourceUrl": "http://www.foodista.com/recipe/3G7KLCH7/lemon-quick-bread",
  "image": "https://spoonacular.com/recipeImages/649755-556x370.jpg",
  "vegetarian": false,
  "veryPopular": false,
  "aggregateLikes": 8,
  "sourceName": "Foodista",
  "pricePerServing": 33.23,
  "extendedIngredients": [
        {
          "id": 1011256,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "plain-yogurt.jpg",
          "consistency": "liquid",
          "name": "0% fat greek yogurt",
          "nameClean": "fat free greek yogurt",
          "original": "1 cup Greek Non Fat Plain Yogurt",
          "originalName": "Greek Non Fat Plain Yogurt",
          "amount": 1.0,
          "unit": "cup",
        },
        {
          "id": 1011256,
          "aisle": "Milk, Eggs, Other Dairy",
          "image": "plain-yogurt.jpg",
          "consistency": "liquid",
          "name": "0% fat greek yogurt",
          "nameClean": "fat free greek yogurt",
          "original": "1 cup Greek Non Fat Plain Yogurt",
          "originalName": "Greek Non Fat Plain Yogurt",
          "amount": 1.0,
          "unit": "cup",
        },
    ]
  }

describe('<RandomRecipe />', () => {

  test('render', async () => {
    const setImgLoading = jest.fn();
    render(
      <RandomRecipe
          recipeId={recipesObj.id}
          title={recipesObj.title} 
          image={recipesObj.image} 
          sourceUrl={recipesObj.sourceUrl}
          ingredients={recipesObj.extendedIngredients}
          imgLoading={true}
          setImgLoading={setImgLoading}  
      />
      );
  })
})