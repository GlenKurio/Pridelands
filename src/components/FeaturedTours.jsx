import styled from "styled-components";
import TourCards from "../features/tours/TourCards";
import Heading from "./atoms/Heading";
import Button from "./atoms/Button";

const FeaturedContainer = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  margin-top: 6rem;
`;

const ButtonWrap = styled.div`
  margin-top: 3rem;
`;

function FeaturedTours() {
  return (
    <FeaturedContainer>
      <Heading type="h4" color="gradient" as="h2">
        Featured Tours
      </Heading>
      <TourCards />
      <ButtonWrap>
        <Button type="reversed" size="lg">
          Discover All Tours &rarr;
        </Button>
      </ButtonWrap>
    </FeaturedContainer>
  );
}

export default FeaturedTours;
