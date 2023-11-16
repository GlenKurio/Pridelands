import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import FeaturedTours from "../components/FeaturedTours";
import ToursUploader from "../features/tours/ToursUploader";

function HomePage() {
  return (
    <div>
      <MainNav />
      <Header />
      <About />
      <Features />
      <FeaturedTours />
      <ToursUploader />
      <Footer />
    </div>
  );
}

export default HomePage;
