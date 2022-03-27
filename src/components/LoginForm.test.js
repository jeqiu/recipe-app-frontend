import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {

  test('login not allowed without username and password', async () => {

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
    render(<LoginForm />);
    userEvent.type(screen.getByPlaceholderText(/enter your username/i), 'John');
    userEvent.type(screen.getByPlaceholderText(/enter your password/i), 'supersecret');

    userEvent.click(screen.getByRole('button', {name: /login/i}));

    const usernameWarning = await screen.findByText('Username must be at least 6 characters');
    expect(usernameWarning).toBeInTheDocument();
    const passwordWarning = await screen.findByText('Password must contain a number');
    expect(passwordWarning).toBeInTheDocument();
  })

  test('attempt login', async () => {
    // const submitData = jest.fn();
    render(<LoginForm />);
    userEvent.type(screen.getByPlaceholderText(/enter your username/i), 'John Doe');
    userEvent.type(screen.getByPlaceholderText(/enter your password/i), 'supersecret42');

    userEvent.click(screen.getByRole('button', {name: /login/i}));

    //expect(submitData).toHaveBeenCalled();

    // await waitFor(() => {
    //   expect(submitData.mock.calls).toHaveLength(1);
    // })
  })

})