import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import GlobalStyles from "./styles/GlobalStyles";

import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import AppLayout from "./pages/AppLayout";
import AllToursPage from "./pages/AllToursPage";
import LogIn from "./features/auth/LogIn";
import TourDetails from "./pages/TourDetails";
import CheckoutPage1 from "./pages/CheckoutPage1";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="tours" element={<AllToursPage />} />
      <Route path="tours/:id" element={<TourDetails />} />
      <Route path="checkout/:id" element={<CheckoutPage1 />} />
      <Route
        path="account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />

      <Route path="login" element={<LogIn />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-gray-100)",
              color: "var(--color-gray-800)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
