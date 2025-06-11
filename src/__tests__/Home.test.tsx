import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home', () => {
  test('lists mock walkthroughs', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(screen.getByText(/modern office building/i)).toBeInTheDocument();
    expect(screen.getByText(/residential complex/i)).toBeInTheDocument();
  });
});
