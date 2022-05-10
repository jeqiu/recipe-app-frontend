import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
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

  test('render with falsy title', async () => {
    render(
      <RandomRecipe
          recipeId={recipesObj.id}
          title={null}
          image={recipesObj.image} 
          sourceUrl={recipesObj.sourceUrl}
          ingredients={recipesObj.extendedIngredients}
          imgLoading={true}
          setImgLoading={null}  
      />
    );
    expect( screen.getByText(/This app suggests a random recipe using the Spoonacular API/i, { exact: false }) ).toBeInTheDocument();
  })

  test('render recipe', async () => {
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
    expect(screen.getByTestId('heading')).toHaveTextContent('Lemon Quick Bread');

    const image = screen.getByAltText('Lemon Quick Bread');
    expect(image).toHaveAttribute('src', 'https://spoonacular.com/recipeImages/649755-556x370.jpg');

    const link = screen.getByText('View Full Recipe');
    expect(link).toHaveAttribute('href', 'http://www.foodista.com/recipe/3G7KLCH7/lemon-quick-bread');
  })
})