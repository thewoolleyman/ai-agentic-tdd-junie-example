import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyApp from '../../pages/_app.jsx';

describe('MyApp Component', () => {
  it('should render the provided component with props', () => {
    const TestComponent = ({ testProp }) => <div>Test Component: {testProp}</div>;
    const pageProps = { testProp: 'test value' };
    
    render(<MyApp Component={TestComponent} pageProps={pageProps} />);
    
    const renderedComponent = screen.getByText(/Test Component: test value/i);
    expect(renderedComponent).toBeInTheDocument();
  });
});