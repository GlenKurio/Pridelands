import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
