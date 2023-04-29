import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// old test function
// test('renders learn react link', () => {
//  render(<App />);
//  const linkElement = screen.getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});

// new test function
describe('The main app', () => {
  // Ensure Orders component is somewhere within the App component
  it('should render the Orders link', () => {
    render(<App />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });
  // Ensure Payment component is somewhere within the App component
  it('should render the Payments link', () => {
    render(<App />);
    expect(screen.getByText('Payments')).toBeInTheDocument();
  });
})
