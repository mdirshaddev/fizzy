// React
import { lazy, Fragment } from 'react';

// Tanstack router
import { Outlet, Router, Route, RootRoute } from '@tanstack/router';

// Pages
import IndexPage from 'src/pages';

// Dev tool for debugging react routes
const TanStackRouterDevtools =
  import.meta.env.MODE === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then(res => ({
          default: res.TanStackRouterDevtools
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

// Create a root route
const rootRoute = new RootRoute({
  component: () => (
    <Fragment>
      <Outlet />
      <TanStackRouterDevtools />
    </Fragment>
  )
});

// Start Route tree elements

const IndexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage
});

// End Route tree

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([IndexRoute]);

// Final router from collection of router
export const router = new Router({ routeTree });
