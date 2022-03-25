import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import QuickPickForm from './QuickPickForm';

describe('<QuickPickForm />', () => {

  test('render', async () => {

    render(<QuickPickForm />);
  })
})