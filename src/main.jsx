import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CalendarProvider } from "./contexts/calendar.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalendarProvider>
      <App />
    </CalendarProvider>
  </React.StrictMode>
);
