import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CalendarProvider } from "./contexts/calendar.context";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./services/stripe/stripe.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalendarProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </CalendarProvider>
  </React.StrictMode>
);
