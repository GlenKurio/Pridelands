import styled from "styled-components";
import TourCards from "../features/tours/TourCards";
import Heading from "./atoms/Heading";

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 6rem;
`;

function FeaturedTours() {
  return (
    <FeaturedContainer>
      <Heading type="h4" color="gradient" as="h2">
        Featured Tours
      </Heading>
      <TourCards />
    </FeaturedContainer>
  );
}

export default FeaturedTours;
