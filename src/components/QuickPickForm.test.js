import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import QuickPickForm from './QuickPickForm';

describe('<QuickPickForm />', () => {

  test('render random recipe', async () => {
    render(<QuickPickForm />);
    expect(screen.getByText(/This app suggests a random recipe using the Spoonacular API. The ingredients are also displayed so that it's easy to decide whether this is something you're interested in making./i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId('getNewRecipeButton'));

    expect(screen.queryByText(/This app suggests a random recipe using the Spoonacular API./i, { exact: false })).not.toBeInTheDocument();
  })

  test('render random recipe with excluded ingredients', async () => {
    render(<QuickPickForm />);
    expect( screen.getByText(/This app suggests a random recipe using the Spoonacular API/i, { exact: false }) ).toBeInTheDocument();
    const ingredientsToExclude = screen.getByTestId('excludeInput');
    userEvent.type(ingredientsToExclude, 'peanuts, peanut butter');
    userEvent.click(screen.getByTestId('getNewRecipeButton'));
    expect(screen.queryByText(/This app suggests a random recipe using the Spoonacular API./i, { exact: false })).not.toBeInTheDocument();
  })
})