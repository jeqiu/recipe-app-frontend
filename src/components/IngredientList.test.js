import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import IngredientList from './IngredientList';

const ingredientsArr = [
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "solid",
          "name": "baking soda",
          "nameClean": "baking soda",
          "original": "1/2 tsp. baking soda",
          "originalName": "baking soda",
          "amount": 0.5,
          "unit": "tsp",
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "solid",
          "name": "baking soda",
          "nameClean": "baking soda",
          "original": "1/2 tsp. baking soda",
          "originalName": "baking soda",
          "amount": 0.5,
          "unit": "tsp",
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "nameClean": "table salt",
          "original": "1/4 teaspoon salt",
          "originalName": "salt",
          "amount": 0.25,
          "unit": "teaspoon",
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "lemon juice",
          "nameClean": "lemon juice",
          "original": "1 cup fresh lemon juice, about 12 lemons",
          "originalName": "fresh lemon juice, about 12 lemons",
          "amount": 1.0,
          "unit": "cup",
        },
    ];

describe('<RandomRecipe />', () => {

  test('render', async () => {

    render(<IngredientList />);
  })
})