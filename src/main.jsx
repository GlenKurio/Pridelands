import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CalendarProvider } from "./contexts/calendar.context";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./pages/ErrorFallback.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalendarProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </CalendarProvider>
  </React.StrictMode>
);
