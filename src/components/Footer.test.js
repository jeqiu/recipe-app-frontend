import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
  test('renders with footer text', () => {

    render(<Footer />);
    
    const footer = screen.getByText(/Recipes from Spoonacular API/);
    expect(footer).toHaveTextContent(/Quick-Pick Recipes App, 2022./);

  })
})