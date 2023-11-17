import Button from "../../components/atoms/Button";
import Heading from "../../components/atoms/Heading";
import Paragraph from "../../components/atoms/Paragraph";
import styled from "styled-components";

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

  background-image: ${(props) =>
      props.level === "Extreme"
        ? "linear-gradient(to right, rgba(242, 151, 39, 0.75), rgba(221, 96, 49, 0.75))"
        : props.level === "Difficult"
        ? "linear-gradient(to right, rgba(151, 209, 251, .5), rgba(5, 181, 221, .5))"
        : "linear-gradient(to right, rgba(22, 219, 147, .5), rgba(19, 111, 99, .5))"},
    url(${(props) => props.imageUrl});
`;

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
const Group = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-gray-800);
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
      : props.level === "Difficult"
      ? "linear-gradient(to right, rgba(151, 209, 251, .5), rgba(5, 181, 221, .5))"
      : "linear-gradient(to right, rgba(22, 219, 147, .5), rgba(19, 111, 99, .5))"};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 50px;
`;

function TourCard({ tour }) {
  const { tourName, price, desc, people, level } = tour;
  return (
    <StyledTourCard>
      <Picture level={level}></Picture>
      <Content>
        <p>Flag: "🇺🇸"</p>
        <Level level={level}>{level}</Level>
        <Heading type="h4" as="h4">
          {tourName}
        </Heading>
        <Paragraph type="p">{desc}</Paragraph>
        <Details>
          <Group>For group of {people} people:</Group>
          <Price>Price: ${price}</Price>
        </Details>
        <Button type="primary" size="md">
          Book
        </Button>
      </Content>
    </StyledTourCard>
  );
}

export default TourCard;
