import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('state check', () => {
  render(<Counter />);
  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Add")
  fireEvent.click(buttonElement)
  expect(divElement).toHaveTextContent("count is 1");
});
