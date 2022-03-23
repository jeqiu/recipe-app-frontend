import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';

test('rendering form and no login allowed with blank username and password', async () => {

  render(<LoginForm />);

  const usernameInput = screen.getByPlaceholderText('Enter your username');
  const passwordInput = screen.getByPlaceholderText('Enter your password');
  expect(usernameInput).toBeDefined();
  expect(passwordInput).toBeDefined();

  userEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    const usernameReq = screen.getByText('Username is required');
    expect(usernameReq).toBeInTheDocument();
  })
  
  await waitFor(() => {
    const passwordReq = screen.getByText('Password is required');
    expect(passwordReq).toBeInTheDocument();
    // screen.debug(passwordReq);
  })

})

test('basic validation of username and password fields', async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByPlaceholderText(/enter your username/i), 'John');
  userEvent.type(screen.getByPlaceholderText(/enter your password/i), 'supersecret');

  userEvent.click(screen.getByRole('button', {name: /login/i}));

  const usernameWarning = await screen.findByText('Username must be at least 6 characters');
  expect(usernameWarning).toBeInTheDocument();
  const passwordWarning = await screen.findByText('Password must contain a number');
  expect(passwordWarning).toBeInTheDocument();
})