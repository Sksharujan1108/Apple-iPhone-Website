import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://969553321bce87e1c3bb48dc67784f34@o4509211825012736.ingest.us.sentry.io/4509211826061312",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [
    // Sentry.browserTracingIntegration(),
    // Sentry.metrics.metricsAggregatorIntegration(),
    Sentry.replayIntegration({
      // Additional SDK configuration goes in here, for example:
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // tracesSampleRate: 1.0, 
  // tracePropagationTargets: ["localhost"],
  // replaysSessionSampleRate: 0.1,
  // replaysOnErrorSampleRate: 1.0, 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)