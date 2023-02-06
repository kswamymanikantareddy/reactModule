import React from 'react';
import { render, screen } from '@testing-library/react';
import {Person} from './Person';

test('renders name', () => {
  render(<Person name='mani' />);
  const linkElement = screen.getByText(/name is mani/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders role', () => {
    render(<Person name='mani' />);
    const divElement = screen.getByRole("contantinfo");
    expect( divElement ).toHaveTextContent('name is mani');
    expect( divElement ).toHaveAttribute('role','contantinfo');

  });
  