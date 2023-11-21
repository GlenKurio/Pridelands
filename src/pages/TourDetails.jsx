import { useTours } from "../features/tours/useTours";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import StarRating from "../components/atoms/star.rating";
import Button from "../components/atoms/Button";

const StyledTourDetails = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  padding: 2rem;
  gap: 2rem;
`;

const ImgContainer = styled.figure`
  & img {
    max-width: 100%;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    font-size: 1.25rem;
    letter-spacing: 1px;
    line-height: 1.5;
    margin: 1.5rem 0;
  }
`;
const DetailsRow = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-gray-800);
  display: block;
  padding: 0.5rem 0.5rem;
  display: flex;
  place-content: center;
  border-bottom: 1px solid var(--color-gray-900);
`;

const Price = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    var(--color-brand-500),
    var(--color-add-orange)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 2rem 0;
`;

function TourDetails() {
  const { tours, isLoading } = useTours();
  console.log(tours);
  const { id } = useParams();
  if (isLoading) return <div>Loading...</div>;

  const {
    name,
    price,
    description,
    group,
    level,
    img,
    guides,
    duration,
    avgRating,
    accommodation,
  } = tours.find((tour) => tour.id == id);

  return (
    <StyledTourDetails>
      <ImgContainer>
        <img src={img} alt="" />
      </ImgContainer>
      <ContentContainer>
        <Heading type="h3" as="h1">
          {name}
        </Heading>
        <p>{description}</p>
        <DetailsRow>
          <StarRating
            size={24}
            defaultRating={avgRating}
            color="var(--color-brand-500)"
          />
        </DetailsRow>
        <DetailsRow>Difficulty: {level}</DetailsRow>
        <DetailsRow>Group Size: {group}</DetailsRow>
        <DetailsRow>Guides: {guides}</DetailsRow>
        <DetailsRow>Duration: {duration} days</DetailsRow>
        <DetailsRow>{accommodation}</DetailsRow>
        <Price>${price} </Price>
        <Button type="primary" size="md">
          Book Now
        </Button>
      </ContentContainer>
    </StyledTourDetails>
  );
}

export default TourDetails;
