import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "../components/atoms/Heading";

function HomePage() {
  return (
    <div>
      <Header />
      <Heading as="h1" type="h1">
        Pridelands
      </Heading>

      <Footer />
    </div>
  );
}

export default HomePage;
