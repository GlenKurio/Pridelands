import { useTours } from "../features/tours/useTours";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import StarRating from "../components/atoms/star.rating";
import Button from "../components/atoms/Button";
import StyledLink from "../components/atoms/StyledLink";

const StyledTourDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  padding: 2rem;
  gap: 2rem;
  margin-top: 4rem;
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
const AddImgs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  width: 100%;

  & img {
    max-width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function TourDetails() {
  const navigate = useNavigate();
  const { toursAll, isLoading } = useTours();
  console.log(toursAll);
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
    availability,
    images,
    stories,
  } = toursAll.find((tour) => tour.id == id);
  console.log(toursAll);
  return (
    <StyledTourDetails>
      <ImgContainer>
        <img src={img} alt="" />
        <AddImgs>
          {images.map((image) => (
            <img key={image.id} src={image.url} />
          ))}
        </AddImgs>
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
        <DetailsRow> Seats Left: {availability[0]?.slots}</DetailsRow>
        <Price>1 seat: ${price} </Price>
        <ButtonsContainer>
          {/* <Button
            type="primary"
            size="md"
            onClick={() => navigate(`checkout/${id}`)}
          >
            Book Now
          </Button> */}
          <StyledLink to={`/checkout/${id}`}>Book</StyledLink>
          <Button type="text" size="md" onClick={() => navigate("..")}>
            &larr; go back
          </Button>
        </ButtonsContainer>
      </ContentContainer>
      {/* {stories.map((story) => (
        <div key={story.id}>
          <span>{story.user_id}</span>
          <span>{story.heading}</span>
          <span>{story.rating}</span>
          <span>{story.content}</span>
        </div>
      ))} */}
    </StyledTourDetails>
  );
}

export default TourDetails;
