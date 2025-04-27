import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../../pages/index.jsx';

describe('Home Page', () => {
  it('should render the welcome heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /welcome to testing example app/i });

    expect(heading).toBeInTheDocument();
  });

  it('should have a link to the registration page', () => {
    render(<Home />);

    const registerLink = screen.getByRole('link', { name: /register/i });

    expect(registerLink).toBeInTheDocument();
    expect(registerLink).toHaveAttribute('href', '/register');
  });
});
