import GridContainer from "../../components/layout/GridContainer";
import TourCard from "./TourCard";

const data = [
  {
    tourName: "Light",
    desc: "Some description Goes Here",
    price: 999,
    people: 5,
    level: "Easy",
  },
  {
    tourName: "Medium",
    desc: "Some description Goes Here",
    price: 1399,
    people: 7,
    level: "Difficult",
  },
  {
    tourName: "Premium",
    desc: "Some description Goes Here",
    price: 2599,
    people: 3,
    level: "Extreme",
  },
];

function TourCards() {
  return (
    <GridContainer type="autofitCards">
      {data.map((tour) => (
        <TourCard tour={tour} key={tour.tourName} />
      ))}
    </GridContainer>
  );
}

export default TourCards;
