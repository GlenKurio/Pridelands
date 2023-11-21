import Button from "../../components/atoms/Button";
import Heading from "../../components/atoms/Heading";
import styled from "styled-components";
import StarRating from "../../components/atoms/star.rating";
import { useNavigate } from "react-router-dom";
import StyledLink from "../../components/atoms/StyledLink";
const StyledTourCard = styled.div`
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-brand-50);
  overflow: hidden;
  &:hover {
    box-shadow: var(--shadow-lg);
  }
`;

const Picture = styled.div`
  background-size: cover;
  background-position: bottom;
  height: 12.5rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  background-image: ${(props) => getBackgroundImage(props.level, props.img)};
  background-position: center;
`;

const getBackgroundImage = (level, img) => {
  return level === "Extreme"
    ? `linear-gradient(to right, rgba(242, 151, 39, 0.75), rgba(221, 96, 49, 0.75)), url(${img})`
    : level === "Medium"
    ? `linear-gradient(to right, rgba(151, 209, 251, .5), rgba(5, 181, 221, .5)), url(${img})`
    : `linear-gradient(to right, rgba(22, 219, 147, .5), rgba(19, 111, 99, .5)), url(${img})`;
};

const Content = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Level = styled.span`
  position: absolute;
  right: 5px;
  top: 185px;

  text-align: center;
  font-weight: 600;
  width: 33%;
  align-self: end;
  background-image: ${(props) =>
    props.level === "Extreme"
      ? "linear-gradient(to right, rgba(242, 151, 39, 0.75), rgba(221, 96, 49, 0.75))"
      : props.level === "Medium"
      ? "linear-gradient(to right, rgba(151, 209, 251, .5), rgba(5, 181, 221, .5))"
      : "linear-gradient(to right, rgba(22, 219, 147, .5), rgba(19, 111, 99, .5))"};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 50px;
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

function TourCard({ tour }) {
  const navigate = useNavigate();
  const {
    id,
    name,
    price,

    group,
    level,
    img,
    guides,
    duration,
    avgRating,
    accommodation,
  } = tour;
  return (
    <StyledTourCard>
      <Picture level={level} img={img}></Picture>
      <Content>
        <Level level={level}>{level}</Level>
        <Heading type="h4" as="h4">
          {name}
        </Heading>

        <Details>
          <DetailsRow>Group of {group} people</DetailsRow>
          <DetailsRow>{accommodation}</DetailsRow>
          <DetailsRow>Guides: {guides}</DetailsRow>
          <DetailsRow>Durtion: {duration} days</DetailsRow>
          <DetailsRow>
            <StarRating
              size={24}
              defaultRating={avgRating}
              color="var(--color-brand-500)"
            />
          </DetailsRow>
        </Details>
        <Price>Price: ${price}</Price>
        <Button
          type="primary"
          size="md"
          onClick={() => navigate(`tours/${id}`)}
        >
          Book
        </Button>
      </Content>
    </StyledTourCard>
  );
}

export default TourCard;
