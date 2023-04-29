// React
import { Fragment } from 'react';

// Tanstack router
import { RouterProvider } from '@tanstack/router';

// Router
import { router } from 'src/router';

// Modules theme
import MaterialThemeProvider from 'src/modules/theme';
import FetchProvider from './modules/fetch';

// Register your router for maximum type safety
declare module '@tanstack/router' {
  interface Register {
    router: typeof router;
  }
}

// Root Level
export default function App() {
  return (
    <Fragment>
      <MaterialThemeProvider>
        <FetchProvider>
          <RouterProvider router={router} />
        </FetchProvider>
      </MaterialThemeProvider>
    </Fragment>
  );
}
