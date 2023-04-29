/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_SENTRY_DSN: string;
  readonly VITE_APP_API_KEY: string;
  readonly VITE_APP_AUTH_DOMAIN: string;
  readonly VITE_APP_PROJECT_ID: string;
  readonly VITE_APP_STORAGE_BUCKET: string;
  readonly VITE_APP_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_FIREBASE_ID: string;
  readonly VITE_APP_MEASUREMENT_ID: string;
  readonly VITE_APP_LOGTAIL_SOURCE_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
