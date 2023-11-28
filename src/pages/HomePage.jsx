import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";
import FeaturedTours from "../features/tours/FeaturedTours";

import StoriesSection from "../features/stories/StoriesSection";

function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <FeaturedTours />
      <StoriesSection />
    </div>
  );
}

export default HomePage;
