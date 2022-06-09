import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from 'router';

// TODO: Need to work on it's customizations
function renderWithRoute(path: string) {
  const { container } = render(
    <MemoryRouter initialEntries={[path]}>
      <AppRouter />
    </MemoryRouter>
  );
  return container;
}

export default renderWithRoute;
