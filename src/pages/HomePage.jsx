import Header from "../components/Header";
import About from "../components/About";
import Features from "../components/Features";

import FeaturedTours from "../features/tours/FeaturedTours";

// import DateRangePicker from "../features/availability/Calendar";
import StoriesSection from "../features/stories/StoriesSection";

function HomePage() {
  return (
    <div>
      <Header />
      <About />
      <Features />
      <FeaturedTours />
      <StoriesSection />

      {/* <DateRangePicker /> */}
    </div>
  );
}

export default HomePage;
