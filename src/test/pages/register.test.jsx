import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Register from '../../pages/register.jsx';

describe('Registration Page', () => {
  it('should render the registration form', () => {
    render(<Register />);
    
    const heading = screen.getByRole('heading', { name: /registration/i });
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const registerButton = screen.getByRole('button', { name: /register/i });
    
    expect(heading).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });
  
  it('should show error when email is blank', () => {
    render(<Register />);
    
    const passwordInput = screen.getByLabelText(/password/i);
    const registerButton = screen.getByRole('button', { name: /register/i });
    
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);
    
    const errorMessage = screen.getByText(/email must not be blank/i);
    expect(errorMessage).toBeInTheDocument();
  });
  
  it('should show error when password is blank', () => {
    render(<Register />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const registerButton = screen.getByRole('button', { name: /register/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(registerButton);
    
    const errorMessage = screen.getByText(/password must not be blank/i);
    expect(errorMessage).toBeInTheDocument();
  });
  
  it('should show error when password is less than 10 characters', () => {
    render(<Register />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const registerButton = screen.getByRole('button', { name: /register/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });
    fireEvent.click(registerButton);
    
    const errorMessage = screen.getByText(/password must be at least 10 characters long/i);
    expect(errorMessage).toBeInTheDocument();
  });
  
  it('should show success message when registration is successful', () => {
    render(<Register />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const registerButton = screen.getByRole('button', { name: /register/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123456' } });
    fireEvent.click(registerButton);
    
    const successMessage = screen.getByText(/registration successful!/i);
    expect(successMessage).toBeInTheDocument();
  });
});