// React
import { StrictMode } from 'react';

// React dom
import { createRoot } from 'react-dom/client';

// Sentry for error reporting
import { init, BrowserTracing, Replay } from '@sentry/react';

// Root Level App
import App from 'src/App';

init({
  dsn: import.meta.env.VITE_APP_SENTRY_DSN,
  integrations: [new BrowserTracing(), new Replay()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
