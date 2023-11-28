import GridContainer from "../../components/layout/GridContainer";
import TourCard from "./TourCard";
import { useTours } from "./useTours";
import Spinner from "../../components/atoms/Spinner";
// import { useFavs } from "../users/useFavourites";
function FeaturedTourCards() {
  const { isLoading, toursAll } = useTours();
  // const { userFavs } = useFavs();

  if (isLoading) return <Spinner />;
  // show only fetaured tours

  let featuredTours;
  featuredTours = toursAll.filter((tour) => tour.featured === true);

  return (
    <GridContainer type="autofitCards">
      {featuredTours.map((tour) => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </GridContainer>
  );
}

export default FeaturedTourCards;
