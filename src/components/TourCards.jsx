import GridContainer from "./layout/GridContainer";
import TourCard from "./TourCard";
// import Flicking, { ViewportSlot } from "@egjs/react-flicking";

// export default class DemoComponent extends Component {
//   public render() {
//     return <Flicking moveType="freeScroll" bound={true}>
//       <span className="button mr-2 is-white">🍎 Apple</span>
//       <span className="button mr-2 is-white">🍉 Watermelon</span>
//       <span className="button mr-2 is-white">🥝 Kiwi</span>
//       <span className="button mr-2 is-white">...</span>
//     </Flicking>;
//   }
// }

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
