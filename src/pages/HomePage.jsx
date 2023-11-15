import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

function HomePage() {
  return (
    <div>
      <MainNav />
      <Header />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
