import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('renders with given title and subtitle', async () => {

    render(<Header title='My test title' subtitle='My test subtitle' />);
    
    const title = screen.getByRole('heading', {level: 1});
    expect(title).toHaveTextContent('My test title');
    const subtitle = screen.getByRole('heading', {level: 5});
    expect(subtitle).toHaveTextContent('My test subtitle');

  })
})