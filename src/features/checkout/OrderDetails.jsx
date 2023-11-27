import { useContext } from "react";
import { useTours } from "../tours/useTours";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CalendarContext } from "../../contexts/calendar.context";
import { devices } from "../../components/layout/Queries";
import Heading from "../../components/atoms/Heading";

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  background-color: var(--color-brand-200);
  color: var(--color-gray-900);
  padding: 1rem;
  border-radius: var(--border-radius-md);
  @media ${devices.tablet} {
    margin: 0 auto;
    width: 100%;
  }

  & div:last-child {
    margin-top: 1rem;
    border-top: 2px solid var(--color-gray-900);
    & span:nth-child(1) {
      font-size: 1.75rem;
    }

    & span:nth-child(2) {
      font-size: 1.5rem;
    }
  }
`;
const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span:nth-child(1) {
    font-size: 1.25rem;
    font-weight: 900;
  }
  & span:nth-child(2) {
    font-size: 1.15rem;
  }
`;

const HeadingContainer = styled.div`
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-gray-900);
`;
function OrderDetails() {
  const { selecDate, selecSlots, selecSeats, selecTotal } =
    useContext(CalendarContext);
  const { toursAll, isLoading } = useTours();
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
  } = toursAll.find((tour) => tour.id == id);

  return (
    <DetailsContainer>
      <HeadingContainer>
        <Heading type="h5" as="h3">
          Order Details
        </Heading>
      </HeadingContainer>
      <DetailsRow>
        <span>Tour:</span>
        <span>{name}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Group:</span>
        <span>{group}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Difficulty:</span>
        <span>{level}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Guides:</span>
        <span>{guides}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Duration (days):</span>
        <span>{duration}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Start date:</span>
        <span>{selecDate.toDateString()}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Price for 1 seat:</span>
        <span>${price}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Seats selected:</span>
        <span>{selecSeats}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Total:</span>
        <span>${selecTotal}</span>
      </DetailsRow>
    </DetailsContainer>
  );
}

export default OrderDetails;
