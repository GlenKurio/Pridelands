import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <>
      <MainNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
