import Button from "./atoms/Button";
import Heading from "./atoms/Heading";
import Paragraph from "./atoms/Paragraph";
import styled from "styled-components";

const StyledTourCard = styled.div`
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

  background-image: linear-gradient(
      to right bottom,
      rgba(242, 151, 39, 0.75),
      rgba(221, 96, 49, 0.75)
    ),
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

// const Level = styled.span`
//   text-align: center;
//   width: 33%;
//   align-self: end;
//   background-color: ${(props) =>
//     props.level === "Extreme"
//       ? "var(--color-destructive-500)"
//       : props.level === "Difficult"
//       ? "var(--color-add-blue-2)"
//       : "var(--color-add-green-1)"};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.25rem 0.75rem;
//   font-size: 0.75rem;
//   border-radius: 50px;
// `;

function TourCard({ tour }) {
  const { tourName, price, desc, people } = tour;
  return (
    <StyledTourCard>
      <Picture />
      <Content>
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
