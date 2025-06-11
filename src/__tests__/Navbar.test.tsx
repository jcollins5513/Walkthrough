import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders brand title and navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/virtual walkthrough/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /upload/i })).toHaveAttribute('href', '/upload');
  });
});
