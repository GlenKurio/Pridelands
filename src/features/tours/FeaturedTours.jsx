import styled from "styled-components";
import FeaturedTourCards from "./FeaturedTourCards";
import Heading from "../../components/atoms/Heading";
import Button from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <FeaturedContainer>
      <Heading type="h4" color="gradient" as="h2">
        Featured Tours
      </Heading>
      <FeaturedTourCards />
      <ButtonWrap>
        <Button type="reversed" size="lg" onClick={() => navigate("/tours")}>
          Discover All Tours &rarr;
        </Button>
      </ButtonWrap>
    </FeaturedContainer>
  );
}

export default FeaturedTours;
