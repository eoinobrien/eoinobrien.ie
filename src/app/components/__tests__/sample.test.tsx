import React from 'react';
import { render, screen } from '@testing-library/react';

function SampleComponent() {
  return <div>Hello, World!</div>;
}

test('renders the correct content', () => {
  render(<SampleComponent />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});