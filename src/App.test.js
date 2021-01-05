import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello avanade', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, Avanade!/i);
  expect(linkElement).toBeInTheDocument();
});
