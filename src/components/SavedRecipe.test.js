import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import SavedRecipe from './SavedRecipe';

const props = {
  "title": "Lemon Quick Bread",
  "image": "https://spoonacular.com/recipeImages/649755-556x370.jpg",
  "sourceUrl": "http://www.foodista.com/recipe/3G7KLCH7/lemon-quick-bread",
};

describe('<SavedRecipe />', () => {

  test('renders recipe with image and source', async () => {
    render(<SavedRecipe {...props} />);

    const sourceLink = screen.getByRole('link');
    screen.debug(sourceLink);
    expect(sourceLink).toHaveAttribute('target', '_blank', 'rel', 'noopener noreferrer');
    expect(sourceLink.href).toContain('http://www.foodista.com/recipe/3G7KLCH7/lemon-quick-bread');

    const image = screen.getByAltText('Lemon Quick Bread');
    expect(image.src).toContain('https://spoonacular.com/recipeImages/649755-556x370.jpg');
    expect(image).toHaveAttribute('alt', 'Lemon Quick Bread')
  })
})