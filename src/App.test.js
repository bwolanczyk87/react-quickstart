import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, Miłosz!/i);
  expect(linkElement).toBeInTheDocument();
});
