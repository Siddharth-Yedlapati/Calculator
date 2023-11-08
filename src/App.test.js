import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Result', () => {
  render(<App />);
  const linkElement = screen.getByText(/Result/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders equal button', () => {
  render(<App />);
  const linkElement = screen.getByText(/=/i);
  expect(linkElement).toBeInTheDocument();
});
