import GridContainer from "../../components/layout/GridContainer";
import TourCard from "./TourCard";
import { useTours } from "./useTours";
import Spinner from "../../components/atoms/Spinner";

function FeaturedTourCards() {
  const { isLoading, tours } = useTours();
  if (isLoading) return <Spinner />;
  // show only fetaured tours
  let featuredTours;
  featuredTours = tours.filter((tour) => tour.featured === true);
  console.log(featuredTours);
  return (
    <GridContainer type="autofitCards">
      {featuredTours.map((tour) => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </GridContainer>
  );
}

export default FeaturedTourCards;
