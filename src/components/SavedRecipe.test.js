import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import SavedRecipe from './SavedRecipe';

describe('<SavedRecipe />', () => {

  test('render', async () => {

    render(<SavedRecipe />);
  })
})