import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { within } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import IngredientList from './IngredientList';

const ingredientsArr = [
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "solid",
          "name": "baking soda",
          "amount": 0.5,
          "unit": "tsp",
        },
        {
          "id": 18372,
          "aisle": "Baking",
          "image": "white-powder.jpg",
          "consistency": "solid",
          "name": "baking soda",
          "amount": 0.5,
          "unit": "tsp",
        },
        {
          "id": 2047,
          "aisle": "Spices and Seasonings",
          "image": "salt.jpg",
          "consistency": "solid",
          "name": "salt",
          "amount": 0.25,
          "unit": "teaspoon",
        },
        {
          "id": 9152,
          "aisle": "Produce",
          "image": "lemon-juice.jpg",
          "consistency": "liquid",
          "name": "lemon juice",
          "amount": 1.0,
          "unit": "cup",
        },
        {
          "id": 9150,
          "aisle": "Spices and Seasonings",
          "name": "sugar",
          "amount": 1.0,
          "unit": "cup",
        },
    ];

describe('<IngredientList />', () => {

  test('renders ingredients without duplicates', () => {
    render(<IngredientList ingredients={ingredientsArr} />);
    const list = screen.getByTestId('ingredientList');
    const listItems = within(list).getAllByRole('listitem');

    expect(listItems.length).toEqual(4);
  })

  test('ingredient names are correctly displayed', () => {
    render(<IngredientList ingredients={ingredientsArr} />);
    const bakingSoda = screen.getByText('Baking soda');
    expect(bakingSoda).toBeInTheDocument();

    const lemonJuice = screen.getByText('Lemon juice');
    expect(lemonJuice).toBeInTheDocument();

    const salt = screen.getByText('Salt');
    expect(salt).toBeInTheDocument();

    const sugar = screen.getByText('Sugar');
    expect(sugar).toBeInTheDocument();
  })

})